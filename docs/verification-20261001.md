# 统一版本验证记录

2026-10-01 在 Windows 本机验证，当前统一数据 162 条（图像 90、视频 72）。本记录对应源码和本地生产预览，不代表远端部署已上线，也不代表复现了原帖的生成结果。

- `npm run data:check:reconciliation`：通过。原 001–150 全部记录不变，十二条补充内容的提示词提取范围、作者、来源、封面哈希及查询脚本核对通过。
- `node --test scripts/folio-sync.test.mjs`：2 项通过。保留原文空格与换行，检查过期导出不会修改文件，重复编号在导出前被拒绝。
- `node --test scripts/with-app-env.test.mjs`：12 项通过。
- `npm run typecheck`：通过。
- `npm run build`：通过。未配置数据库，迁移按既有约定跳过。整库随前端加载，仍有超过 500 kB 的分块提示；后续共用发布 API 时拆出数据加载。
- 修改的 JS／TS 文件 ESLint：通过。`git diff --check`：通过。
- `node scripts/brand-check.mjs --root .`：通过。
- 浏览器 smoke：开发与生产预览均在桌面 1280×800、手机 390×844 有可见内容、HTTP 200，无控制台／页面错误、横向溢出、品牌／身份验证告警。生产正文与开发基线一致。
- `node scripts/folio-ui-smoke.mjs`：开发与生产预览都通过。实际验证分类与视频用途、编号查询、排序、收藏刷新、空结果、深链接、样图／大图切换、手机弹窗滚动、关闭按钮及剪贴板。所有十二条补充内容逐条验证原文、来源链接、封面解码和剪贴板。

本机 `agent-browser` 的启动脚本引用了不存在的 Windows 可执行文件，使用项目既有 Playwright 和隔离 Chrome 完成交互检查。通用 smoke 的临时适配副本仅调整本机输出目录、Chrome 启动和品牌根目录；原 Linux smoke 文件不变。

网页维护／MCP 的后续验收见 [实施方案](mcp-web-admin-plan.md)。此版本未新增 MCP 或管理后台。
