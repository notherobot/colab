/* ============================
   COLAB — APP LOGIC
   ============================ */

// ── DATA ──────────────────────────────────────────────────────────────────

const DROP_CARDS = [
  {
    id: 1,
    title: "Neon Dreams",
    creators: "AXEL VOSS × MIRA TANAKA",
    type: "MUSIC VIDEO",
    emoji: "🎬",
    bg: "linear-gradient(135deg,#1a0033,#00001a)",
    accent: "#ff00ff",
    live: true,
    likes: 214,
    saves: 88
  },
  {
    id: 2,
    title: "Urban Stories",
    creators: "DEV KAPOOR × LEILA SANTOS",
    type: "PHOTO × POETRY",
    emoji: "📸",
    bg: "linear-gradient(135deg,#001a0d,#0d0d00)",
    accent: "#00ff88",
    live: false,
    likes: 97,
    saves: 41
  },
  {
    id: 3,
    title: "Glitch Runner",
    creators: "RIVER CHEN × ZOE PARK",
    type: "INDIE GAME",
    emoji: "🕹",
    bg: "linear-gradient(135deg,#001a1a,#0d0033)",
    accent: "#00ffff",
    live: true,
    likes: 340,
    saves: 155
  },
  {
    id: 4,
    title: "Dream Journal",
    creators: "ALMA REYES × FINN COLE",
    type: "ILLUSTRATED ZINE",
    emoji: "📓",
    bg: "linear-gradient(135deg,#1a1a00,#1a000d)",
    accent: "#ffff00",
    live: false,
    likes: 76,
    saves: 30
  },
  {
    id: 5,
    title: "Signal/Noise",
    creators: "KAI DAVIS × ECHO RIVERA",
    type: "SOUND + VISUAL",
    emoji: "📡",
    bg: "linear-gradient(135deg,#0d001a,#001a1a)",
    accent: "#ff00ff",
    live: false,
    likes: 188,
    saves: 72
  },
  {
    id: 6,
    title: "Concrete Jungle",
    creators: "MALIK JONES × YUNA CHO",
    type: "PHOTO + HIP-HOP",
    emoji: "🏙",
    bg: "linear-gradient(135deg,#0d0d0d,#001a0d)",
    accent: "#00ffff",
    live: false,
    likes: 122,
    saves: 58
  }
];

const MESSAGES = [
  {
    id: 1,
    name: "JAMIE COOPER",
    discipline: "MUSICIAN",
    emoji: "🎸",
    avatarColor: "#1a003a",
    lastMsg: "yo when are you free to record?",
    time: "2m",
    unread: false,
    thread: [
      { from: "them", text: "hey! just heard Signal/Noise — that reverb tail is insane", time: "yesterday" },
      { from: "me", text: "thanks! was messing around with convolution reverb + tape saturation", time: "yesterday" },
      { from: "them", text: "we should collab on something. i have a track that needs that vibe", time: "1hr" },
      { from: "me", text: "100% down. what genre?", time: "45m" },
      { from: "them", text: "yo when are you free to record?", time: "2m" }
    ]
  },
  {
    id: 2,
    name: "NINA PATEL",
    discipline: "GRAPHIC DESIGNER",
    emoji: "🖌",
    avatarColor: "#001a1a",
    lastMsg: "just sent you the revised mockups",
    time: "18m",
    unread: false,
    thread: [
      { from: "me", text: "can you do a version with the glitch effect more pronounced?", time: "yesterday" },
      { from: "them", text: "yes! love that direction. give me a day", time: "yesterday" },
      { from: "them", text: "just sent you the revised mockups", time: "18m" }
    ]
  },
  {
    id: 3,
    name: "CHRIS LEE",
    discipline: "FILMMAKER",
    emoji: "🎥",
    avatarColor: "#1a0d00",
    lastMsg: "the cut is looking 🔥",
    time: "1hr",
    unread: false,
    thread: [
      { from: "them", text: "finished the rough cut of Neon Dreams", time: "2hr" },
      { from: "me", text: "sending over the final stems tonight", time: "1.5hr" },
      { from: "them", text: "the cut is looking 🔥", time: "1hr" }
    ]
  },
  {
    id: 4,
    name: "RILEY JAMES",
    discipline: "ANIMATOR",
    emoji: "✨",
    avatarColor: "#001a00",
    lastMsg: "are we still on for Thursday?",
    time: "3hr",
    unread: true,
    thread: [
      { from: "them", text: "got the brief from Block Collective", time: "4hr" },
      { from: "them", text: "would be sick to pitch together on the game audio", time: "4hr" },
      { from: "them", text: "are we still on for Thursday?", time: "3hr" }
    ]
  }
];

