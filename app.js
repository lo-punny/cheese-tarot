const tarotCards = [
  {
    name: "愚者",
    symbol: "0",
    keywords: ["开始", "自由", "信任"],
    upright: "新的旅程正在靠近。你不必掌握所有答案，先允许自己走出第一步。",
    reversed: "冲动与逃避可能混在一起。慢下来，确认你是在选择，而不是被情绪推着走。",
    action: "用一个很小的动作测试可能性，不必一次押上全部。",
    shadow: "别把未知浪漫化，也别用“随缘”掩盖真正的回避。"
  },
  {
    name: "魔术师",
    symbol: "I",
    keywords: ["创造", "资源", "行动"],
    upright: "你已经拥有启动这件事的关键资源。把想法落到一个具体动作里。",
    reversed: "能量被分散了。减少承诺，把注意力收回到最能产生结果的一处。",
    action: "列出手上已经有的资源，并立刻使用其中一个。",
    shadow: "避免只展示能力，却迟迟不进入真实行动。"
  },
  {
    name: "女祭司",
    symbol: "II",
    keywords: ["直觉", "等待", "秘密"],
    upright: "答案暂时不在表面信息里。给直觉一点安静，它会告诉你哪里不对劲。",
    reversed: "你可能忽略了内在提醒。别急着证明谁对，先听听自己真正知道什么。",
    action: "先观察，不急着表态，把反复出现的感受记录下来。",
    shadow: "别把沉默当成安全，也别把猜测当成事实。"
  },
  {
    name: "皇后",
    symbol: "III",
    keywords: ["滋养", "生长", "感受"],
    upright: "这件事需要被温柔地照料。稳定投入，比强行推进更能带来生长。",
    reversed: "你给出了太多，却忘了补充自己。边界也是一种照顾。",
    action: "给重要的事物固定的时间、空间和耐心。",
    shadow: "不要用过度照顾换取确定感。"
  },
  {
    name: "皇帝",
    symbol: "IV",
    keywords: ["秩序", "责任", "结构"],
    upright: "建立规则会带来安全感。把模糊的想法整理成计划、时间和责任。",
    reversed: "控制欲可能让局面变硬。保留原则，同时给变化留一点空间。",
    action: "把目标拆成清晰步骤，并给每一步设置边界。",
    shadow: "别为了掌控局面而压掉真实需求。"
  },
  {
    name: "教皇",
    symbol: "V",
    keywords: ["传统", "学习", "信念"],
    upright: "向成熟经验借力。找一个可靠框架，会比独自摸索更快。",
    reversed: "旧规则未必适合此刻。你可以尊重经验，也可以重新定义自己的答案。",
    action: "寻找可信的方法、导师或参考样本。",
    shadow: "避免因为“应该如此”而忽略当下的真实处境。"
  },
  {
    name: "恋人",
    symbol: "VI",
    keywords: ["选择", "关系", "价值"],
    upright: "真正的选择会暴露你的价值排序。问问自己：我愿意为哪一边负责？",
    reversed: "关系或选择里有不一致。先对齐真实需求，再谈承诺。",
    action: "把最重要的价值写下来，再回头看这个选择。",
    shadow: "别为了被喜欢或被认可而背离自己的答案。"
  },
  {
    name: "战车",
    symbol: "VII",
    keywords: ["推进", "意志", "方向"],
    upright: "方向明确时，阻力也会变成动力。把节奏握回自己手里。",
    reversed: "用力很多但方向摇摆。暂停一下，重新确认目标和边界。",
    action: "选定一个方向，在今天完成一个可见推进。",
    shadow: "避免把急躁误认为决心。"
  },
  {
    name: "力量",
    symbol: "VIII",
    keywords: ["耐心", "勇气", "温柔"],
    upright: "柔和不是退让，而是更稳定的力量。用耐心处理最棘手的部分。",
    reversed: "你可能正在压抑不安。承认脆弱，会比硬撑更接近真正的勇气。",
    action: "用温和但明确的方式表达你的需要。",
    shadow: "不要把忍耐变成长期消耗。"
  },
  {
    name: "隐士",
    symbol: "IX",
    keywords: ["独处", "洞察", "寻找"],
    upright: "外界声音太多时，答案会变轻。给自己一段独处，整理内心的灯。",
    reversed: "封闭太久会让问题失真。找一个可信的人，把想法说出来。",
    action: "留出不被打扰的时间，问自己真正想守住什么。",
    shadow: "别把独处变成逃离连接。"
  },
  {
    name: "命运之轮",
    symbol: "X",
    keywords: ["转机", "循环", "变化"],
    upright: "局势正在流动。抓住窗口期，但别把短暂波动误认为最终结论。",
    reversed: "重复模式正在提醒你。真正的转机来自你这次换一种回应。",
    action: "辨认正在出现的机会，并用新方式回应旧问题。",
    shadow: "别把一切都交给运气，也别忽略反复出现的模式。"
  },
  {
    name: "正义",
    symbol: "XI",
    keywords: ["平衡", "真相", "后果"],
    upright: "事实会比情绪更有力量。做决定前，先把证据与责任放到桌面上。",
    reversed: "你可能在回避一个不舒服的真相。越早面对，代价越小。",
    action: "检查事实、承诺和边界是否对等。",
    shadow: "避免只追求自己想听的结论。"
  },
  {
    name: "倒吊人",
    symbol: "XII",
    keywords: ["暂停", "换位", "牺牲"],
    upright: "暂时停住不是失败。换个角度看，答案会从反方向出现。",
    reversed: "等待已经变成拖延。若看清了，就需要做出一点实际改变。",
    action: "先暂停旧反应，尝试从对方或未来的角度看问题。",
    shadow: "别把无止境等待包装成顺其自然。"
  },
  {
    name: "死神",
    symbol: "XIII",
    keywords: ["结束", "转化", "释放"],
    upright: "某个阶段正在完成。放手不是失去，而是给新状态腾出位置。",
    reversed: "你知道该结束什么，却还在抓紧它。温柔地承认：旧方式已经不适用。",
    action: "明确一个需要结束、清理或告别的部分。",
    shadow: "不要因为熟悉而继续维持已经失效的模式。"
  },
  {
    name: "节制",
    symbol: "XIV",
    keywords: ["调和", "复原", "流动"],
    upright: "答案在中间地带。别急着极端化，慢慢调配出适合你的比例。",
    reversed: "生活的比例失衡了。先恢复睡眠、节奏和基本秩序。",
    action: "调整节奏，给彼此或事情一个更可持续的比例。",
    shadow: "避免用极端方式解决本来需要调和的问题。"
  },
  {
    name: "恶魔",
    symbol: "XV",
    keywords: ["束缚", "欲望", "投射"],
    upright: "看见让你上瘾或受困的模式。命名它，你就已经拿回一部分自由。",
    reversed: "松绑的机会正在出现。不要低估一个小小拒绝的力量。",
    action: "识别最容易让你失去自由的诱因，并提前设置边界。",
    shadow: "别把依赖、比较或执念误认为爱与目标。"
  },
  {
    name: "高塔",
    symbol: "XVI",
    keywords: ["崩塌", "清醒", "重建"],
    upright: "不稳定的结构会显露裂缝。先保证安全，再处理重建。",
    reversed: "你可能已经感到预警。主动调整，比等它崩掉更温和。",
    action: "承认问题已经存在，先拆掉最危险的假设。",
    shadow: "不要为了维持表面稳定而忽视明显的裂缝。"
  },
  {
    name: "星星",
    symbol: "XVII",
    keywords: ["希望", "疗愈", "愿景"],
    upright: "不要急着证明一切都会好。先让自己重新相信还有可能。",
    reversed: "希望感变弱时，别责怪自己。把愿景缩小到今天能完成的一步。",
    action: "做一件能恢复信心的小事，让愿景重新有触感。",
    shadow: "别让失望遮住仍然可行的微小路径。"
  },
  {
    name: "月亮",
    symbol: "XVIII",
    keywords: ["迷雾", "潜意识", "不确定"],
    upright: "信息并不完整。此刻适合观察梦、情绪和反复出现的担心。",
    reversed: "迷雾正在散开。别急着否定曾经的害怕，它也提供过线索。",
    action: "先补足信息，不在情绪最浓的时候做最终决定。",
    shadow: "避免让猜测、焦虑或投射替你判断。"
  },
  {
    name: "太阳",
    symbol: "XIX",
    keywords: ["明朗", "活力", "成功"],
    upright: "事情会变得清楚。把真实的你带到台前，轻松反而更有说服力。",
    reversed: "快乐被打了折扣。检查你是否为了顾全局面，压低了自己的光。",
    action: "选择更直接、更明亮的表达方式。",
    shadow: "别因为害怕被看见，而把自己的优势藏起来。"
  },
  {
    name: "审判",
    symbol: "XX",
    keywords: ["召唤", "复盘", "觉醒"],
    upright: "一个更清晰的自己正在醒来。复盘过去，但不要继续住在过去。",
    reversed: "你可能迟迟不愿回应内心的召唤。拖延不会让答案消失。",
    action: "回顾关键经验，决定这次要用什么新方式回应。",
    shadow: "不要让自我批判替代真正的复盘。"
  },
  {
    name: "世界",
    symbol: "XXI",
    keywords: ["完成", "整合", "抵达"],
    upright: "一个周期接近圆满。庆祝成果，也准备进入更大的地图。",
    reversed: "还差一个收尾。把未完成的小环节补上，你会感到完整。",
    action: "完成一个收尾动作，让这段经验真正整合。",
    shadow: "避免因为不舍或完美主义而迟迟不结束。"
  }
];

