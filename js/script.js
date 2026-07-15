// ---- Project placeholder data ----
// Replace with your real projects. Set "img" to a path like "Images/project1.jpg"
// once you have real photos — the card will use it automatically instead of the icon.
const projects = [
  {
    name: 'River House', type: 'Residential', year: '2025', cat: 'residential',
    img: 'Images/Project/Project (5).png',
    rooms: [
      { label: "Front Exterior", img: "Images/Project/Project (5).png", desc: "Write a short description here." },
      { label: "Living Room",    img: "Images/Project/Project (1).png", desc: "Write a short description here." },
      { label: "Dining Room",    img: "Images/Project/Project (25).png", desc: "Write a short description here." },
      { label: "Kitchen",        img: "Images/Project/Project (80).png", desc: "Write a short description here." },
      { label: "Bedroom",        img: "Images/Project/Project (15).jpg", desc: "Write a short description here." }
    ]
  },
  {
    name: 'Boutique Villa', type: 'Hospitality', year: '2024', cat: 'hospitality',
    img: 'Images/Project/Project (3).png',
    rooms: [
      { label: "Front Exterior", img: "Images/Project/Project (3).png", desc: "Write a short description here." },
      { label: "Lobby",          img: "Images/Project/Project (4).png", desc: "Write a short description here." },
      { label: "Guest Room",     img: "Images/Project/Project (81).png", desc: "Write a short description here." },
      { label: "Courtyard",      img: "Images/Project/Project (82).png", desc: "Write a short description here." }
    ]
  },
  {
    name: 'Riverside Office', type: 'Commercial', year: '2024', cat: 'commercial',
    img: 'Images/Project/Project (13).png',
    rooms: [
      { label: "Front Exterior", img: "Images/Project/Project (13).png", desc: "Write a short description here." },
      { label: "Open Office",    img: "Images/Project/Project (83).jpg", desc: "Write a short description here." },
      { label: "Meeting Room",   img: "Images/Project/Project (83).png", desc: "Write a short description here." }
    ]
  },
  {
    name: 'Courtyard Home', type: 'Residential', year: '2023', cat: 'residential',
    img: 'Images/Project/Project (20).png',
    rooms: [
      { label: "Front Exterior", img: "Images/Project/Project (20).png", desc: "Write a short description here." },
      { label: "Living Room",    img: "Images/Project/Project (69).png", desc: "Write a short description here." },
      { label: "Courtyard",      img: "Images/Project/Project (74).png", desc: "Write a short description here." },
      { label: "Bedroom",        img: "Images/Project/Project (31).png", desc: "Write a short description here." }
    ]
  },
  {
    name: 'Lakeside Guesthouse', type: 'Hospitality', year: '2023', cat: 'hospitality',
    img: 'Images/Project/Project (79).png',
    rooms: [
      { label: "Front Exterior", img: "Images/Project/Project (79).png", desc: "Write a short description here." },
      { label: "Guest Room",     img: "Images/Project/Project (31).png", desc: "Write a short description here." },
      { label: "Common Area",    img: "Images/Project/Project (32).png", desc: "Write a short description here." }
    ]
  },
  {
    name: 'Retail Pavilion', type: 'Commercial', year: '2022', cat: 'commercial',
    img: 'Images/Project/Project (77).png',
    rooms: [
      { label: "Front Exterior", img: "Images/Project/Project (77).png", desc: "Write a short description here." },
      { label: "Interior",       img: "Images/Project/Project (82).png", desc: "Write a short description here." },
      { label: "Display Area",   img: "Images/Project/Project (85).png", desc: "Write a short description here." }
    ]
  }
];

function planIcon(seed){
  // simple varied line-drawing icon per card, deterministic by seed
  const variants = [
    `<rect x="8" y="8" width="84" height="64" /><line x1="50" y1="8" x2="50" y2="72" /><line x1="8" y1="40" x2="50" y2="40" />`,
    `<rect x="8" y="8" width="84" height="64" /><rect x="8" y="8" width="40" height="30" /><line x1="48" y1="38" x2="92" y2="38" />`,
    `<rect x="8" y="8" width="84" height="64" /><line x1="30" y1="8" x2="30" y2="72" /><line x1="70" y1="8" x2="70" y2="72" />`,
  ];
  const v = variants[seed % variants.length];
  return `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" stroke="var(--ink)" stroke-width="1.1" fill="none">${v}</svg>`;
}

function projectCard(p, i){
  const thumb = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
    : planIcon(i);
  return `
    <div class="project-card" data-cat="${p.cat}" onclick="openLightbox(${i})" style="cursor:pointer">

      <div class="project-thumb">${thumb}</div>
      <div class="project-info">
        <div class="cap">${p.type} — ${p.year}</div>
        <h4>${p.name}</h4>
        <div class="meta">Siem Reap, Cambodia</div>
      </div>
    </div>`;
}

const projectGrid = document.getElementById('projectGrid');
if (projectGrid) {
  projectGrid.innerHTML = projects.map(projectCard).join('');
}
const homePreview = document.getElementById('homeProjectPreview');
if (homePreview) {
  homePreview.innerHTML = projects.slice(0, 3).map(projectCard).join('');
}