const PROFILES = [
  {
    name: "SOFIA MARTINEZ",
    discipline: "MOTION DESIGNER",
    skills: ["AFTER EFFECTS", "3D", "ILLUSTRATION", "BLENDER"],
    vibe: "weird + cinematic",
    emoji: "🌀",
    bg: "linear-gradient(135deg,#1a0033,#001a2a)"
  },
  {
    name: "JORDAN BLAKE",
    discipline: "PHOTOGRAPHER",
    skills: ["PORTRAIT", "URBAN", "DARK ROOM", "35MM"],
    vibe: "analog soul",
    emoji: "📷",
    bg: "linear-gradient(135deg,#0d0d00,#1a0d00)"
  },
  {
    name: "ECHO RIVERA",
    discipline: "MUSIC PRODUCER",
    skills: ["ABLETON", "SOUND DESIGN", "MIXING", "SYNTHESIS"],
    vibe: "glitchy ambient",
    emoji: "🎛",
    bg: "linear-gradient(135deg,#001a1a,#0d0033)"
  },
  {
    name: "TAYLOR QUINN",
    discipline: "STORYBOARD ARTIST",
    skills: ["NARRATIVE", "COMICS", "FILM", "INK"],
    vibe: "story-first",
    emoji: "✏️",
    bg: "linear-gradient(135deg,#1a1a00,#001a0d)"
  },
  {
    name: "RIVER CHEN",
    discipline: "GAME DEVELOPER",
    skills: ["UNITY", "PIXEL ART", "SHADERS", "GODOT"],
    vibe: "retro future",
    emoji: "👾",
    bg: "linear-gradient(135deg,#00001a,#001a0d)"
  }
];

const JOBS = [
  {
    company: "ZINE STUDIOS",
    title: "Album Art — EP Release",
    skills: ["ILLUSTRATION", "TYPOGRAPHY"],
    pay: "$400–600",
    deadline: "3 WEEKS",
    tags: ["DESIGN"]
  },
  {
    company: "NITE OWL FILMS",
    title: "Title Sequence Designer",
    skills: ["MOTION DESIGN", "AFTER EFFECTS"],
    pay: "$800",
    deadline: "2 WEEKS",
    tags: ["FILM", "DESIGN"]
  },
  {
    company: "PHANTOM RECORDS",
    title: "Podcast Cover Art Series",
    skills: ["DESIGN", "BRANDING"],
    pay: "$150 / EP",
    deadline: "ROLLING",
    tags: ["DESIGN", "MUSIC"]
  },
  {
    company: "BLOCK COLLECTIVE",
    title: "Game Sound Design",
    skills: ["SOUND", "FOLEY", "ABLETON"],
    pay: "$1,200",
    deadline: "1 MONTH",
    tags: ["MUSIC", "DEV"]
  }
];

// ── STATE ─────────────────────────────────────────────────────────────────

let currentCard = 0;
let likedCards = new Set();
let savedCards = new Set();
let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;

// ── INIT ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderDrop();
  renderMessages();
  renderHandshake();
  renderJobs();
  renderProfile();
  initNav();
  initSettings();
  initFilterChips();
});

// ── NAVIGATION ────────────────────────────────────────────────────────────

function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`tab-${tab}`).classList.add('active');
  // Scroll to top
  document.querySelector('.tab-content').scrollTop = 0;
}