const majorImageSlugs = [
  "fool",
  "magician",
  "high-priestess",
  "empress",
  "emperor",
  "hierophant",
  "lovers",
  "chariot",
  "strength",
  "hermit",
  "wheel-of-fortune",
  "justice",
  "hanged-man",
  "death",
  "temperance",
  "devil",
  "tower",
  "star",
  "moon",
  "sun",
  "judgement",
  "world"
];

tarotCards.forEach((card, index) => {
  card.image = `./assets/cards/rws/major-${String(index).padStart(2, "0")}-${majorImageSlugs[index]}.jpg`;
});

const minorSuits = [
  {
    name: "权杖",
    slug: "wands",
    mark: "杖",
    keywords: ["行动", "热情", "创造"],
    field: "行动力、灵感和主动选择",
    strength: "把想法点燃，并让事情真正动起来",
    imbalance: "急躁、消耗或只凭一时冲动推进"
  },
  {
    name: "圣杯",
    slug: "cups",
    mark: "杯",
    keywords: ["情感", "关系", "直觉"],
    field: "情绪、关系和内在感受",
    strength: "听见真实感受，并让连接更柔软",
    imbalance: "情绪淹没判断，或把期待投向他人"
  },
  {
    name: "宝剑",
    slug: "swords",
    mark: "剑",
    keywords: ["思考", "沟通", "判断"],
    field: "想法、沟通和理性判断",
    strength: "看清事实，并用清楚的语言处理问题",
    imbalance: "过度分析、防御或被尖锐念头困住"
  },
  {
    name: "星币",
    slug: "pentacles",
    mark: "币",
    keywords: ["现实", "资源", "稳定"],
    field: "现实资源、身体节奏和长期积累",
    strength: "把愿望落地成可持续的安排",
    imbalance: "过度保守、拖延，或只用结果衡量价值"
  }
];

