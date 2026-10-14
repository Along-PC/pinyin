# 🎈 拼音乐园 (PinYin Kids)

> 🚀 **官方在线访问地址**：[https://pinyin-e3x.pages.dev/](https://pinyin-e3x.pages.dev/)

专为孩子设计的汉语拼音启蒙学习网站。基于 **Vue 3 + Tailwind CSS** 开发，纯静态打包，零服务端依赖，支持一键免费托管发布至 **Cloudflare Pages**。

---

## ✨ 核心特性

- 👶 **大字清晰排版**：支持“大 / 很大 / 特大”字号一键切换，大卡片视觉友好，保护孩子视力。
- 📚 **规范分类体系**：教育部统编小学标准拼音分类：
  - **声母** (23个)：`b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s, y, w`
  - **单韵母** (6个)：`a, o, e, i, u, ü`
  - **复韵母** (9个，含特殊韵母 er)：`ai, ei, ui, ao, ou, iu, ie, üe, er`
  - **前鼻韵母** (5个)：`an, en, in, un, ün`
  - **后鼻韵母** (4个)：`ang, eng, ing, ong`
  - **整体认读音节** (16个)：`zhi, chi, shi, ri, zi, ci, si, yi, wu, yu, ye, yue, yuan, yin, yun, ying`
- 📏 **标准四线三格**：还原小学一年级语文拼音作业本的四线三格规范辅助线，随时可一键开关。
- 🔊 **标准语音发音**：
  - 卡片、详情及听音测验统一播放本地普通话单音节真人录音，声母使用教学呼读音。
  - 支持保留音高的慢速跟读，避免变速改变声调。
- 🎵 **四声调练习**：韵母和整体认读音节配有一声平、二声扬、三声拐弯、四声降四声调单独发音与生活例字（如 `ā 阿姨`、`á 啊` 等）。
- 💡 **生动记忆口诀与生活组词**：如“右下半圆 b b b，听广播”、“张大嘴巴 a a a”等，配有丰富的生活词汇和可爱 emoji 图解。
- 🎮 **“听音辨字母”趣味小测验**：孩子听声音找字母，答对奖励小星星 ⭐，激发学习主动性。
- 🎧 **磨耳朵连读播放**：支持自动轮播朗读，洗脑式磨耳朵。

---

## 🛠️ 本地开发与预览

### 1. 安装依赖
```bash
pnpm install
# 或者使用 npm
npm install
```

### 2. 本地启动开发服务器
```bash
pnpm dev
# 或者
npm run dev
```
打开浏览器访问控制台提示的地址（如 `http://localhost:5173`）即可预览。

### 3. 构建打包
```bash
pnpm build
# 或者
npm run build
```
打包输出目录为 `dist/`，为纯静态文件，包含已配置好的 `_redirects` 和 `_headers`。

---

## 🚀 部署发布至免费 Cloudflare Pages

本项目是纯静态网站，打包出来的 `dist` 目录可直接部署在 **Cloudflare Pages**，全球 CDN 加速，永久免费且无需购买服务器。

### 方法一：网页端直接上传（最简单，无需配置 Git，5秒完成）

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)。
2. 在左侧菜单点击 **Workers 和 Pages** -> **创建应用程序**。
3. 切换到 **Pages** 标签，点击 **直接上传 (Direct Upload)**。
4. 项目名称填写如 `pinyin-kids`。
5. 本地执行 `pnpm build` 后，将生成的 `dist` 文件夹直接拖拽到网页上传区域。
6. 点击 **部署网站**，立刻获得一个免费的 `*.pages.dev` 访问链接！

### 方法二：关联 GitHub 仓库自动部署（推荐，更新代码自动上线）

1. 将当前项目推送至您的 GitHub 仓库。
2. 打开 [Cloudflare 控制台](https://dash.cloudflare.com/) -> **Workers 和 Pages** -> **创建** -> **Pages** -> **连接到 Git**。
3. 选择您刚才创建的 `pinyin` 仓库。
4. 在构建设置中配置：
   - **框架预设 (Framework preset)**: `Vite`
   - **构建命令 (Build command)**: `pnpm run build` 或 `npm run build`
   - **构建输出目录 (Build output directory)**: `dist`
5. 点击 **保存并部署**。以后每次向仓库推送代码，Cloudflare Pages 会自动打包部署上线。

### 方法三：使用 Wrangler CLI 命令行部署

```bash
# 全局或直接使用 npx 部署
npx wrangler pages deploy dist --project-name=pinyin-kids
```

---

## 📱 移动端与平板优化说明

- 完全响应式设计，完美适配 iPad、安卓平板以及大屏手机。
- 针对儿童误触优化：支持大按钮触控、禁止双击放大缩放干扰、点击防抖。

## 发音资源与验证

拼音及带调拼音使用 `public/audio/pinyin` 中的本地录音，按音节和声调编号匹配，不再通过中文例词推断声调。中文组词和口诀继续使用浏览器的普通话语音引擎，具体音色依赖设备。

录音来自 [audio-cmn](https://github.com/hugolpz/audio-cmn)，发音者为 Chen Wang，上游标注许可为 CC BY-SA，未注明版本。原始音频保持不变，完整署名和许可见 `public/audio/pinyin/来源与许可.txt`，固定版本、下载地址及校验值见同目录 `manifest.json`。

声母录音是带辅助元音的呼读示范，拼读时需读得轻短。`ui、iu、un` 按独立示范音节 `wei、you、wen` 匹配；`ong` 借助明确标注的 `dong` 示范。韵母的声调练习没有合适例词时只标注“声调练习”，整体认读音节仅列常用声调。

运行 `npm test` 检查声调匹配、全部教学录音覆盖、慢速保调及播放互斥；运行 `npm run build` 验证构建。需要重新下载同版本原始录音时运行 `python3 scripts/fetch-pinyin-audio.py`。
