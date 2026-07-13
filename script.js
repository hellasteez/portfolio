// ── Case study data ──────────────────────────────────────────────
const caseStudies = [
  {
    title: 'Крыша',
    logo: 'logos/Крыша.svg',
    description:
      'Популярное панорамное заведение Якутска с живой музыкой и уникальным концептом. В рамках проекта велась разработка банкетного меню, анонсов для соцсетей и элементов печатной айдентики.',
    images: [
      'images/Крыша/1.png',
      'images/Крыша/2.png',
      'images/Крыша/3.png',
      'images/Крыша/4.png',
      'images/Крыша/5.png',
      'images/Крыша/6.png',
      'images/Крыша/7.png',
      'images/Крыша/8.png',
      'images/Крыша/9.png',
    ],
  },
  {
    title: 'Китай город',
    logo: 'logos/KG.svg',
    description:
      'Трендовое паназиатское бистро и авторский коктейльный бар в историческом центре Якутска. Работа включала создание стильных меню, рекламной полиграфии и контента для соцсетей.',
    images: [
      'images/KG/1.png',
      'images/KG/2.png',
      'images/KG/3.png',
      'images/KG/4.png',
      'images/KG/5.png',
      'images/KG/6.png',
      'images/KG/7.png',
      'images/KG/8.png',
      'images/KG/9.png',
    ],
  },
  {
    title: 'Icon',
    logo: 'logos/icon.svg',
    description:
      'Популярный ночной клуб и масштабная культурно-досуговая площадка города. Разрабатывались яркие афиши, печатные материалы и промо-макеты для анонсов вечеринок и крупных ивентов.',
    images: [
      'images/Icon/1.png',
      'images/Icon/2.png',
      'images/Icon/3.png',
      'images/Icon/4.png',
      'images/Icon/5.png',
      'images/Icon/6.png',
      'images/Icon/7.png',
      'images/Icon/8.png',
      'images/Icon/9.png',
    ],
  },
  {
    title: 'Лимон',
    logo: 'logos/лимон.svg',
    description:
      'Масштабная и популярная городская сеть из девяти филиалов, занимающаяся техникой и электроникой. Для сети создавались рекламные баннеры, листовки для печати и промо-макеты для акций.',
    images: [
      'images/lemon/1.png',
      'images/lemon/2.png',
      'images/lemon/3.png',
      'images/lemon/4.png',
      'images/lemon/5.png',
      'images/lemon/6.png',
      'images/lemon/7.png',
      'images/lemon/8.png',
      'images/lemon/9.png',
    ],
  },
  {
    title: 'Hills',
    logo: 'logos/Hills.svg',
    description:
      'Премиальное городское пространство, совмещающее ресторан, караоке и концертную площадку. Для заведения регулярно обновлялись меню, разрабатывались макеты для квизов, вечеринок и SMM.',
    images: [
      'images/hills/1.png',
      'images/hills/2.png',
      'images/hills/3.png',
      'images/hills/4.png',
      'images/hills/5.png',
      'images/hills/6.png',
      'images/hills/7.png',
      'images/hills/8.png',
      'images/hills/9.png',
    ],
  },
  {
    title: 'Kitchen',
    logo: 'logos/Kitchen2.svg',
    description:
      'Концептуальный ресторан индустриального стиля с открытой кухней и семитонной дровяной печью. Создавались стильные графические материалы для продвижения службы доставки, меню и социальных сетей.',
    images: [
      'images/kitchen/1.png',
      'images/kitchen/2.png',
      'images/kitchen/3.png',
      'images/kitchen/4.png',
      'images/kitchen/5.png',
      'images/kitchen/6.png',
      'images/kitchen/7.png',
      'images/kitchen/8.png',
      'images/kitchen/9.png',
    ],
  },
  {
    title: 'MG Diamond',
    logo: 'logos/mgd.svg',
    description:
      'Прогрессивный якутский ювелирный бренд, сочетающий современные тренды и национальные традиции. Разрабатывались изящные рекламные материалы для полиграфии и эстетичный контент для соцсетей.',
    images: [
      'images/MG Diamond/1.png',
      'images/MG Diamond/2.png',
      'images/MG Diamond/3.png',
      'images/MG Diamond/4.png',
      'images/MG Diamond/5.png',
      'images/MG Diamond/6.png',
      'images/MG Diamond/7.png',
      'images/MG Diamond/8.png',
      'images/MG Diamond/9.png',
    ],
  },
  {
    title: 'Travelers Coffee',
    logo: 'logos/trvlrs.svg',
    description:
      'Известная международная сеть кофеен класса Specialty в Якутске. Для четырех крупных филиалов бренда создавались полиграфические макеты и динамичный визуальный контент для социальных сетей.',
    images: [
      'images/Travelers/1.png',
      'images/Travelers/2.png',
      'images/Travelers/3.png',
      'images/Travelers/4.png',
      'images/Travelers/5.png',
      'images/Travelers/6.png',
      'images/Travelers/7.png',
      'images/Travelers/8.png',
      'images/Travelers/9.png',
    ],
  },
  {
    title: 'Рыдзинский',
    logo: 'logos/rydz.svg',
    description:
      'Аутентичный бар в Якутске, специализирующийся на уникальных натуральных настойках ручной работы. Проводилась работа над созданием акцентных промо-макетов и digital-контента.',
    images: [
      'images/Рыдзинский/1.png',
      'images/Рыдзинский/2.png',
      'images/Рыдзинский/3.png',
      'images/Рыдзинский/4.png',
      'images/Рыдзинский/5.png',
      'images/Рыдзинский/6.png',
      'images/Рыдзинский/7.png',
      'images/Рыдзинский/8.png',
      'images/Рыдзинский/9.png',
    ],
  },
  {
    title: 'Приоритет',
    logo: 'logos/prioritet.svg',
    description:
      'Крупное агентство недвижимости Якутии, входящее в ТОП-30 лучших риэлторских компаний России. Проект включал регулярную разработку строгой корпоративной полиграфии и SMM-шаблонов.',
    images: [
      'images/Приоритет/1.png',
      'images/Приоритет/2.png',
      'images/Приоритет/3.png',
      'images/Приоритет/4.png',
      'images/Приоритет/5.png',
      'images/Приоритет/6.png',
      'images/Приоритет/7.png',
      'images/Приоритет/8.png',
      'images/Приоритет/9.png',
    ],
  },
  {
    title: 'Арчын',
    logo: 'logos/archyn.svg',
    description:
      'Строительное предприятие по проектированию и строительству деревянных и каркасных объектов. Для бренда создавались рекламные баннеры, листовки для печати и стильные шаблоны постов.',
    images: [
      'images/Арчын/1.png',
      'images/Арчын/2.png',
      'images/Арчын/3.png',
      'images/Арчын/4.png',
      'images/Арчын/5.png',
      'images/Арчын/6.png',
      'images/Арчын/7.png',
      'images/Арчын/8.png',
      'images/Арчын/9.png',
    ],
  },
  {
    title: 'Wok Cafe',
    logo: 'logos/wokcafe.svg',
    description:
      'Одно из первых и самых известных паназиатских кафе Якутска. Разрабатывались макеты для фирменной упаковки (коробочек вок), рекламные баннеры для сайта и печатные меню.',
    images: [
      'images/Wok Cafe/1.png',
      'images/Wok Cafe/2.png',
      'images/Wok Cafe/3.png',
      'images/Wok Cafe/4.png',
      'images/Wok Cafe/5.png',
      'images/Wok Cafe/6.png',
      'images/Wok Cafe/7.png',
      'images/Wok Cafe/8.png',
      'images/Wok Cafe/9.png',
    ],
  },
];

