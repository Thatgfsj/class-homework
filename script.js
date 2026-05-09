/**
 * 中文233班作业公告板 - 交互逻辑
 */

// ========================================
// 作业数据 
// ========================================

const homeworkData = {
  homeworks: [
    {
      id: "hw004",
      subject: "雨课堂",
      title: "民间文学雨课堂答题",
      description: "作业以附件类型提交，不要直接复制粘贴文字。",
      publishDate: "2026-04-13",
      dueDate: "2026-04-19",
      status: "active"
    },
    {
      id: "hw005",
      subject: "雨课堂",
      title: "文学评论与写作雨课堂答题",
      description: "无要求。",
      publishDate: "2026-04-13",
      dueDate: "2026-04-19",
      status: "active"
    },
    {
      id: "hw008",
      subject: "普通作业",
      title: "应用语言学课堂作业",
      description: "单元测试\n\n要求：\n1. 写好个人信息\n2. 上课前交给我",
      publishDate: "2026-04-21",
      dueDate: "2026-04-22",
      status: "active"
    },
    {
      id: "hw009",
      subject: "普通作业",
      title: "应用语言学读书心得",
      description: "读书心得\n\n提交顺序（订在一起）：\n1. 封面：用稿纸写，清楚写明课程名称、专业、班级、姓名、学号\n2. 打印的期刊论文原文\n3. 读书心得（手写），放在论文下面\n\n⚠️ 上课前交给我",
      publishDate: "2026-04-21",
      dueDate: "2026-04-22",
      status: "active"
    },
    {
      id: "hw006",
      subject: "论文写作",
      title: "习近平总书记关于教育重要论述研究 期末论文",
      description: "考核题目：\n请围绕习近平总书记关于教育重要论述中\"坚持把立德树人作为根本任务\"或\"坚持把教师队伍建设作为基础工作\"的内容，结合自己的专业学习经历和认识，写作一篇论文。\n\n要求：\n1. 二选一，要自命题，统一用学校答题纸，黑色笔手写\n2. 用学术论文的通用格式，字数不少于2000字\n3. 自己独立完成，严禁抄袭，可提前准备\n4. 第8周课程结束后，由学习委员统一收齐，按班级、学号排列整齐上交\n5. 注意：作业要详细写出学院，专业、年级、班级、姓名和学号\n\n论文格式要求：\n标题：简明概括核心内容\n作者：署明姓名\n摘要：说明研究目的、方法、结果和结论\n关键词：3-5个核心术语\n正文：\n  序论：背景和意义\n  论证：分点论述（1、2、3、4等）\n  结论：总结成果\n参考文献：列出引用资料",
      publishDate: "2026-04-14",
      dueDate: "2026-04-20",
      status: "active"
    },
    {
      id: "hw007",
      subject: "论文写作",
      title: "应用语言学结课论文",
      description: "论文选题范围：\n1. 结合语言教学的本质属性与核心目标，谈谈你对当前语文教学现状的认识与思考\n2. 围绕「语码转换的交际功能」这一核心，任选一个研究角度，阐述你的理解与看法\n3. 围绕「语言的社会变体」，任选一个具体视角，谈谈你的观点与分析\n4. 网络流行语应用及其社会文化心理分析\n5. 围绕「应用语言学的范围」，任选一个具体视角进行分析\n6. 结合汉语作为国际通用语的时代背景，谈谈你对当前国际中文教育的认识与思考\n7. 其他与《应用语言学》课程相关的主题\n\n论文要求：\n1. 任选其一，自拟题目，写一篇不少于3000字的论文\n2. 需包含「题目、摘要、关键词、正文、参考文献」等部分\n3. 论点明确，论证充分；理论与实际相联系，有自己的观点和思考\n4. 中英文摘要、中英文关键词\n5. 分级标题格式：一级（一、）、二级（（一））、三级（1.）、四级（（1））、五级（①）\n6. 参考文献3-5篇（学位论文D、专著M、期刊文章J）\n\n⚠️按毕业论文正规格式写，格式不合格者不放进论文集\n\n提交信息：\n- 提交时间：五一假期后（第10周）\n- 提交地点：106办公室",
      publishDate: "2026-04-15",
      dueDate: "2026-05-06",
      status: "active"
    },
            {
      id: "hw011",
      subject: "普通作业",
      title: "文学概论期中作业",
      description: "用结构主义方法分析一部作品，稿纸手写，扫描成PDF提交，截止时间：5月7日。\n\nAI 参考提示词：\n\n# 任务\n请用1+1+1+...=1的结构主义方法分析（（（这里是你的作品名）））。\n\n# 核心理念\n把作品拆成多个彼此对立或差异显著的单元（每个单元是一个1）。这些单元可以来自：人物情绪变化、故事发展阶段、同一角色的不同侧面、不同价值观的对撞等——具体从哪个角度拆，由你自己决定。\n\n拆出来的1的数量至少为4个。每个1之间必须有清晰的对立或差异关系。最后要论证：所有这些看似分散的碎片，如何共同整合成一个统一的主题（那个=1）。\n\n# 输出格式（严格遵守）\n\n1. 第一段：说明你选择了哪部作品，以及你决定从什么角度拆解。\n\n2. 第二段：用一个表格展示你拆出的所有1。表格的第一列是单元序号+单元名称。其余列是你自行选择的3-5个对比维度（不能用身份、抱负、处世、勇气、人生）。推荐维度：内在驱动力、外在行为风格、对时间的感受、对金钱物质的态度、对他人目光的依赖程度、语言虚实比例、身体劳动程度、幻想与现实的交集方式、情绪主色调等。\n\n3. 第三段及之后：用自然段落逐一描述每个1之间的对立关系，解释为什么它们是1以及它们如何相互否定或递进。\n\n4. 最后一段：总结论证1+1+1+...=1，即所有碎片如何构成一个统一主题。字数不限，但需完整。",
      publishDate: "2026-04-28",
      dueDate: "2026-05-07",
      status: "active"
    }

,
    {
      id: "hw001",
      subject: "论文写作",
      title: "2023级学年论文",
      description: "每个班的负责老师可安排学生自拟题目，老师审核，仿照毕业论文模式，让所带班级学生每人写一篇论文。\n\n要求：\n1. 仿照毕业论文模式撰写\n2. 字数在5000字左右\n3. 可打印提交\n4. 需经老师审核题目\n5. 下载模板：<a href='./files/thesis-template.doc' download>点击下载毕业论文模板</a>",
      publishDate: "2026-04-13",
      dueDate: "2026-05-17",
      status: "active"
    },
    {
      id: "hw010",
      subject: "论文写作",
      title: "文学评论与写作结课论文",
      description: "从社会历史批评、形式主义批评、英美新批评中任选一种批评方法，对以下作家的一篇短篇小说进行分析。\n\n可选作家：鲁迅、沈从文、张爱玲、汪曾祺、白先勇、余华、苏童、莫言（早期短篇）、契诃夫、海明威、博尔赫斯、卡佛\n\n论文要求：\n（1）题目自拟，须体现你的核心论点（而非仅\"XX作品分析\"）。\n（2）清晰界定你所选批评方法的核心概念（如\"陌生化\"\"张力\"等）。\n（3）结合文本具体细节展开分析，论文须有文本证据支撑。\n（4）字数不少于2000字。\n（5）遵守学术规范，不得抄袭。",
      publishDate: "2026-04-21",
      dueDate: "2026-04-29",
      status: "active"
    },
    {
      id: "hw002",
      subject: "实践要求",
      title: "2023级微格教学实践",
      description: "实践时间：第10周\n\n需完成以下内容：\n1. 一篇完整的教案（高中初中语文任选一篇，电子手写皆可）\n2. 一篇完整的PPT\n3. 录课视频约8-10分钟（模拟真实课堂，有板书）\n4. 每组讨论总结，一组交一份（可打印）\n5. 每位同学交一份实践总结（论文纸手写版）",
      publishDate: "2026-04-13",
      dueDate: "2026-05-10",
      status: "active"
    },
    {
      id: "hw003",
      subject: "实践要求",
      title: "中国民俗调查",
      description: "民俗是一个民族或地区世代相传的文化，包括饮食、节日、礼仪、游艺、物质和口语语言等诸多方面。\n\n民俗的功能：\n- 培养爱国主义情感\n- 规范道德观念\n- 维护社会和谐\n- 培育审美意识\n\n要求：\n1. 选择某地区的一种民俗展开深入调查\n2. 根据调查内容拍成视频\n3. 配上字幕，有讲解，有录音\n4. 可分组进行，一个班大概5-6个视频",
      publishDate: "2026-04-13",
      dueDate: "2026-05-24",
      status: "active"
    },
    {
      id: "hw012",
      subject: "普通作业",
      title: "大学生就业创业指导简历制作",
      description: "弄一份自己的用于求职的简历，电子版。\n\n截止时间：下周三（5月13日）",
      publishDate: "2026-05-06",
      dueDate: "2026-05-13",
      status: "active"
    },
    {
      id: "hw013",
      subject: "雨课堂",
      title: "民间文学雨课堂答题",
      description: "材料分析题，请对以下三问依次作答，写在纸上，拍成图片提交至雨课堂。\n\n【材料】\n很久以前，天上有十个太阳，大地被烤焦了。后羿拉开神弓，射下九个太阳，只留下一个照耀大地。王母娘娘赐给他不死药，他的妻子嫦娥偷偷吃下，飞向了月亮。\n\n【题目】\n1. 这段文本在文体上更接近神话还是传说？请说明判断依据。\n2. 如果当地人说某座山有「后羿射日时踩出的脚印」，这一说法属于哪种文体？为什么？\n3. 你认为「嫦娥奔月」在今天仍被广泛传播的原因有哪些？",
      publishDate: "2026-05-06",
      dueDate: "2026-05-13",
      status: "active"
    },
    {
      id: "hw014",
      subject: "普通作业",
      title: "大学生就业指导 — 面试自我介绍",
      description: "本课作业：交一份面试自我介绍稿子，课前口头展示。\n\n老师给的框架包含三部分：发音训练 + 职业标签 + 四段式自我介绍。下面有完整说明和AI辅助提示词，请好好看。\n\n---\n\n【一、发音训练】\n\"非常荣幸能够参加贵司的面试，我是XX！\"\n注意：名字发音要字字清晰，重音放在最后一个字。\n\n【二、一句话职业标签】\n用一句话给自己定位，例如：\n- 一位在软件开发领域从业6年的.net开发工程师\n- 一位在零售行业从事8年市场运营的工作者\n- 来自xx大学xx专业应届毕业生\n- 其他合适的表述\n\n【三、四段式自我介绍框架】\n\n第1段：简短开场\n\"面试官好，我是**，9年数字营销专家，现任某科技公司增长业务负责人。\"\n✅ 礼貌问候 + 姓名 + 工作年限/专业背景 + 当前职位/方向\n\n第2段：职业主线\n\"早期专注SEO与私域运营，后主导搭建跨境独立站体系。\"\n✅ 核心能力：用2-3个关键词概括你的核心竞争力（与应聘岗位强相关）\n✅ 职业路径：按时间顺序简述经历，突出与岗位相关的部分\n\n第3段：重点成果\n\"近三年操盘3个千万级用户增长项目，2025年DTC品牌项目实现单月GMV环比增长217%。\"\n✅ 数据化成果：选1-2个最相关的项目，用数据量化你的价值\n\n第4段：动机衔接\n\"深入研究贵司的东南亚市场战略，我的跨文化运营经验与供应链数字化能力，能有效支持区域市场从0到1的突破。\"\n✅ 说明为何选择该公司/岗位，体现对行业和岗位的理解\n\n---\n\n【应届生适配建议】\n上面的例子是针对有工作经验的人设计的。作为应届生可以这样改：\n- 工作年限 → 专业背景/研究方向\n- 工作经历 → 实习/项目/学术经历\n- 项目成果 → 实习成果/论文/竞赛奖项/课程项目\n- 当前职位 → 毕业去向/求职方向\n整体框架不动，只替换内容即可。\n\n---\n\nAI 参考提示词\n# 指令：你是一位专业的面试辅导教练。\n\n请按顺序向用户提出以下6个问题，每次只问一个，等用户回答后再问下一个。用户全部回答完毕后，请你根据这些回答，进行语言润色和逻辑重组，生成一份完整、专业、适合口头表达的面试自我介绍稿子。\n\n## 你需要依次问用户的6个问题：\n\n1. 请告诉我你的中文全名。\n2. 请用一句话定义你的职业身份（模板：有经验者用\"一位在[行业]从业[X]年的[岗位]\"，应届生用\"来自[大学][专业]的应届毕业生\"）。\n3. 请写出你的开场白，格式为\"面试官好，我是[姓名]，[第2问的职业标签]\"。（可补充当前职位）\n4. 请描述你的职业主线（3-5句话），包含：2-3个核心能力关键词（与求职岗位相关），并按时间顺序简述相关实习/项目/工作经历。\n5. 请分享1-2个最亮眼的成果，必须包含具体数据。\n6. 请说明你为什么选择这家公司/岗位，格式建议：\"我关注到贵司[具体业务/战略]，我的[某项能力]能为团队带来[具体价值]。\"（可假设一个行业/公司方向）\n\n---\n\n## 用户全部回答完毕后，请你输出以下内容：\n\n【发音提示】\n针对用户的名字，提示如何发音：字字清晰，重音落在最后一个字。\n\n【最终面试自我介绍稿】\n请将用户提供的原始回答进行润色、合并、优化，输出一篇约250-400字的完整稿子，结构如下：\n\n（第一段：开场）\n（第二段：职业主线）\n（第三段：重点成果）\n（第四段：动机衔接）\n\n要求：\n- 语言自然流畅，适合口头表达，避免生硬罗列。\n- 将用户零散的回答整合成连贯的段落。\n- 适当补充连接词，使逻辑顺畅。\n- 保持用户原意，不虚构信息。\n\n最后，请用一句话鼓励用户课前口头练习。",
      publishDate: "2026-05-09",
      dueDate: "2026-05-14",
      status: "active"
    }
  ]

};

