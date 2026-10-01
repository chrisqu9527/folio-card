# C叔风格库 · 浅色图库改版

设计依据：用户提供的 [小小东开源页](https://vip.xiaoxiaodong.ai/open-source) 截图。以该截图的浅色图库、窄侧栏、顶部分类、搜索排序工具栏、自然高度图片卡片和底部操作栏为参考，使用项目既有的内容与功能。按用户最新要求，统一为 C叔猫头鹰品牌。

## 改动

- 纸色背景、白纸卡片、细边框、墨绿操作按钮和暖金标记；图库卡片保留图片原比例。
- 桌面按窗口宽度显示 3–5 列，手机显示 2 列，分类横向滚动。
- 图像／视频切换、分类／视频用途筛选、编号／作者搜索、排序、收藏筛选与随机查看。
- 详情弹窗保留原始提示词、样图切换、原图浏览和作者原帖链接；手机弹窗独立滚动，关闭按钮始终可见。
- 页面、手机导航、底栏、favicon 和分享卡片统一使用 C叔现有歪头猫头鹰；品牌标题为「C叔风格库」。
- 修复本机 Windows 下的 Vite 启动包装器。
- 150 条现有记录（85 条图像、65 条视频）的编号、原文和来源保持不变。收藏继续保存在当前浏览器。

## 验证

- `npm run typecheck`：通过。
- `npm run build`：通过；未配置数据库，迁移脚本按项目既有约定跳过。
- `node --test scripts/with-app-env.test.mjs`：12 项通过。
- `node scripts/brand-check.mjs --root .`：通过，无警告。
- 修改过的 TypeScript／JavaScript 文件 ESLint 检查通过；`npm run check:auth` 通过。
- `node scripts/folio-ui-smoke.mjs`：实际页面交互通过，核对原始提示词、原帖地址和剪贴板内容；验证收藏刷新、空结果、排序、视频用途、原图键盘控制与编号深链接。
- 桌面 1600×1000、平板 900×900、手机 390×844：无横向溢出；手机关闭按钮在滚动后仍可点击。
- 开发页与生产预览的桌面／手机 smoke 检查均通过，无控制台或页面错误；生产与开发正文一致。

本机 `agent-browser` 在两次尝试后均无法启动，按照项目 QA 指引改用已安装的 Playwright 和隔离的 Chrome 进行本地检查。项目原有 smoke 脚本的 Linux 路径约束通过临时本机副本适配，原脚本保持不变。

## 回看

- [桌面图库](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/folio-wide.png)
- [手机图库](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/folio-phone.png)
- [桌面详情](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/folio-detail.png)
- [手机详情](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/folio-phone-detail.png)
- [交互结果](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/folio-interactions.json)
- [生产检查](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/folio-built.json)
- [C叔品牌桌面效果](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/cshu-brand.png)
- [C叔品牌手机效果](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/cshu-brand-mobile.png)
- [C叔品牌生产检查](E:/Codexdata/outputs/github-review-20260928/folio-card/screenshots/cshu-brand-built.json)
- [品牌应用说明](E:/Codexdata/outputs/github-review-20260928/folio-card/brand-identity.md)

本地预览：<http://localhost:8080/>。本次改动保存在本地 Git 工作区，尚未提交或部署。