const minorRanks = [
  {
    name: "首牌",
    imageSlug: "ace",
    symbol: "A",
    keywords: ["种子", "机会", "开启"],
    upright: "一个新的机会正在出现，但它还需要被认真接住。",
    reversed: "机会感还不稳定，可能需要先确认动机和条件。",
    action: "抓住最小的开端，先给它一个具体容器。",
    shadow: "别因为刚开始就期待立刻成熟。"
  },
  {
    name: "二",
    imageSlug: "02",
    symbol: "2",
    keywords: ["选择", "平衡", "比较"],
    upright: "你站在两个方向之间，需要看清真正的优先级。",
    reversed: "犹豫可能消耗了太多能量，拖延本身也在制造答案。",
    action: "列出两个选项的代价，并选择更能长期承受的一边。",
    shadow: "别为了保持所有可能性而拒绝做决定。"
  },
  {
    name: "三",
    imageSlug: "03",
    symbol: "3",
    keywords: ["扩展", "协作", "初成"],
    upright: "事情开始有雏形，适合扩展视野或引入协作。",
    reversed: "合作或计划还缺少对齐，先把期待说清楚。",
    action: "找一个能补足你盲区的人或方法。",
    shadow: "避免只看远方，却忽略眼前的执行细节。"
  },
  {
    name: "四",
    imageSlug: "04",
    symbol: "4",
    keywords: ["稳定", "基础", "停留"],
    upright: "稳定结构正在形成，先守住基本盘。",
    reversed: "稳定可能变成僵化，安全感也可能限制流动。",
    action: "检查哪些规则真的保护你，哪些只是让你不敢变化。",
    shadow: "别把舒服的原地踏步误认为安稳。"
  },
  {
    name: "五",
    imageSlug: "05",
    symbol: "5",
    keywords: ["冲突", "压力", "调整"],
    upright: "摩擦正在暴露问题，它未必舒服，却能指出需要调整的地方。",
    reversed: "你可能想避开冲突，但问题仍在等待被处理。",
    action: "先处理最核心的矛盾，不要同时修补所有裂缝。",
    shadow: "别把暂时的退让当成真正解决。"
  },
  {
    name: "六",
    imageSlug: "06",
    symbol: "6",
    keywords: ["修复", "互惠", "过渡"],
    upright: "局势有机会回到更平衡的位置，支持与回馈都很重要。",
    reversed: "付出与获得可能不对等，需要重新校准关系或资源。",
    action: "主动确认彼此的需求和边界。",
    shadow: "不要用亏欠感维持不健康的交换。"
  },
  {
    name: "七",
    imageSlug: "07",
    symbol: "7",
    keywords: ["评估", "坚持", "考验"],
    upright: "你已经投入不少，现在适合评估方向和耐心。",
    reversed: "坚持可能正在变成硬撑，先看投入是否仍有意义。",
    action: "复盘成果和成本，决定继续、调整还是止损。",
    shadow: "别因为已经付出很多，就拒绝重新判断。"
  },
  {
    name: "八",
    imageSlug: "08",
    symbol: "8",
    keywords: ["推进", "练习", "节奏"],
    upright: "持续练习和清晰节奏会带来可见进展。",
    reversed: "重复动作可能失去方向，需要修正方法。",
    action: "把目标拆成可以重复执行的小步骤。",
    shadow: "避免忙碌感替代真正的进步。"
  },
  {
    name: "九",
    imageSlug: "09",
    symbol: "9",
    keywords: ["成果", "独立", "临界"],
    upright: "你已经接近一个成果点，先承认自己走了很远。",
    reversed: "疲惫或自我怀疑可能让你看不见已经拥有的东西。",
    action: "整理目前的成果，补上最后一段支持。",
    shadow: "别因为还不完美，就否认已有进展。"
  },
  {
    name: "十",
    imageSlug: "10",
    symbol: "10",
    keywords: ["完成", "负荷", "转折"],
    upright: "一个周期接近完成，也可能伴随明显的责任重量。",
    reversed: "负担需要被重新分配，否则完成会变成耗尽。",
    action: "收尾、交付，或把过重的责任拆出去。",
    shadow: "不要把全部压力都扛成自己的证明题。"
  },
  {
    name: "侍从",
    imageSlug: "page",
    symbol: "侍",
    keywords: ["学习", "消息", "好奇"],
    upright: "新信息和学习机会正在靠近，适合保持开放。",
    reversed: "经验不足不是问题，装作全懂才会制造偏差。",
    action: "先问问题、做笔记、收集样本。",
    shadow: "别因为怕显得生涩而停止学习。"
  },
  {
    name: "骑士",
    imageSlug: "knight",
    symbol: "骑",
    keywords: ["追求", "移动", "冲劲"],
    upright: "能量正在推动你向前，适合主动争取。",
    reversed: "速度可能超过判断，先确认方向再加速。",
    action: "把冲劲放进清晰路线，而不是只凭感觉前进。",
    shadow: "避免把急切误认为勇敢。"
  },
  {
    name: "王后",
    imageSlug: "queen",
    symbol: "后",
    keywords: ["成熟", "照料", "接纳"],
    upright: "成熟的力量来自稳定感受和细致照料。",
    reversed: "你可能照顾了太多外界，却忽略自己的需要。",
    action: "用更柔和但坚定的方式照看重要事物。",
    shadow: "别用过度承担换取被需要的感觉。"
  },
  {
    name: "国王",
    imageSlug: "king",
    symbol: "王",
    keywords: ["掌控", "责任", "整合"],
    upright: "你有机会以更成熟的方式管理局面。",
    reversed: "掌控欲或逃避责任都可能让局面失衡。",
    action: "承担该承担的部分，同时建立清楚规则。",
    shadow: "不要把权威变成压迫，也不要把自由变成失责。"
  }
];