// ── State ────────────────────────────────────────────────────────
let activeIndex = 0;

// ── DOM refs ─────────────────────────────────────────────────────
const desktopList   = document.getElementById('desktopCaseList');
const mobileList    = document.getElementById('mobileNavList');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const caseTitle     = document.getElementById('caseTitle');
const caseLogo      = document.getElementById('caseLogo');
const caseDesc      = document.getElementById('caseDescription');
const imageGrid     = document.getElementById('imageGrid');
const hamburger     = document.getElementById('hamburgerBtn');
const mobileNav     = document.getElementById('mobileNav');
const viewWork      = document.getElementById('viewWork');
const viewAbout     = document.getElementById('viewAbout');
const viewContact   = document.getElementById('viewContact');
const contentArea   = document.getElementById('contentArea');

let currentView = 'work';
const views = { work: viewWork, about: viewAbout, contact: viewContact };

// ── Build case lists for sidebar + mobile nav ───────────────────
function buildCaseLists() {
  caseStudies.forEach(function (cs, i) {
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.textContent = cs.title;
    btn.dataset.index = i;
    btn.addEventListener('click', function () {
      setView('work');
      setActive(i);
      closeMobileNav();
    });
    li.appendChild(btn);
    desktopList.appendChild(li);

    // Clone for mobile nav
    var liM = li.cloneNode(true);
    liM.querySelector('button').addEventListener('click', function () {
      setView('work');
      setActive(i);
      closeMobileNav();
    });
    mobileList.appendChild(liM);
  });
}

