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
      id: "hw006",
      subject: "习教论",
      title: "习近平总书记关于教育重要论述研究 期末论文",
      description: "考核题目：\\n请围绕习近平总书记关于教育重要论述中\"坚持把立德树人作为根本任务\"或\"坚持把教师队伍建设作为基础工作\"的内容，结合自己的专业学习经历和认识，写作一篇论文。\\n\\n要求：\\n1. 二选一，要自命题，统一用学校答题纸，黑色笔手写\\n2. 用学术论文的通用格式，字数不少于2000字\\n3. 自己独立完成，严禁抄袭，可提前准备\\n4. 第8周课程结束后，由学习委员统一收齐，按班级、学号排列整齐上交\\n5. 注意：作业要详细写出学院，专业、年级、班级、姓名和学号\\n\\n论文格式要求：\\n标题：简明概括核心内容\\n作者：署明姓名\\n摘要：说明研究目的、方法、结果和结论\\n关键词：3-5个核心术语\\n正文：\\n  序论：背景和意义\\n  论证：分点论述（1、2、3、4等）\\n  结论：总结成果\\n参考文献：列出引用资料",
      publishDate: "2026-04-14",
      dueDate: "2026-04-20",
      status: "active"
    },
    {
      id: "hw001",
      subject: "学年论文",
      title: "2023级学年论文",
      description: "每个班的负责老师可安排学生自拟题目，老师审核，仿照毕业论文模式，让所带班级学生每人写一篇论文。\\n\\n要求：\\n1. 仿照毕业论文模式撰写\\n2. 字数在5000字左右\\n3. 可打印提交\\n4. 需经老师审核题目",
      publishDate: "2026-04-13",
      dueDate: "2026-05-10",
      status: "active"
    },
    {
      id: "hw002",
      subject: "微格教学",
      title: "2023级微格教学实践",
      description: "实践时间：第10周\\n\\n需完成以下内容：\\n1. 一篇完整的教案（高中初中语文任选一篇，电子手写皆可）\\n2. 一篇完整的PPT\\n3. 录课视频约8-10分钟（模拟真实课堂，有板书）\\n4. 每组讨论总结，一组交一份（可打印）\\n5. 每位同学交一份实践总结（论文纸手写版）",
      publishDate: "2026-04-13",
      dueDate: "2026-05-10",
      status: "active"
    },
    {
      id: "hw003",
      subject: "社会实践",
      title: "中国民俗调查",
      description: "民俗是一个民族或地区世代相传的文化，包括饮食、节日、礼仪、游艺、物质和口语语言等诸多方面。\\n\\n民俗的功能：\\n- 培养爱国主义情感\\n- 规范道德观念\\n- 维护社会和谐\\n- 培育审美意识\\n\\n要求：\\n1. 选择某地区的一种民俗展开深入调查\\n2. 根据调查内容拍成视频\\n3. 配上字幕，有讲解，有录音\\n4. 可分组进行，一个班大概5-6个视频",
      publishDate: "2026-04-13",
      dueDate: "2026-05-10",
      status: "active"
    }
  ]

// ========================================
// 科目颜色配置
// ========================================

const subjectColors = {
  "语文": {
    color: "#c75555",
    bg: "rgba(199, 85, 85, 0.1)"
  },
  "数学": {
    color: "#4a7c59",
    bg: "rgba(74, 124, 89, 0.1)"
  },
  "英语": {
    color: "#5a7c9a",
    bg: "rgba(90, 124, 154, 0.1)"
  },
  "物理": {
    color: "#7c5a7c",
    bg: "rgba(124, 90, 124, 0.1)"
  },
  "化学": {
    color: "#7c6a4a",
    bg: "rgba(124, 106, 74, 0.1)"
  },
  "历史": {
    color: "#6a5a4a",
    bg: "rgba(106, 90, 74, 0.1)"
  },
  "学年论文": {
    color: "#8b5a2b",
    bg: "rgba(139, 90, 43, 0.1)"
  },
  "微格教学": {
    color: "#2e5a8b",
    bg: "rgba(46, 90, 139, 0.1)"
  },
  "社会实践": {
    color: "#5a2e8b",
    bg: "rgba(90, 46, 139, 0.1)"
  },
  "雨课堂": {
    color: "#3a8b8b",
    bg: "rgba(58, 139, 139, 0.1)"
  },
  "习教论": {
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
  const due = new Date(dueDateStr);
  const diff = due - now;
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
  const countdown = getCountdownText(getDaysUntilDue(homework.dueDate));
  const isExpired = homework.status === 'expired' || getDaysUntilDue(homework.dueDate) < 0;

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

  elements.modal.style.setProperty('--subject-color', subjectStyle.color);
  elements.modal.style.setProperty('--subject-bg', subjectStyle.bg);

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
            ${isExpired ? '已截止' : countdown.text}
          </span>
        </div>
      </div>
    </div>
    <div class="modal-description">
      ${homework.description.split('\n').map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
}

// ========================================
// 事件处理
// ========================================

// 当前筛选状态
let currentFilter = 'all';
let searchQuery = '';
let debounceTimer = null;

/**
 * 筛选作业
 */
function filterHomeworks() {
  let filtered = [...homeworkData.homeworks];

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
  renderHomeworks(homeworkData.homeworks);
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