const minorArcanaCards = minorSuits.flatMap((suit) =>
  minorRanks.map((rank) => ({
    name: `${suit.name}${rank.name}`,
    symbol: `${suit.mark}${rank.symbol}`,
    image: `./assets/cards/rws/${suit.slug}-${rank.imageSlug}.jpg`,
    keywords: [...rank.keywords.slice(0, 2), suit.keywords[0]],
    upright: `${rank.upright} 在${suit.field}上，它提醒你${suit.strength}。`,
    reversed: `${rank.reversed} 在${suit.field}上，尤其要留意${suit.imbalance}。`,
    action: `${rank.action} 同时把重点放回${suit.field}。`,
    shadow: `${rank.shadow} 也要避免${suit.imbalance}。`
  }))
);

const fullTarotDeck = [...tarotCards, ...minorArcanaCards];

const readingTopics = {
  daily: {
    label: "今日",
    placeholder: "例如：我今天最需要看见什么？",
    ritual: "抽牌前，先把注意力放回今天。",
    empty: "今天的牌会提醒你如何安放自己的能量。",
    singleTitle: "今日能量",
    singlePositions: ["今日指引"],
    threePositions: ["上午", "下午", "晚间"],
    lens: "今天的重点不是预测所有细节，而是看见你最该调整的状态。",
    actionLead: "今天可以",
    blindLead: "今天需要避开"
  },
  love: {
    label: "感情",
    placeholder: "例如：这段关系现在真正需要什么？",
    ritual: "抽牌前，想清楚你是在问自己、对方，还是这段关系。",
    empty: "感情牌会更关注需求、边界与未说出口的信号。",
    singleTitle: "关系提醒",
    singlePositions: ["关系指引"],
    threePositions: ["你的状态", "关系状态", "下一步建议"],
    lens: "在感情里，这张牌会把注意力带向真实需求与互动模式。",
    actionLead: "关系中可以",
    blindLead: "关系中需要避开"
  },
  career: {
    label: "事业",
    placeholder: "例如：我现在的工作卡点在哪里？",
    ritual: "抽牌前，聚焦一个具体工作场景或决定。",
    empty: "事业牌会更关注目标、阻碍、资源和下一步行动。",
    singleTitle: "事业提示",
    singlePositions: ["工作指引"],
    threePositions: ["现状", "阻碍", "下一步"],
    lens: "在事业里，这张牌会提醒你资源、节奏和决策方式。",
    actionLead: "工作上可以",
    blindLead: "工作上需要避开"
  },
  study: {
    label: "学业",
    placeholder: "例如：我该怎样提升现在的学习状态？",
    ritual: "抽牌前，选定一门课、一个目标或一个学习瓶颈。",
    empty: "学业牌会更关注基础、卡点、方法和持续力。",
    singleTitle: "学习指引",
    singlePositions: ["学习提示"],
    threePositions: ["基础", "卡点", "提升方向"],
    lens: "在学业里，这张牌会帮助你看清学习节奏和方法选择。",
    actionLead: "学习上可以",
    blindLead: "学习上需要避开"
  }
};

let currentMode = "single";
let currentTopic = "daily";
let shuffleTimer = null;
let currentReading = null;