// ── Render a case study into the content area ───────────────────
function renderCase(index) {
  var cs = caseStudies[index];

  caseTitle.textContent = cs.title;
  caseLogo.innerHTML = '';
  var logoImg = document.createElement('img');
  logoImg.src = cs.logo;
  logoImg.alt = cs.title + ' logo';
  caseLogo.appendChild(logoImg);

  caseDesc.textContent = cs.description;

  imageGrid.innerHTML = '';
  cs.images.forEach(function (src, i) {
    var div = document.createElement('div');
    div.className = 'grid-item';

    var img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    img.alt = cs.title + ' — work sample';
    div.appendChild(img);

    // Apply the image's natural aspect ratio to the grid item
    img.addEventListener('load', function () {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        div.style.aspectRatio = img.naturalWidth + ' / ' + img.naturalHeight;
      }
    });
    // If already cached, the load event may have fired — apply now
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      div.style.aspectRatio = img.naturalWidth + ' / ' + img.naturalHeight;
    }

    imageGrid.appendChild(div);

    // Staggered fade-in with upward slide
    div.style.animationDelay = (i * 0.06) + 's';
    requestAnimationFrame(function () { div.classList.add('animate-in'); });

    div.addEventListener('click', function () { openLightbox(src, img.alt); });
  });
}

// ── Lightbox ────────────────────────────────────────────────────
var lightbox      = document.getElementById('lightbox');
var lightboxImg   = lightbox.querySelector('.lightbox-img');
var lightboxClose = lightbox.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
});

// ── Update active states (lists turn gray) ──────────────────────
function updateActiveStates() {
  [].concat(
    Array.prototype.slice.call(desktopList.children),
    Array.prototype.slice.call(mobileList.children)
  ).forEach(function (li, i) {
    var btn = li.querySelector('button');
    if (i === activeIndex) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

// ── Set active case ──────────────────────────────────────────────
function setActive(index) {
  activeIndex = ((index % caseStudies.length) + caseStudies.length) % caseStudies.length;
  renderCase(activeIndex);
  updateActiveStates();
}

// ── View switching ───────────────────────────────────────────────
function setView(view) {
  currentView = view;
  Object.keys(views).forEach(function (key) {
    views[key].hidden = key !== view;
  });

  // Highlight About/Contact links in sidebar & mobile nav
  document.querySelectorAll('[data-view="about"], [data-view="contact"]').forEach(function (el) {
    el.classList.toggle('active', el.dataset.view === view);
  });

  if (view === 'work') {
    renderCase(activeIndex);
    updateActiveStates();
  } else {
    // Clear case list active states when on About/Contact
    [].concat(
      Array.prototype.slice.call(desktopList.children),
      Array.prototype.slice.call(mobileList.children)
    ).forEach(function (li) {
      li.querySelector('button').classList.remove('active');
    });
  }
}

// ── Mobile nav open/close ────────────────────────────────────────
function openMobileNav() {
  mobileNav.classList.add('visible');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileNav.setAttribute('aria-hidden', 'false');
}

function closeMobileNav() {
  mobileNav.classList.remove('visible');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
}

// ── Event listeners ──────────────────────────────────────────────
prevBtn.addEventListener('click', function () {
  if (currentView !== 'work') { setView('work'); return; }
  setActive(activeIndex - 1);
});
nextBtn.addEventListener('click', function () {
  if (currentView !== 'work') { setView('work'); return; }
  setActive(activeIndex + 1);
});
hamburger.addEventListener('click', function () {
  if (mobileNav.classList.contains('visible')) closeMobileNav();
  else openMobileNav();
});

// View switching links
document.querySelectorAll('[data-view]').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    setView(el.dataset.view);
    closeMobileNav();
  });
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  if (currentView === 'work') {
    if (e.key === 'ArrowLeft')  setActive(activeIndex - 1);
    if (e.key === 'ArrowRight') setActive(activeIndex + 1);
  }
  if (e.key === 'Escape') closeMobileNav();
});

// Close mobile nav when clicking outside
document.addEventListener('click', function (e) {
  if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
    closeMobileNav();
  }
});



// ── Init ─────────────────────────────────────────────────────────
buildCaseLists();
setActive(0);
setView('work');