// ---- Filtering (projects page only) ----
const filterRow = document.getElementById('filterRow');
if (filterRow) {
  filterRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#projectGrid .project-card').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
    });
  });
}

// ---- Mobile menu ----
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primary-nav');
if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
}



const langTrigger = document.getElementById('langTrigger');
const langDropdown = document.getElementById('langDropdown');

if (langTrigger && langDropdown) {
  langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      const flagSrc = btn.querySelector('.flag').src;

      document.querySelectorAll('.lang-option .check').forEach(c => c.remove());
      document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
      btn.classList.add('active');
      btn.insertAdjacentHTML('beforeend', '<span class="check">✓</span>');
      langDropdown.classList.remove('open');

      document.getElementById('currentFlag').src = flagSrc;
      document.getElementById('currentFlag').style.display = 'block';
      document.querySelector('.lang-trigger svg').style.display = 'none';

      if (lang === 'en') {
        document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        window.location.reload();
      } else {
        document.cookie = `googtrans=/en/${lang}; path=/`;
        document.cookie = `googtrans=/en/${lang}; path=/; domain=${window.location.hostname}`;
        window.location.reload();
      }
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    const currentLang = match ? match[1] : 'en';
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.remove('active');
      opt.querySelector('.check')?.remove();
      if (opt.dataset.lang === currentLang) {
        opt.classList.add('active');
        opt.insertAdjacentHTML('beforeend', '<span class="check">✓</span>');
        const flagSrc = opt.querySelector('.flag').src;
        document.getElementById('currentFlag').src = flagSrc;
        document.getElementById('currentFlag').style.display = 'block';
        document.querySelector('.lang-trigger svg').style.display = 'none';
      }
    });
  });
}

function suppressGoogleBar() {
  document.body.style.top = '0px';
  document.body.style.position = 'static';
  document.querySelectorAll('body > iframe').forEach(f => {
    f.style.setProperty('display', 'none', 'important');
  });
}
const bannerObserver = new MutationObserver(suppressGoogleBar);
bannerObserver.observe(document.body, { childList: true });
suppressGoogleBar();
setInterval(suppressGoogleBar, 300);


// ---- Project Lightbox Logic ----
let currentProject = 0;
let currentRoom = 0;
let lightboxOverlay;

function openLightbox(projectIndex) {
  currentProject = projectIndex;
  currentRoom = 0;
  renderLightbox();
  lightboxOverlay.classList.add("active");
}
function closeLightbox() {
  lightboxOverlay.classList.remove("active");
}
function renderLightbox() {
  const p = projects[currentProject];
  const room = p.rooms[currentRoom];

  document.getElementById("lightboxImg").src = room.img;
  document.getElementById("lightboxImg").alt = `${p.name} — ${room.label}`;
  document.getElementById("roomLabel").textContent = room.label;
  document.getElementById("lightboxTag").textContent = `${p.type} — ${p.year}`;
  document.getElementById("lightboxTitle").textContent = p.name;
  document.getElementById("lightboxLoc").textContent = "Siem Reap, Cambodia";
  document.getElementById("lightboxDesc").textContent = room.desc;

  const specsEl = document.getElementById("lightboxSpecs");
  specsEl.innerHTML = `
    <div><div class="spec-label">Type</div><div class="spec-value">${p.type}</div></div>
    <div><div class="spec-label">Year</div><div class="spec-value">${p.year}</div></div>
  `;

  const thumbRow = document.getElementById("thumbRow");
  thumbRow.innerHTML = "";
  p.rooms.forEach((r, i) => {
    const t = document.createElement("div");
    t.className = "thumb" + (i === currentRoom ? " active" : "");
    t.innerHTML = `<img src="${r.img}" alt="${r.label}">`;
    t.addEventListener("click", () => { currentRoom = i; renderLightbox(); });
    thumbRow.appendChild(t);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  lightboxOverlay = document.getElementById("lightbox");

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    const p = projects[currentProject];
    currentRoom = (currentRoom - 1 + p.rooms.length) % p.rooms.length;
    renderLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    const p = projects[currentProject];
    currentRoom = (currentRoom + 1) % p.rooms.length;
    renderLightbox();
  });
  lightboxOverlay.addEventListener("click", (e) => { if (e.target === lightboxOverlay) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightboxOverlay.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
  });
});

// ---- Contact form — real submission via Web3Forms ----
const contactForm = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');

if (contactForm && sendBtn) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email) return;

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '44e40410-d256-4f5d-974d-489ffa3c52f8',
          subject: `New project inquiry from ${name}`,
          from_name: name,
          name: name,
          email: email,
          phone: phone,
          message: message
        })
      });
      const result = await response.json();

      if (result.success) {
        sendBtn.textContent = 'Message Sent ✓';
        contactForm.reset();
      } else {
        sendBtn.textContent = 'Something went wrong';
      }
    } catch (err) {
      sendBtn.textContent = 'Something went wrong';
    }

    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Message';
    }, 3000);
  });
}