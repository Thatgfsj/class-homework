# 中文233班作业公告板

> 一个优美的新中式风格作业发布静态网站

## 访问地址

**网站**: https://thatgfsj.github.io/class-homework/

**GitHub 仓库**: https://github.com/Thatgfsj/class-homework

---

## 功能特性

- 作业卡片展示 - 按科目分类，彩色边条区分
- 截止倒计时 - 实时显示距截止日期
- 搜索筛选 - 支持按科目和关键词快速查找
- 点击展开 - 查看作业详细信息
- 响应式设计 - 适配手机、平板、电脑

---

## 修改作业内容（详细教程）

### 第一步：找到文件

在项目文件夹中找到 `script.js` 文件，用任意文本编辑器打开：
- Windows: 用 VS Code、记事本、HBuilderX 等
- Mac: 用 VS Code、TextEdit 等
- 推荐使用 [VS Code](https://code.visualstudio.com/)（免费）

### 第一步：找到文件

在项目文件夹中找到 `script.js` 文件，用任意文本编辑器打开：
- Windows: 用 VS Code、记事本、HBuilderX 等
- Mac: 用 VS Code、TextEdit 等
- 推荐使用 [VS Code](https://code.visualstudio.com/)（免费）

### 第二步：理解数据结构和分类

打开 `script.js`，找到作业数据和分类配置：

**作业数据** (`homeworks` 数组)：
```javascript
const homeworkData = {
  homeworks: [
    {
      id: "hw001",           // 作业唯一ID，不能重复
      subject: "论文写作",   // 分类名称
      title: "2023级学年论文", // 作业标题
      description: "作业的详细描述...", // 详细说明（支持换行）
      publishDate: "2026-04-13",  // 发布日期（格式：年-月-日）
      dueDate: "2026-04-27",      // 截止日期（格式：年-月-日）
      status: "active"      // 状态：active=进行中，expired=已截止
    },
    // 更多作业...
  ]
};
```

**分类颜色** (`subjectColors` 对象)：
```javascript
const subjectColors = {
  "雨课堂": { color: "#3a8b8b", bg: "rgba(58, 139, 139, 0.1)" },
  "普通作业": { color: "#8b5a2b", bg: "rgba(139, 90, 43, 0.1)" },
  "论文写作": { color: "#2e5a8b", bg: "rgba(46, 90, 139, 0.1)" },
  "实践要求": { color: "#5a2e8b", bg: "rgba(90, 46, 139, 0.1)" }
};
```

如需添加新分类，需要同时在 `subjectColors` 中添加颜色配置。

### 第三步：添加或修改作业

在 `homeworks: [` 和 `]` 之间添加新作业：

```javascript
{
  id: "hw004",
  subject: "普通作业",
  title: "课堂笔记整理",
  description: "整理本周课堂笔记\n下周课堂检查",
  publishDate: "2026-04-14",
  dueDate: "2026-04-20",
  status: "active"
}
```

**注意**：
- `id` 必须唯一，如 `hw001`、`hw002`、`hw003`...
- `subject` 必须是已定义的分类之一
- 日期格式必须是 `YYYY-MM-DD`（年-月-日）
- description 中的 `\n` 表示换行

### 第四步：保存并推送

1. 保存 `script.js` 文件
2. 打开命令行，进入项目文件夹
3. 执行以下命令：

```bash
git add .
git commit -m "更新作业内容"
git push
```

4. 等待约 1-2 分钟，网站自动更新

---

## 修改分类或样式

### 添加新分类

1. 在 `subjectColors` 对象中添加颜色配置
2. 在 `index.html` 的 filter-buttons 中添加对应的按钮
3. 将作业的 `subject` 字段设为新分类名

### 修改现有分类

直接编辑 `subjectColors` 中的颜色值，或修改作业的 `subject` 字段即可。

---

## 作业分类

当前分类：
- 雨课堂
- 普通作业
- 论文写作
- 实践要求

| 分类 | 颜色 | 说明 |
|------|------|------|
| 雨课堂 | 青色 #3a8b8b | 雨课堂答题类作业 |
| 普通作业 | 棕褐 #8b5a2b | 课堂作业、读书心得等 |
| 论文写作 | 深蓝 #2e5a8b | 结课论文、学年论文等 |
| 实践要求 | 紫色 #5a2e8b | 实践类、调查类作业 |

如果需要添加新科目，需要在 `subjectColors` 中添加对应颜色。

---

## 文件结构说明

```
class-homework-site/
├── index.html      # 页面结构（一般不需要修改）
├── styles.css      # 样式设计（修改颜色、设计时动这里）
├── script.js       # 作业数据和交互逻辑（修改内容主要在这里）
├── SPEC.md         # 设计规格文档
└── README.md       # 本说明文件
```

---

## 常见问题

### Q: 为什么网站没有更新？
A: GitHub Pages 需要 1-2 分钟构建，请稍等后刷新浏览器缓存（Ctrl+F5）

### Q: 可以添加图片或附件吗？
A: 当前版本是纯静态网站，如需附件可以上传到网盘后在作业描述中放链接

### Q: 怎么删除一个作业？
A: 在 `script.js` 中删除对应的作业对象即可

### Q: 截止日期过了会怎样？
A: 作业卡片会显示灰色"已截止"标记，但仍会显示在列表中

---



### ⚠️ 添加作业时注意中文引号转义
在 `description` 字段中，如果中文文本包含引号（如"坚持把立德树人作为根本任务"），必须将内部引号转义为 \" 否则会导致 JavaScript 语法错误。

正确示例：
```javascript
description: "考核题目：xxx\"坚持把立德树人作为根本任务\"xxx"
```

错误示例（会导致网站崩溃）：
```javascript
description: "考核题目：xxx"坚持把立德树人作为根本任务"xxx"
```

---

## 部署信息

- GitHub 仓库: https://github.com/Thatgfsj/class-homework
- 网站地址: https://thatgfsj.github.io/class-homework/
- 构建方式: GitHub Pages (Legacy)

---

*Designed with for 中文233*


---

## 常见问题排查

### 1. JavaScript 语法错误导致页面空白

**问题表现：** GitHub Actions 构建成功，但页面显示空白或作业列表不加载。

**原因：** script.js 中存在 JavaScript 语法错误。常见原因：

- 在 description 字符串中使用了 **（Markdown 粗体语法），JavaScript 会将其解析为指数运算符，导致 Unexpected number 错误
- 在字符串中使用了未转义的双引号 "，导致字符串提前终止

**排查方法：**

```bash
node --check script.js
```

**解决方法：** 如果提交后页面空白，执行以下步骤：
1. 登录 GitHub，进入仓库
2. 找到最后一次提交，查看 script.js 的变更
3. 检查是否有 ** 或其他可能在 JS 字符串中引起问题的字符
4. 修复后重新提交，或回滚到上一个正常版本

### 2. GitHub Pages 缓存导致更新不生效

**问题表现：** 已经推送了新代码，但页面显示的还是旧内容。

**解决方法：**
- 强制刷新浏览器：Ctrl + Shift + R（Windows）或 Cmd + Shift + R（Mac）
- 清除浏览器缓存后重试