// ========================================
// 科目颜色配置
// ========================================

const subjectColors = {
  "雨课堂": {
    color: "#3a8b8b",
    bg: "rgba(58, 139, 139, 0.1)"
  },
  "普通作业": {
    color: "#8b5a2b",
    bg: "rgba(139, 90, 43, 0.1)"
  },
  "论文写作": {
    color: "#2e5a8b",
    bg: "rgba(46, 90, 139, 0.1)"
  },
  "实践要求": {
    color: "#5a2e8b",
    bg: "rgba(90, 46, 139, 0.1)"
  },
  "文学概论": {
    color: "#8b3a5a",
    bg: "rgba(139, 58, 90, 0.1)"
  },
  "其他": {
    color: "#666666",
    bg: "rgba(102, 102, 102, 0.1)"
  }
};

// ========================================
// DOM 元素
// ========================================

const elements = {
  currentDate: document.getElementById('currentDate'),
  currentWeekday: document.getElementById('currentWeekday'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  filterButtons: document.getElementById('filterButtons'),
  showExpiredBtn: document.getElementById('showExpiredBtn'),
  homeworkGrid: document.getElementById('homeworkGrid'),
  emptyState: document.getElementById('emptyState'),
  loadingState: document.getElementById('loadingState'),
  modalOverlay: document.getElementById('modalOverlay'),
  modal: document.getElementById('homeworkModal'),
  modalContent: document.getElementById('modalContent'),
  modalClose: document.getElementById('modalClose'),
  lastUpdated: document.getElementById('lastUpdated')
};

// ========================================
// 工具函数
// ========================================

/**
 * 格式化日期
 */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}月${day}日`;
}

/**
 * 格式化完整日期
 */
function formatFullDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

/**
 * 获取星期几
 */
function getWeekday(dateStr) {
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const date = new Date(dateStr);
  return weekdays[date.getDay()];
}

/**
 * 计算距离截止日期的天数
 */
function getDaysUntilDue(dueDateStr) {
  const now = new Date();
  // 将日期字符串解析为本地日期的开始（00:00:00）
  const due = new Date(dueDateStr + 'T00:00:00');
  // 设置为当天结束前一刻（23:59:59）以便今天截止的作业显示为0天
  const dueEnd = new Date(due.getFullYear(), due.getMonth(), due.getDate(), 23, 59, 59);
  const diff = dueEnd - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

/**
 * 获取相对时间描述
 */
function getCountdownText(days) {
  if (days < 0) {
    return { text: '已截止', value: null, urgent: false };
  } else if (days === 0) {
    return { text: '今天截止', value: '最后', urgent: true };
  } else if (days === 1) {
    return { text: '明天截止', value: '1', urgent: true };
  } else if (days <= 3) {
    return { text: '天后截止', value: String(days), urgent: true };
  } else {
    return { text: '天后截止', value: String(days), urgent: false };
  }
}

/**
 * 获取今天的日期字符串
 */
function getTodayString() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// ========================================
// UI 渲染函数
// ========================================

/**
 * 渲染日期信息
 */
function renderDateInfo() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
  elements.currentDate.textContent = dateStr;
  elements.currentWeekday.textContent = getWeekday(getTodayString());
  elements.lastUpdated.textContent = `${dateStr} ${getWeekday(getTodayString())}`;
}

/**
 * 创建作业卡片 HTML
 */
function createHomeworkCard(homework, index) {
  const subjectStyle = subjectColors[homework.subject] || subjectColors["其他"];
  const daysUntilDue = getDaysUntilDue(homework.dueDate);
  const countdown = getCountdownText(daysUntilDue);
  const isExpired = homework.status === 'expired' || daysUntilDue < 0;

  return `
    <article class="homework-card ${isExpired ? 'expired' : ''}"
             data-id="${homework.id}"
             data-subject="${homework.subject}"
             style="animation-delay: ${index * 0.1}s; --subject-color: ${subjectStyle.color}; --subject-bg: ${subjectStyle.bg};">
      <div class="card-accent"></div>
      ${isExpired ? '<span class="card-expired-overlay">已截止</span>' : ''}
      <div class="card-content">
        <div class="card-header">
          <span class="subject-tag" style="--subject-color: ${subjectStyle.color}; --subject-bg: ${subjectStyle.bg};">
            ${homework.subject}
          </span>
          <span class="card-status ${homework.status}">
            ${isExpired ? '已截止' : '进行中'}
          </span>
        </div>
        <h3 class="card-title">${homework.title}</h3>
        <p class="card-description">${homework.description.split('\n')[0]}</p>
        <div class="card-footer">
          <div class="card-date">
            <span class="date-label">截止日期</span>
            <span class="date-value">${formatDate(homework.dueDate)} · ${getWeekday(homework.dueDate)}</span>
          </div>
          ${!isExpired ? `
          <div class="card-countdown">
            <span class="countdown-value ${countdown.urgent ? 'urgent' : ''}">${countdown.value}</span>
            <span class="countdown-label">${countdown.text}</span>
          </div>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

/**
 * 渲染作业列表
 */
function renderHomeworks(homeworks) {
  if (homeworks.length === 0) {
    elements.homeworkGrid.innerHTML = '';
    elements.emptyState.style.display = 'block';
    return;
  }

  elements.emptyState.style.display = 'none';
  elements.homeworkGrid.innerHTML = homeworks
    .map((hw, index) => createHomeworkCard(hw, index))
    .join('');

  // 重新绑定卡片点击事件
  bindCardEvents();
}

/**
 * 渲染模态框内容
 */
function renderModal(homework) {
  const subjectStyle = subjectColors[homework.subject] || subjectColors["其他"];
  const countdown = getCountdownText(getDaysUntilDue(homework.dueDate));
  const isExpired = homework.status === 'expired' || getDaysUntilDue(homework.dueDate) < 0;

  // Check if description has AI prompt (after --- divider)
  const hasAIPrompt = homework.description.includes('AI 参考提示词');
  const aiPromptText = hasAIPrompt
    ? homework.description.split('AI 参考提示词')[1].replace(/^[:：]\n?/, '').trim()
    : '';

  elements.modal.style.setProperty('--subject-color', subjectStyle.color);
  elements.modal.style.setProperty('--subject-bg', subjectStyle.bg);

  const copyBtnHTML = ''; // copy button now inside code block

  // Build description HTML - show intro, then AI prompt in code block
  const parts = homework.description.split('AI 参考提示词');
  let descHTML = '';
  if (parts.length > 1) {
    // Has AI prompt - show intro then code block with copy button inside
    const intro = parts[0].split('\n').map(p => `<p>${p}</p>`).join('');
    const copyBtn = `<button class="copy-prompt-btn" onclick="copyAIPrompt()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      复制
    </button>`;
    descHTML = intro + `
      <div class="prompt-label">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
        AI 参考提示词
      </div>
      <pre class="prompt-code"><div class="prompt-header">${copyBtn}</div><code>${aiPromptText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
    `;
  } else {
    // No AI prompt - just normal paragraphs
    descHTML = homework.description.split('\n').map(p => `<p>${p}</p>`).join('');
  }

  elements.modalContent.innerHTML = `
    <div class="modal-accent" style="background: ${subjectStyle.color};"></div>
    <div class="modal-header">
      <span class="modal-subject" style="--subject-color: ${subjectStyle.color}; --subject-bg: ${subjectStyle.bg};">
        ${homework.subject}
      </span>
      <h2 class="modal-title">${homework.title}</h2>
      <div class="modal-meta">
        <div class="modal-meta-item">
          <span class="modal-meta-label">发布日期</span>
          <span class="modal-meta-value">${formatFullDate(homework.publishDate)} · ${getWeekday(homework.publishDate)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">截止日期</span>
          <span class="modal-meta-value">${formatFullDate(homework.dueDate)} · ${getWeekday(homework.dueDate)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">状态</span>
          <span class="modal-meta-value" style="color: ${isExpired ? 'var(--text-muted)' : countdown.urgent ? 'var(--accent)' : 'var(--subject-math)'};">
            ${isExpired ? '已截止' : (countdown.value !== null ? countdown.value + countdown.text : countdown.text)}
          </span>
        </div>
      </div>
      ${copyBtnHTML}
    </div>
    <div class="modal-description">
      ${descHTML}
    </div>
  `;

  // Store AI prompt for copy function
  if (hasAIPrompt) {
    window._currentAIPrompt = aiPromptText;
  }
}

/**
 * 复制AI提示词到剪贴板
 */
function copyAIPrompt() {
  const prompt = window._currentAIPrompt || '';
  if (!prompt) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(prompt).then(() => {
      showCopyToast('已复制到剪贴板');
    }).catch(() => {
      fallbackCopyText(prompt);
    });
  } else {
    fallbackCopyText(prompt);
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyToast('已复制到剪贴板');
  } catch(e) {
    showCopyToast('复制失败，请手动选择复制');
  }
  document.body.removeChild(textarea);
}

function showCopyToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.copy-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.textContent = message;
  toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 20px;border-radius:20px;font-size:14px;z-index:10000;animation:fadeIn 0.3s';
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 2000);
}

// ========================================
// 事件处理
// ========================================

// 当前筛选状态
let currentFilter = 'all';
let searchQuery = '';
let debounceTimer = null;
let showExpired = false; // 是否显示已过期作业

/**
 * 筛选作业
 */
function filterHomeworks() {
  let filtered = [...homeworkData.homeworks];

  // 按截止日期过滤
  const today = getTodayString();
  if (showExpired) {
    // 只显示已截止的作业
    filtered = filtered.filter(hw => hw.dueDate < today);
  } else {
    // 只显示未截止的作业
    filtered = filtered.filter(hw => hw.dueDate >= today);
  }

  // 按截止日期排序（最近的在前）- 使用本地日期比较
  filtered.sort((a, b) => {
    const dateA = new Date(a.dueDate + 'T00:00:00');
    const dateB = new Date(b.dueDate + 'T00:00:00');
    return dateA - dateB;
  });

  // 按科目筛选
  if (currentFilter !== 'all') {
    filtered = filtered.filter(hw => hw.subject === currentFilter);
  }

  // 按关键词搜索
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(hw =>
      hw.title.toLowerCase().includes(query) ||
      hw.description.toLowerCase().includes(query) ||
      hw.subject.toLowerCase().includes(query)
    );
  }

  renderHomeworks(filtered);
}

/**
 * 绑定卡片点击事件
 */
function bindCardEvents() {
  const cards = elements.homeworkGrid.querySelectorAll('.homework-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const homework = homeworkData.homeworks.find(hw => hw.id === id);
      if (homework) {
        openModal(homework);
      }
    });
  });
}

/**
 * 打开模态框
 */
function openModal(homework) {
  renderModal(homework);
  elements.modalOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

/**
 * 关闭模态框
 */
function closeModal() {
  elements.modalOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

/**
 * 初始化事件监听
 */
function initEventListeners() {
  // 筛选按钮
  elements.filterButtons.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // 更新按钮状态
    elements.filterButtons.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    // 更新筛选
    currentFilter = btn.dataset.filter;
    filterHomeworks();
  });

  // 搜索输入
  elements.searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;

    // 显示/隐藏清除按钮
    if (searchQuery) {
      elements.searchClear.classList.add('visible');
    } else {
      elements.searchClear.classList.remove('visible');
    }

    // 防抖
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      filterHomeworks();
    }, 300);
  });

  // 清除搜索
  elements.searchClear.addEventListener('click', () => {
    elements.searchInput.value = '';
    searchQuery = '';
    elements.searchClear.classList.remove('visible');
    filterHomeworks();
  });

  // 查看已截止按钮
  elements.showExpiredBtn.addEventListener('click', () => {
    showExpired = !showExpired;
    elements.showExpiredBtn.classList.toggle('active', showExpired);
    elements.showExpiredBtn.innerHTML = showExpired
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
         </svg>
         隐藏已截止`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
         </svg>
         查看已截止`;
    filterHomeworks();
  });

  // 模态框关闭
  elements.modalClose.addEventListener('click', closeModal);
  elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) {
      closeModal();
    }
  });

  // ESC 键关闭模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modalOverlay.classList.contains('visible')) {
      closeModal();
    }
  });
}

// ========================================
// 初始化
// ========================================

function init() {
  // 渲染日期信息
  renderDateInfo();

  // 隐藏加载状态
  elements.loadingState.classList.remove('visible');

  // 初始化事件监听
  initEventListeners();

  // 初始渲染
  filterHomeworks();
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
