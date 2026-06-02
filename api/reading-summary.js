const ALLOWED_ORIGINS = new Set(["https://lo-punny.github.io"]);
const MAX_QUESTION_LENGTH = 120;
const MAX_CARDS = 3;
const DEFAULT_MODEL = "deepseek-v4-flash";
const REQUEST_TIMEOUT_MS = 15000;

function setCorsHeaders(req, res) {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(res, status, payload) {
  res.status(status).json(payload);
}

function cleanText(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function normalizeCard(card) {
  return {
    position: cleanText(card.position, 40),
    name: cleanText(card.name, 40),
    orientation: cleanText(card.orientation, 10),
    keywords: Array.isArray(card.keywords)
      ? card.keywords.slice(0, 5).map((keyword) => cleanText(keyword, 16)).filter(Boolean)
      : [],
    prompt: cleanText(card.prompt, 260),
    action: cleanText(card.action, 220),
    blind: cleanText(card.blind, 220)
  };
}

function validatePayload(body) {
  const question = cleanText(body.question, MAX_QUESTION_LENGTH);
  const cards = Array.isArray(body.cards) ? body.cards.slice(0, MAX_CARDS).map(normalizeCard) : [];

  if (!cards.length) {
    return { error: "cards is required" };
  }

  return {
    value: {
      topic: cleanText(body.topic, 20) || "塔罗",
      mode: cleanText(body.mode, 20) || "牌阵",
      question,
      cards
    }
  };
}

function buildPrompt(payload) {
  const cardLines = payload.cards
    .map(
      (card, index) =>
        `${index + 1}. ${card.position}：${card.name}（${card.orientation}）\n` +
        `关键词：${card.keywords.join(" / ") || "无"}\n` +
        `当前提示：${card.prompt}\n` +
        `行动建议：${card.action}\n` +
        `需要避开的盲点：${card.blind}`
    )
    .join("\n\n");

  return `问题类型：${payload.topic}
牌阵：${payload.mode}
用户问题：${payload.question || "未填写具体问题"}

牌面信息：
${cardLines}

请把这些牌串联成芝士塔罗风格的中文综合总结。要求：
1. 输出三段，每段必须用固定标题开头：整体能量：、关键提醒：、今日小行动：。
2. 语气温柔、简约、偏自我反思，不要恐吓或绝对化预言。
3. 不要重复逐张牌义，总字数不超过 230 个中文字符。
4. 今日小行动必须是一个今天可以完成的小动作。
5. 不提供医疗、法律、财务等专业结论。`;
}

module.exports = async function handler(req, res) {
  setCorsHeaders(req, res);

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return sendJson(res, 403, { error: "Origin is not allowed" });
  }

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  if (!process.env.DEEPSEEK_API_KEY) {
    return sendJson(res, 500, { error: "DeepSeek API key is not configured" });
  }

  const { value, error } = validatePayload(req.body || {});

  if (error) {
    return sendJson(res, 400, { error });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: process.env.DEEPSEEK_MODEL || DEFAULT_MODEL,
        messages: [
          {
            role: "system",
            content:
              "你是芝士塔罗的解读助手，只做娱乐与自我反思向的塔罗文字总结，避免绝对化预测。"
          },
          {
            role: "user",
            content: buildPrompt(value)
          }
        ],
        temperature: 0.7,
        max_tokens: 320
      })
    });
    clearTimeout(timeoutId);

    const responseText = await response.text();
    let data = {};

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = {};
    }

    if (!response.ok) {
      console.error("DeepSeek request failed", {
        status: response.status,
        body: responseText.slice(0, 800)
      });

      return sendJson(res, 502, {
        error: data?.error?.message || "DeepSeek request failed"
      });
    }

    const summary = data?.choices?.[0]?.message?.content?.trim();

    if (!summary) {
      return sendJson(res, 502, { error: "DeepSeek summary is empty" });
    }

    return sendJson(res, 200, { summary });
  } catch (error) {
    const message =
      error?.name === "AbortError"
        ? "DeepSeek request timed out"
        : "DeepSeek request failed";

    console.error("DeepSeek request exception", {
      name: error?.name,
      message: error?.message
    });

    return sendJson(res, 502, { error: message });
  }
};