const STORAGE_KEY = "cheeseTarotReadings";
const AI_USAGE_KEY = "cheeseTarotAiUsage";
const MAX_HISTORY_ITEMS = 5;
const DAILY_AI_LIMIT = 10;
const AI_SUMMARY_ENDPOINT =
  window.CHEESE_TAROT_API_URL ||
  (window.location.hostname.endsWith("vercel.app")
    ? "/api/reading-summary"
    : "https://cheese-tarot.vercel.app/api/reading-summary");
const VERCEL_SITE_URL = "https://cheese-tarot.vercel.app";

const spread = document.querySelector("#spread");
const resultTitle = document.querySelector("#resultTitle");
const resultSubtitle = document.querySelector("#resultSubtitle");
const drawButton = document.querySelector("#drawButton");
const resetButton = document.querySelector("#resetButton");
const questionInput = document.querySelector("#question");
const ritualTip = document.querySelector("#ritualTip");
const deckCount = document.querySelector("#deckCount");
const readingActions = document.querySelector("#readingActions");
const saveReadingButton = document.querySelector("#saveReadingButton");
const copyReadingButton = document.querySelector("#copyReadingButton");
const downloadShareButton = document.querySelector("#downloadShareButton");
const actionStatus = document.querySelector("#actionStatus");
const aiSummary = document.querySelector("#aiSummary");
const aiSummaryText = document.querySelector("#aiSummaryText");
const historyList = document.querySelector("#historyList");
const clearHistoryButton = document.querySelector("#clearHistoryButton");
const sharePreview = document.querySelector("#sharePreview");
const sharePreviewImage = document.querySelector("#sharePreviewImage");
const closeSharePreviewButton = document.querySelector("#closeSharePreviewButton");
const modeTabs = document.querySelectorAll(".mode-tab");
const topicButtons = document.querySelectorAll(".topic-button");

function getCurrentTopic() {
  return readingTopics[currentTopic];
}

function getCurrentPositions() {
  const topic = getCurrentTopic();
  return currentMode === "single" ? topic.singlePositions : topic.threePositions;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
}

