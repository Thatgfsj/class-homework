/**
 * 中文233班作业公告板 - 交互逻辑
 */

// ========================================
// 作业数据
// ========================================

const homeworkData = {
  homeworks: [

  ];
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
  // 筛选按钮（如果存在）
  if (elements.filterButtons) {
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
  }

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
