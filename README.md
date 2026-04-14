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

### 第二步：理解数据结构

打开 `script.js`，找到第 9-38 行的作业数据：

```javascript
const homeworkData = {
  homeworks: [
    {
      id: "hw001",           // 作业唯一ID，不能重复
      subject: "学年论文",   // 科目名称
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

### 第三步：添加新作业

在 `homeworks: [` 和 `]` 之间添加新作业：

```javascript
{
  id: "hw004",
  subject: "语文",
  title: "唐诗三百首背诵",
  description: "1. 背诵《静夜思》《春晓》等五首唐诗\n2. 下周课堂抽查背诵",
  publishDate: "2026-04-14",
  dueDate: "2026-04-20",
  status: "active"
}
```

**注意**：
- `id` 必须唯一，如 `hw001`、`hw002`、`hw003`...
- 日期格式必须是 `YYYY-MM-DD`（年-月-日）
- description 中的 `\n` 表示换行

### 第四步：修改现有作业

直接编辑对应的作业内容即可。例如修改截止日期：

```javascript
// 把这个
dueDate: "2026-04-27"

// 改成这个
dueDate: "2026-05-01"
```

### 第五步：保存并推送

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

## 科目颜色说明

每个科目有自己的颜色（在 `subjectColors` 中定义）：

| 科目 | 颜色 |
|------|------|
| 语文 | 朱砂红 #c75555 |
| 数学 | 竹青 #4a7c59 |
| 英语 | 靛蓝 #5a7c9a |
| 物理 | 紫藤 #7c5a7c |
| 化学 | 土黄 #7c6a4a |
| 历史 | 赭石 #6a5a4a |
| 学年论文 | 棕褐 #8b5a2b |
| 微格教学 | 深蓝 #2e5a8b |
| 社会实践 | 紫色 #5a2e8b |

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