// ── FILTER CHIPS ──────────────────────────────────────────────────────────

function initFilterChips() {
  document.querySelectorAll('.filter-chips').forEach(group => {
    group.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });
}

// ── DROP FEED ─────────────────────────────────────────────────────────────

function renderDrop() {
  const feed = document.getElementById('drop-feed');
  feed.innerHTML = DROP_CARDS.map(card => `
    <div class="drop-card" data-id="${card.id}">
      ${card.live ? '<div class="live-badge">● LIVE DROP</div>' : ''}
      <div class="card-thumb-placeholder" style="background:${card.bg}">
        <span style="font-size:56px;position:relative;z-index:1">${card.emoji}</span>
      </div>
      <div class="card-body">
        <div class="card-type-tag">${card.type}</div>
        <div class="card-title">${card.title}</div>
        <div class="card-creators">${card.creators}</div>
        <div class="card-actions">
          <button class="action-btn like-btn" data-id="${card.id}">
            ♥ <span class="like-count">${card.likes}</span>
          </button>
          <button class="action-btn save-btn" data-id="${card.id}">
            ✦ <span>SAVE</span>
          </button>
          <button class="action-btn" style="margin-left:auto">→ VIEW</button>
        </div>
      </div>
    </div>
  `).join('');

  // Like buttons
  feed.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const card = DROP_CARDS.find(c => c.id === id);
      if (likedCards.has(id)) {
        likedCards.delete(id);
        card.likes--;
        btn.classList.remove('active');
      } else {
        likedCards.add(id);
        card.likes++;
        btn.classList.add('active');
      }
      btn.querySelector('.like-count').textContent = card.likes;
    });
  });

  // Save buttons
  feed.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      if (savedCards.has(id)) {
        savedCards.delete(id);
        btn.classList.remove('active', 'save');
      } else {
        savedCards.add(id);
        btn.classList.add('active', 'save');
      }
    });
  });
}

// ── MESSAGES ──────────────────────────────────────────────────────────────

