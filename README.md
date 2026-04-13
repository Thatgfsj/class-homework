# 中文233班作业公告板

> 一个优美的新中式风格作业发布静态网站

## 🌸 项目简介

这是一个为中文233班设计的作业发布平台，采用「墨韵书香」设计理念，融合传统水墨元素与现代极简设计。

**访问地址**: https://xxgczw233.github.io/class-homework

## ✨ 功能特性

- 📋 作业列表展示 - 卡片式布局，美观清晰
- 🔍 搜索筛选 - 支持按科目和关键词快速查找
- ⏰ 截止倒计时 - 实时显示距截止日期
- 📱 响应式设计 - 完美适配手机、平板、电脑
- 🎨 新中式美学 - 墨青朱砂，书卷气息

## 🚀 部署到 GitHub Pages

### 方法一：手动部署

1. **创建 GitHub 仓库**
   - 登录 GitHub，点击右上角 `+` → `New repository`
   - 仓库名称填写 `class-homework`（或你喜欢的名字）
   - 选择 `Public`
   - 点击 `Create repository`

2. **上传文件**
   - 在仓库页面点击 `uploading an existing file`
   - 将本项目所有文件拖入上传区域
   - 点击 `Commit changes`

3. **启用 GitHub Pages**
   - 进入仓库 `Settings` → `Pages`
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，文件夹选择 `/ (root)`
   - 点击 `Save`
   - 等待 1-2 分钟，你的网站就上线了！

### 方法二：使用 Git 命令

```bash
# 进入项目文件夹
cd class-homework-site

# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/class-homework.git

# 推送
git push -u origin main
```

然后在 GitHub 仓库 Settings → Pages 中启用即可。

## 📁 文件结构

```
class-homework-site/
├── index.html          # 主页面
├── styles.css          # 样式表
├── script.js           # 交互逻辑
├── SPEC.md             # 设计规格文档
└── README.md           # 使用说明
```

## 🎨 自定义修改

### 修改班级信息

编辑 `index.html` 和 `script.js` 中的班级名称：
- `中文233` → 你的班级名称
- `XXGCZW233` → 你想要的网站后缀

### 添加作业

编辑 `script.js` 中的 `homeworkData.homeworks` 数组，添加新作业：

```javascript
{
  id: "hw009",
  subject: "科目",
  title: "作业标题",
  description: "作业详细描述...",
  publishDate: "2026-04-14",
  dueDate: "2026-04-21",
  status: "active"
}
```

### 修改颜色主题

编辑 `styles.css` 中的 `:root` 变量：

```css
:root {
  --primary: #1a3a4a;      /* 主色调 */
  --accent: #c75555;        /* 强调色 */
  --bg-primary: #faf8f5;    /* 背景色 */
}
```

## 🛠️ 技术栈

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Noto Serif SC, Noto Sans SC, Crimson Pro)

## 📝 许可证

MIT License - 自由使用和修改

---

*Designed with ❤️ for 中文233*
