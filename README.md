# 芝士塔罗

一个零依赖的简约塔罗抽牌网站原型。

## 当前功能

- 问题类型：今日、感情、事业、学业
- 单张指引：抽 1 张牌
- 三牌牌阵：根据问题类型展示不同牌位
- 完整 78 张塔罗牌组
  - 22 张大阿卡纳细写牌义
  - 56 张小阿卡纳由花色含义与牌阶含义组合生成
- 经典 Rider-Waite-Smith 牌面图片路径与加载回退
- 移动端使用轻量纯色首屏背景，牌图已压缩以改善加载速度
- 随机正位 / 逆位
- 洗牌状态与分段解读
- DeepSeek AI 综合总结接口（通过 Vercel Serverless 代理）
- 芝士塔罗三段式 AI 总结：整体能量、关键提醒、今日小行动
- 每个浏览器每日最多自动生成 10 次 AI 总结
- 保存最近 5 次解读到浏览器本地
- 复制当前解读为分享文案
- 下载牌阵分享图
- 手机内置浏览器下载受限时，分享图会以预览形式打开，支持长按保存
- 本地静态运行，无需后端

## 运行方式

直接用浏览器打开 `index.html`。

## 牌面图片

牌图目录为 `assets/cards/rws/`。如需下载经典 Rider-Waite-Smith 牌图，运行：

```powershell
powershell -ExecutionPolicy Bypass -File scripts\download-rws-cards.ps1
```

如果牌图还未下载，页面会自动回退显示原来的牌面符号。

## AI 总结部署

前端默认调用：

```text
https://cheese-tarot.vercel.app/api/reading-summary
```

如果网站部署在 Vercel 域名下，会自动使用同源 `/api/reading-summary`，移动端和内置浏览器更稳定。

如果 Vercel 项目名不同，需要在 `app.js` 修改 `AI_SUMMARY_ENDPOINT`。

Vercel 环境变量必须配置：

```text
DEEPSEEK_API_KEY=你的 DeepSeek API Key
```

默认模型为 `deepseek-v4-flash`。如需临时换模型，可在 Vercel 增加：

```text
DEEPSEEK_MODEL=模型名
```

不要把 API Key 写进前端代码或提交到 GitHub。

后续可以加入分享图、登录账号和更细的 AI 深度解读。