function renderMessages() {
  const list = document.getElementById('message-list');
  list.innerHTML = MESSAGES.map(m => `
    <div class="msg-thread" data-id="${m.id}">
      <div class="msg-avatar ${m.unread ? 'unread' : ''}" style="background:${m.avatarColor}">${m.emoji}</div>
      <div class="msg-info">
        <div class="msg-name">${m.name}</div>
        <div class="msg-discipline">${m.discipline}</div>
        <div class="msg-preview ${m.unread ? 'unread' : ''}">${m.lastMsg}</div>
      </div>
      <div class="msg-meta">
        <div class="msg-time">${m.time}</div>
        ${m.unread ? '<div class="msg-unread-dot"></div>' : ''}
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.msg-thread').forEach(el => {
    el.addEventListener('click', () => {
      const id = parseInt(el.dataset.id);
      openChat(id);
    });
  });
}

function openChat(id) {
  const msg = MESSAGES.find(m => m.id === id);
  const list = document.getElementById('message-list');
  const chat = document.getElementById('chat-view');

  list.style.display = 'none';
  chat.classList.remove('hidden');
  chat.innerHTML = `
    <div class="chat-header">
      <button class="chat-back" id="chat-back">← BACK</button>
      <div>
        <div class="chat-name">${msg.name}</div>
        <div style="font-size:9px;letter-spacing:2px;color:var(--cyan)">${msg.discipline}</div>
      </div>
    </div>
    <div class="chat-messages">
      ${msg.thread.map(m => `
        <div>
          <div class="chat-bubble ${m.from}">${m.text}</div>
          <div class="chat-bubble-meta" style="text-align:${m.from === 'me' ? 'right' : 'left'}">${m.time}</div>
        </div>
      `).join('')}
    </div>
    <div class="chat-input-bar">
      <input class="chat-input" placeholder="TYPE A MESSAGE..." maxlength="200" />
      <button class="chat-send">SEND</button>
    </div>
  `;

  // Auto-scroll
  const msgs = chat.querySelector('.chat-messages');
  msgs.scrollTop = msgs.scrollHeight;

  // Back button
  chat.querySelector('#chat-back').addEventListener('click', () => {
    chat.classList.add('hidden');
    chat.innerHTML = '';
    list.style.display = '';
  });

  // Send message
  const input = chat.querySelector('.chat-input');
  const sendBtn = chat.querySelector('.chat-send');
  function sendMsg() {
    const text = input.value.trim();
    if (!text) return;
    const bubble = document.createElement('div');
    bubble.innerHTML = `
      <div class="chat-bubble me">${escapeHtml(text)}</div>
      <div class="chat-bubble-meta" style="text-align:right">just now</div>
    `;
    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;
    input.value = '';
  }
  sendBtn.addEventListener('click', sendMsg);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── HANDSHAKE ─────────────────────────────────────────────────────────────

function renderHandshake() {
  currentCard = 0;
  updateSwipeCard();

  document.getElementById('btn-pass').addEventListener('click', () => swipe('left'));
  document.getElementById('btn-match').addEventListener('click', () => swipe('right'));
  document.getElementById('match-dismiss').addEventListener('click', dismissMatch);
  document.getElementById('match-skip').addEventListener('click', dismissMatch);

  // Touch/drag support
  const container = document.getElementById('swipe-card-container');
  container.addEventListener('mousedown', onDragStart);
  container.addEventListener('touchstart', onDragStart, { passive: true });
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('touchmove', onDragMove, { passive: true });
  document.addEventListener('mouseup', onDragEnd);
  document.addEventListener('touchend', onDragEnd);
}

function updateSwipeCard() {
  const container = document.getElementById('swipe-card-container');
  const remaining = document.getElementById('cards-remaining');

  if (currentCard >= PROFILES.length) {
    container.innerHTML = `<div class="all-done"><span>👋</span>YOU'VE SEEN EVERYONE<br><br><small style="font-family:var(--font-main);font-size:12px;color:var(--grey)">CHECK BACK TOMORROW FOR NEW DROPS</small></div>`;
    document.getElementById('btn-pass').disabled = true;
    document.getElementById('btn-match').disabled = true;
    remaining.textContent = '0';
    return;
  }

  const p = PROFILES[currentCard];
  remaining.textContent = PROFILES.length - currentCard;
  container.innerHTML = `
    <div class="profile-card" id="current-card">
      <div class="pc-thumb" style="background:${p.bg}">
        <span style="position:relative;z-index:1;font-size:72px">${p.emoji}</span>
      </div>
      <div class="pc-body">
        <div class="pc-name">${p.name}</div>
        <div class="pc-discipline">${p.discipline}</div>
        <div class="pc-skills">
          ${p.skills.map(s => `<span class="pc-skill">${s}</span>`).join('')}
        </div>
        <div class="pc-vibe">${p.vibe}</div>
      </div>
    </div>
  `;
}

function swipe(direction) {
  if (currentCard >= PROFILES.length) return;
  const card = document.getElementById('current-card');
  if (!card) return;

  card.classList.add(direction === 'left' ? 'swiping-left' : 'swiping-right');

  setTimeout(() => {
    if (direction === 'right') {
      showMatchModal(PROFILES[currentCard]);
    } else {
      currentCard++;
      updateSwipeCard();
    }
  }, 280);
}

function showMatchModal(profile) {
  const modal = document.getElementById('match-modal');
  const avatarThem = document.getElementById('match-avatar-them');
  const nameText = document.getElementById('match-name-text');

  avatarThem.textContent = profile.emoji;
  avatarThem.style.background = profile.bg;
  nameText.textContent = `${profile.name} — ${profile.discipline}`;
  modal.classList.remove('hidden');
}

function dismissMatch() {
  document.getElementById('match-modal').classList.add('hidden');
  currentCard++;
  updateSwipeCard();
}

// Drag handling
function onDragStart(e) {
  const card = document.getElementById('current-card');
  if (!card || currentCard >= PROFILES.length) return;
  isDragging = true;
  dragStartX = (e.touches ? e.touches[0].clientX : e.clientX);
  dragCurrentX = dragStartX;
}