function getSavedReadings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function setSavedReadings(readings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getAiUsage() {
  try {
    const usage = JSON.parse(localStorage.getItem(AI_USAGE_KEY) || "{}");
    return usage.date === getTodayKey() ? usage : { date: getTodayKey(), count: 0 };
  } catch {
    return { date: getTodayKey(), count: 0 };
  }
}

function setAiUsage(usage) {
  localStorage.setItem(AI_USAGE_KEY, JSON.stringify(usage));
}

function canUseAiSummary() {
  return getAiUsage().count < DAILY_AI_LIMIT;
}

function recordAiSummaryUse() {
  const usage = getAiUsage();
  usage.count += 1;
  setAiUsage(usage);
  return usage;
}

function syncSavedReading(reading) {
  const readings = getSavedReadings();
  const index = readings.findIndex((item) => item.id === reading.id);

  if (index === -1) {
    return;
  }

  readings[index] = reading;
  setSavedReadings(readings);
  renderHistory();
}

function formatSavedDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function showReadingActions(message = "") {
  readingActions.hidden = false;
  actionStatus.textContent = message;
}

function hideReadingActions() {
  readingActions.hidden = true;
  actionStatus.textContent = "";
}

function showAiSummary(message, state = "loading") {
  aiSummary.hidden = false;
  aiSummary.dataset.state = state;
  aiSummaryText.innerHTML = formatSummaryHtml(message);
}

function hideAiSummary() {
  aiSummary.hidden = true;
  aiSummary.dataset.state = "";
  aiSummaryText.textContent = "";
}

function renderHistory() {
  const readings = getSavedReadings();
  clearHistoryButton.hidden = readings.length === 0;

  if (readings.length === 0) {
    historyList.innerHTML = `
      <div class="history-empty">保存后的解读会出现在这里，方便你回看最近的牌面。</div>
    `;
    return;
  }

  historyList.innerHTML = readings
    .map((reading) => {
      const cards = reading.cards
        .map(
          (card) => `
            <span>${escapeHtml(card.position)}：${escapeHtml(card.name)} ${escapeHtml(card.orientation)}</span>
          `
        )
        .join("");

      const summary = reading.summary
        ? `<p class="history-summary">${escapeHtml(reading.summary)}</p>`
        : "";

      return `
        <article class="history-item">
          <div class="history-item__top">
            <h3>${escapeHtml(reading.topic)} · ${escapeHtml(reading.mode)}</h3>
            <time datetime="${escapeHtml(reading.createdAt)}">${formatSavedDate(reading.createdAt)}</time>
          </div>
          <p>${escapeHtml(reading.question || "未填写具体问题")}</p>
          <div class="history-cards">${cards}</div>
          ${summary}
        </article>
      `;
    })
    .join("");
}

function formatSummaryHtml(summary) {
  const text = String(summary || "").trim();
  const parts = text.match(/(?:整体能量|关键提醒|今日小行动)：[\s\S]*?(?=(?:整体能量|关键提醒|今日小行动)：|$)/g);

  if (!parts) {
    return escapeHtml(text);
  }

  return parts
    .map((part) => {
      const [title, ...body] = part.split("：");
      return `<span><strong>${escapeHtml(title)}：</strong>${escapeHtml(body.join("：").trim())}</span>`;
    })
    .join("");
}

function buildShareText(reading) {
  const question = reading.question || "未填写具体问题";
  const cards = reading.cards
    .map(
      (card, index) =>
        `${index + 1}. ${card.position}｜${card.name}（${card.orientation}）\n` +
        `关键词：${card.keywords.join(" / ")}\n` +
        `提示：${card.prompt}\n` +
        `建议：${card.action}\n` +
        `盲点：${card.blind}`
    )
    .join("\n\n");

  const summary = reading.summary ? `\n\n综合总结：${reading.summary}` : "";

  return `芝士塔罗｜${reading.topic} · ${reading.mode}\n问题：${question}\n\n${cards}${summary}\n\n仅供娱乐与自我反思。`;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const chars = String(text || "").split("");
  const lines = [];
  let line = "";

  chars.forEach((char) => {
    const nextLine = line + char;

    if (ctx.measureText(nextLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = nextLine;
    }
  });

  if (line) {
    lines.push(line);
  }

  const visibleLines = lines.slice(0, maxLines);
  visibleLines.forEach((item, index) => {
    const suffix = index === maxLines - 1 && lines.length > maxLines ? "..." : "";
    ctx.fillText(item + suffix, x, y + index * lineHeight);
  });

  return visibleLines.length * lineHeight;
}

function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  document.body.append(link);
  link.click();
  link.remove();
}

function isMobileLikeBrowser() {
  return (
    window.matchMedia("(max-width: 700px)").matches ||
    /MicroMessenger|QQBrowser|MQQBrowser|Bytedance|Aweme|NewsArticle|XiaoHongShu|Mobile/i.test(navigator.userAgent)
  );
}

function showSharePreview(canvas) {
  sharePreviewImage.src = canvas.toDataURL("image/png");
  sharePreview.hidden = false;
}

function hideSharePreview() {
  sharePreview.hidden = true;
  sharePreviewImage.removeAttribute("src");
}

async function generateShareImage(reading) {
  const scale = 2;
  const width = 1080;
  const height = reading.cards.length === 1 ? 1420 : 1550;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;

  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#f8f3ea";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#bd8a35";
  ctx.font = "700 24px Microsoft YaHei, sans-serif";
  ctx.fillText("芝士塔罗", 64, 72);

  ctx.fillStyle = "#191614";
  ctx.font = "700 54px Microsoft YaHei, sans-serif";
  ctx.fillText(`${reading.topic} · ${reading.mode}`, 64, 136);

  ctx.fillStyle = "#6c6259";
  ctx.font = "28px Microsoft YaHei, sans-serif";
  wrapCanvasText(ctx, `问题：${reading.question || "未填写具体问题"}`, 64, 188, 952, 40, 2);

  const cardCount = reading.cards.length;
  const gap = 28;
  const cardWidth = cardCount === 1 ? 360 : 280;
  const cardHeight = Math.round(cardWidth * 866 / 500);
  const totalWidth = cardCount * cardWidth + (cardCount - 1) * gap;
  const startX = (width - totalWidth) / 2;
  const cardY = 270;

  for (let index = 0; index < reading.cards.length; index++) {
    const card = reading.cards[index];
    const x = startX + index * (cardWidth + gap);

    ctx.fillStyle = "#fffaf1";
    ctx.strokeStyle = "rgba(25, 22, 20, 0.16)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x - 12, cardY - 12, cardWidth + 24, cardHeight + 128, 8);
    ctx.fill();
    ctx.stroke();

    try {
      const image = await loadImage(card.image);
      ctx.save();
      if (card.orientation === "逆位") {
        ctx.translate(x + cardWidth / 2, cardY + cardHeight / 2);
        ctx.rotate(Math.PI);
        ctx.drawImage(image, -cardWidth / 2, -cardHeight / 2, cardWidth, cardHeight);
      } else {
        ctx.drawImage(image, x, cardY, cardWidth, cardHeight);
      }
      ctx.restore();
    } catch {
      ctx.fillStyle = "#8f2638";
      ctx.fillRect(x, cardY, cardWidth, cardHeight);
      ctx.fillStyle = "#fffaf1";
      ctx.font = "700 44px Microsoft YaHei, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(card.symbol, x + cardWidth / 2, cardY + cardHeight / 2);
      ctx.textAlign = "left";
    }

    ctx.fillStyle = "#556b4b";
    ctx.font = "700 22px Microsoft YaHei, sans-serif";
    ctx.fillText(card.position, x, cardY + cardHeight + 40);

    ctx.fillStyle = "#191614";
    ctx.font = "700 30px Microsoft YaHei, sans-serif";
    wrapCanvasText(ctx, `${card.name} ${card.orientation}`, x, cardY + cardHeight + 78, cardWidth, 36, 2);
  }

  const summaryY = cardY + cardHeight + 170;
  ctx.fillStyle = "#fffaf1";
  ctx.strokeStyle = "rgba(25, 22, 20, 0.14)";
  ctx.beginPath();
  ctx.roundRect(64, summaryY, 952, 300, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#8f2638";
  ctx.font = "700 30px Microsoft YaHei, sans-serif";
  ctx.fillText("综合总结", 96, summaryY + 58);

  ctx.fillStyle = "#332d28";
  ctx.font = "28px Microsoft YaHei, sans-serif";
  wrapCanvasText(ctx, reading.summary || "基础解读已生成，AI 综合总结暂时不可用。", 96, summaryY + 106, 888, 42, 5);

  ctx.fillStyle = "#6c6259";
  ctx.font = "22px Microsoft YaHei, sans-serif";
  ctx.fillText("仅供娱乐与自我反思", 64, height - 62);

  return canvas;
}

function sampleCards(count) {
  const pool = [...fullTarotDeck];
  const picked = [];

  while (picked.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    const [card] = pool.splice(index, 1);
    picked.push({
      ...card,
      isReversed: Math.random() > 0.64
    });
  }

  return picked;
}

function buildInsight(card, topic, position) {
  const base = card.isReversed ? card.reversed : card.upright;
  const positionText = currentMode === "single" ? "" : `这张牌落在「${position}」，`;

  return {
    prompt: `${positionText}${topic.lens} ${base}`,
    action: `${topic.actionLead}${card.action}`,
    blind: `${topic.blindLead}${card.shadow}`
  };
}

function buildAiPayload(reading) {
  return {
    topic: reading.topic,
    mode: reading.mode,
    question: reading.question,
    cards: reading.cards.slice(0, 3).map((card) => ({
      position: card.position,
      name: card.name,
      orientation: card.orientation,
      keywords: card.keywords,
      prompt: card.prompt,
      action: card.action,
      blind: card.blind
    }))
  };
}

function isNetworkFetchError(error) {
  return /failed to fetch|load failed|networkerror|network error/i.test(error?.message || "");
}

function buildAiErrorMessage(error) {
  if (isNetworkFetchError(error) && !window.location.hostname.endsWith("vercel.app")) {
    return `AI 总结暂时不可用：当前浏览器可能拦截了跨站 API 请求。请用 ${VERCEL_SITE_URL} 打开后再试`;
  }

  return error?.message ? `AI 总结暂时不可用：${error.message}` : "AI 总结暂时不可用";
}

async function requestAiSummary(reading) {
  if (!canUseAiSummary()) {
    reading.summary = "";
    showAiSummary(`今日 AI 总结次数已用完，明天会自动恢复。基础解读仍可正常使用。`, "error");
    return;
  }

  showAiSummary("AI 正在串联牌阵...");

  try {
    const response = await fetch(AI_SUMMARY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildAiPayload(reading))
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Summary request failed: ${response.status}`);
    }

    const data = await response.json();
    const summary = typeof data.summary === "string" ? data.summary.trim() : "";

    if (!summary) {
      throw new Error("Summary response is empty");
    }

    reading.summary = summary;
    const usage = recordAiSummaryUse();
    showAiSummary(summary, "ready");
    syncSavedReading(reading);
    actionStatus.textContent = `AI 总结已生成，今日还可使用 ${DAILY_AI_LIMIT - usage.count} 次。`;
  } catch (error) {
    reading.summary = "";
    const message = buildAiErrorMessage(error);
    showAiSummary(`${message}。已保留基础解读。`, "error");
  }
}

function setDrawButtonLoading(isLoading) {
  drawButton.disabled = isLoading;
  drawButton.textContent = isLoading ? "洗牌中..." : "抽牌";
  drawButton.classList.toggle("is-loading", isLoading);
}

function renderEmptyState() {
  const topic = getCurrentTopic();
  currentReading = null;
  hideReadingActions();
  hideAiSummary();
  spread.className = "spread";
  spread.innerHTML = `
    <div class="empty-state">
      <span>${topic.empty}</span>
    </div>
  `;
}

function renderShuffleState() {
  currentReading = null;
  hideReadingActions();
  hideAiSummary();
  spread.className = currentMode === "single" ? "spread is-single" : "spread";
  spread.innerHTML = getCurrentPositions()
    .map(
      (position) => `
        <article class="card-result is-shuffling">
          <div class="tarot-card" aria-hidden="true">
            <span class="tarot-symbol">✦</span>
          </div>
          <div class="card-body">
            <p class="position">${position}</p>
            <div class="shuffle-lines" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function updatePromptForTopic() {
  const topic = getCurrentTopic();
  questionInput.placeholder = topic.placeholder;
  ritualTip.textContent = topic.ritual;
}

function updateResultIntro() {
  const topic = getCurrentTopic();
  resultTitle.textContent =
    currentMode === "single" ? topic.singleTitle : `${topic.label}三牌牌阵`;
  resultSubtitle.textContent = topic.empty;
}

function renderReading() {
  const topic = getCurrentTopic();
  const layout = getCurrentPositions();
  const cards = sampleCards(layout.length);
  const question = questionInput.value.trim();
  const readingCards = cards.map((card, index) => {
    const position = layout[index];
    const insight = buildInsight(card, topic, position);
    const orientation = card.isReversed ? "逆位" : "正位";

    return {
      position,
      name: card.name,
      symbol: card.symbol,
      image: card.image,
      keywords: card.keywords,
      orientation,
      prompt: insight.prompt,
      action: insight.action,
      blind: insight.blind
    };
  });

  currentReading = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    topic: topic.label,
    mode: currentMode === "single" ? "单张指引" : "三牌牌阵",
    question,
    cards: readingCards
  };

  spread.className = currentMode === "single" ? "spread is-single" : "spread";
  resultTitle.textContent = question
    ? `${topic.label} · 关于「${question}」`
    : currentMode === "single"
      ? topic.singleTitle
      : `${topic.label}三牌牌阵`;
  resultSubtitle.textContent =
    currentMode === "single"
      ? "单张牌会聚焦此刻最需要看见的核心提醒。"
      : "三张牌会把问题拆成更清晰的阶段与行动线索。";

  spread.innerHTML = currentReading.cards
    .map((card) => {
      return `
        <article class="card-result">
          <div class="tarot-card" aria-hidden="true">
            <img
              class="tarot-image${card.orientation === "逆位" ? " is-reversed" : ""}"
              src="${card.image}"
              alt=""
              loading="eager"
              decoding="async"
              fetchpriority="high"
              onerror="this.hidden = true; this.nextElementSibling.hidden = false;"
            />
            <span class="tarot-symbol" hidden>${card.symbol}</span>
          </div>
          <div class="card-body">
            <p class="position">${card.position}</p>
            <div class="card-title">
              <h3>${card.name}</h3>
              <span class="orientation">${card.orientation}</span>
            </div>
            <p class="keywords">${card.keywords.join(" / ")}</p>
            <div class="reading-sections">
              <section>
                <h4>当前提示</h4>
                <p>${card.prompt}</p>
              </section>
              <section>
                <h4>行动建议</h4>
                <p>${card.action}</p>
              </section>
              <section>
                <h4>需要避开的盲点</h4>
                <p>${card.blind}</p>
              </section>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  showReadingActions();
  requestAiSummary(currentReading);
}

function startReading() {
  window.clearTimeout(shuffleTimer);
  setDrawButtonLoading(true);
  resultTitle.textContent = "正在洗牌";
  resultSubtitle.textContent = "保持问题清晰，等牌面落下。";
  renderShuffleState();

  shuffleTimer = window.setTimeout(() => {
    renderReading();
    setDrawButtonLoading(false);
  }, 620);
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentTopic = button.dataset.topic;

    topicButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    updatePromptForTopic();
    updateResultIntro();
    renderEmptyState();
  });
});

modeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentMode = tab.dataset.mode;

    modeTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    updateResultIntro();
    renderEmptyState();
  });
});

drawButton.addEventListener("click", startReading);

saveReadingButton.addEventListener("click", () => {
  if (!currentReading) {
    showReadingActions("先抽一次牌，再保存解读。");
    return;
  }

  const readings = getSavedReadings();
  const nextReadings = [
    currentReading,
    ...readings.filter((reading) => reading.id !== currentReading.id)
  ].slice(0, MAX_HISTORY_ITEMS);

  setSavedReadings(nextReadings);
  renderHistory();
  showReadingActions("已保存到最近解读。");
});

copyReadingButton.addEventListener("click", async () => {
  if (!currentReading) {
    showReadingActions("先抽一次牌，再复制文案。");
    return;
  }

  try {
    await copyText(buildShareText(currentReading));
    showReadingActions("已复制分享文案。");
  } catch {
    showReadingActions("复制失败，可以再试一次。");
  }
});

downloadShareButton.addEventListener("click", async () => {
  if (!currentReading) {
    showReadingActions("先抽一次牌，再下载分享图。");
    return;
  }

  downloadShareButton.disabled = true;
  actionStatus.textContent = "正在生成分享图...";

  try {
    const canvas = await generateShareImage(currentReading);
    if (isMobileLikeBrowser()) {
      showSharePreview(canvas);
      showReadingActions("分享图已生成，可长按图片保存。");
    } else {
      downloadCanvas(canvas, `cheese-tarot-${Date.now()}.png`);
      showReadingActions("分享图已生成。");
    }
  } catch (error) {
    console.error("Share image generation failed", error);
    showReadingActions("分享图生成失败，可以稍后再试。");
  } finally {
    downloadShareButton.disabled = false;
  }
});

closeSharePreviewButton.addEventListener("click", hideSharePreview);

sharePreview.addEventListener("click", (event) => {
  if (event.target === sharePreview) {
    hideSharePreview();
  }
});

clearHistoryButton.addEventListener("click", () => {
  setSavedReadings([]);
  renderHistory();
  if (currentReading) {
    showReadingActions("最近解读已清空。");
  }
});

resetButton.addEventListener("click", () => {
  window.clearTimeout(shuffleTimer);
  setDrawButtonLoading(false);
  questionInput.value = "";
  updateResultIntro();
  renderEmptyState();
});

updatePromptForTopic();
updateResultIntro();
deckCount.textContent = `完整 ${fullTarotDeck.length} 张塔罗牌组`;
renderEmptyState();
renderHistory();