function onDragMove(e) {
  if (!isDragging) return;
  dragCurrentX = (e.touches ? e.touches[0].clientX : e.clientX);
  const card = document.getElementById('current-card');
  if (!card) return;
  const delta = dragCurrentX - dragStartX;
  const rotate = delta * 0.08;
  card.style.transform = `translateX(${delta}px) rotate(${rotate}deg)`;
  card.classList.toggle('drag-left', delta < -30);
  card.classList.toggle('drag-right', delta > 30);
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  const card = document.getElementById('current-card');
  if (!card) return;
  const delta = dragCurrentX - dragStartX;
  card.style.transform = '';
  card.classList.remove('drag-left', 'drag-right');
  if (delta < -60) swipe('left');
  else if (delta > 60) swipe('right');
}

// ── JOB BOARD ─────────────────────────────────────────────────────────────

function renderJobs() {
  const list = document.getElementById('job-list');
  list.innerHTML = JOBS.map(job => `
    <div class="job-card">
      <div class="job-card-header">
        <div>
          <div class="job-company">${job.company}</div>
          <div class="job-title">${job.title}</div>
        </div>
        <div class="job-pay">${job.pay}</div>
      </div>
      <div class="job-skills">
        ${job.skills.map(s => `<span class="job-skill">${s}</span>`).join('')}
      </div>
      <div class="job-footer">
        <div class="job-deadline">⏱ ${job.deadline}</div>
        <button class="btn-pitch">PITCH →</button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.btn-pitch').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'PITCHED ✓';
      btn.style.background = 'var(--green)';
      btn.disabled = true;
    });
  });
}

// ── PROFILE ───────────────────────────────────────────────────────────────

function renderProfile() {
  // Previous collabs
  const prevCollabs = document.getElementById('prev-collabs');
  const collabData = [
    { title: "Neon Dreams", type: "MUSIC VIDEO", emoji: "🎬", bg: "linear-gradient(135deg,#1a0033,#00001a)" },
    { title: "Signal/Noise", type: "SOUND + VISUAL", emoji: "📡", bg: "linear-gradient(135deg,#0d001a,#001a1a)" }
  ];
  prevCollabs.innerHTML = collabData.map(c => `
    <div class="prev-collab-card">
      <div class="prev-collab-thumb" style="background:${c.bg}">${c.emoji}</div>
      <div class="prev-collab-name">${c.title}</div>
      <div class="prev-collab-type">${c.type}</div>
    </div>
  `).join('');

  // Portfolio grid
  const grid = document.getElementById('portfolio-grid');
  const pieces = [
    { emoji: "🌊", bg: "linear-gradient(135deg,#001a1a,#000d1a)" },
    { emoji: "⚡", bg: "linear-gradient(135deg,#1a1a00,#0d0033)" },
    { emoji: "🔊", bg: "linear-gradient(135deg,#1a0033,#00001a)" },
    { emoji: "🌙", bg: "linear-gradient(135deg,#001a0d,#1a0d00)" }
  ];
  grid.innerHTML = pieces.map(p => `
    <div class="portfolio-item" style="background:${p.bg}">
      <span style="position:relative;z-index:1">${p.emoji}</span>
    </div>
  `).join('');
}

// ── SETTINGS ──────────────────────────────────────────────────────────────

function initSettings() {
  const btn = document.getElementById('settings-btn');
  const panel = document.getElementById('settings-panel');
  const overlay = document.getElementById('settings-overlay');
  const closeBtn = document.getElementById('settings-close');

  function openSettings() {
    panel.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
  function closeSettings() {
    panel.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  btn.addEventListener('click', openSettings);
  closeBtn.addEventListener('click', closeSettings);
  overlay.addEventListener('click', closeSettings);

  // Toggle interaction
  document.querySelectorAll('.toggle input').forEach(input => {
    input.addEventListener('change', () => {
      const slider = input.nextElementSibling;
      slider.classList.toggle('on', input.checked);
    });
  });
}
