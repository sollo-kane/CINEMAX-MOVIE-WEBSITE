/* =====================
   CINEMAX — app.js
   ===================== */

// ---- DATA ----

const heroSlides = [
  {
    title: "DUNE:<br>PART TWO",
    tag: "Featured Film",
    desc: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    rating: "★ 8.5",
    duration: "2h 46m",
    genre: "Sci-Fi / Adventure",
    year: "2024",
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop",
    color: "#e8c76a"
  },
  {
    title: "OPPENHEIMER",
    tag: "Award Winner",
    desc: "The story of J. Robert Oppenheimer, the theoretical physicist who helped develop the first nuclear weapons during World War II.",
    rating: "★ 8.9",
    duration: "3h 0m",
    genre: "Drama / History",
    year: "2023",
    bg: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=1600&q=80&auto=format&fit=crop",
    color: "#ff6b35"
  },
  {
    title: "KILLERS OF THE<br>FLOWER MOON",
    tag: "Critics Choice",
    desc: "Members of the Osage Nation are killed under mysterious circumstances in 1920s Oklahoma, igniting a major FBI investigation.",
    rating: "★ 7.7",
    duration: "3h 26m",
    genre: "Crime / Drama",
    year: "2023",
    bg: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80&auto=format&fit=crop",
    color: "#c9394a"
  },
  {
    title: "POOR THINGS",
    tag: "Golden Globe Winner",
    desc: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist.",
    rating: "★ 8.0",
    duration: "2h 21m",
    genre: "Fantasy / Drama",
    year: "2023",
    bg: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=1600&q=80&auto=format&fit=crop",
    color: "#a8d8ea"
  }
];

const trendingMovies = [
  { id: 1, title: "Inside Out 2", year: "2024", rating: "7.8", genre: "Animation", badge: "HOT",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=70&auto=format&fit=crop",
    desc: "Riley is now a teenager and her emotions are experiencing major changes as a new Emotion named Anxiety shows up.",
    cast: ["Amy Poehler", "Maya Hawke", "Kensington Tallman", "Liza Lapira"] },
  { id: 2, title: "Alien: Romulus", year: "2024", rating: "7.4", genre: "Horror/Sci-Fi", badge: "NEW",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=70&auto=format&fit=crop",
    desc: "Young colonizers face the most terrifying life form in the universe while scavenging the depths of an abandoned space station.",
    cast: ["Cailee Spaeny", "David Jonsson", "Archie Renaux", "Isabela Merced"] },
  { id: 3, title: "Deadpool & Wolverine", year: "2024", rating: "7.8", genre: "Action/Comedy",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=70&auto=format&fit=crop",
    desc: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant Wolverine.",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Jennifer Garner"] },
  { id: 4, title: "Longlegs", year: "2024", rating: "5.8", genre: "Thriller",
    poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=70&auto=format&fit=crop",
    desc: "FBI Agent Lee Harker is assigned to an unsolved murder case and discovers a connection to a notorious serial killer.",
    cast: ["Maika Monroe", "Nicolas Cage", "Blair Underwood", "Alicia Witt"] },
  { id: 5, title: "Twisters", year: "2024", rating: "7.2", genre: "Action",
    poster: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=70&auto=format&fit=crop",
    desc: "Kate Cooper, a former storm chaser haunted by a devastating encounter with a tornado, is lured back to the open plains.",
    cast: ["Daisy Edgar-Jones", "Glen Powell", "Anthony Ramos", "Brandon Perea"] },
  { id: 6, title: "The Substance", year: "2024", rating: "7.3", genre: "Horror/Drama", badge: "R",
    poster: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=70&auto=format&fit=crop",
    desc: "A celebrity's decline leads her to use a black market drug: a cell-replicating substance that becomes her exact double.",
    cast: ["Demi Moore", "Margaret Qualley", "Dennis Quaid", "Hugo Diego Garcia"] },
  { id: 7, title: "A Quiet Place: Day One", year: "2024", rating: "6.9", genre: "Horror/Sci-Fi",
    poster: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=70&auto=format&fit=crop",
    desc: "Experience the day the world went quiet, as New York City comes under attack from the deadly creatures that hunt by sound.",
    cast: ["Lupita Nyong'o", "Joseph Quinn", "Alex Wolff", "Djimon Hounsou"] },
  { id: 8, title: "Kingdom of the Planet of the Apes", year: "2024", rating: "6.9", genre: "Sci-Fi",
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=70&auto=format&fit=crop",
    desc: "Many generations after Caesar's reign, apes are the dominant species and a young ape goes on a journey to discover his true legacy.",
    cast: ["Owen Teague", "Freya Allan", "Kevin Durand", "Peter Macon"] },
];

const genres = [
  { name: "Action",    icon: "💥", cls: "genre-action" },
  { name: "Comedy",   icon: "😂", cls: "genre-comedy" },
  { name: "Drama",    icon: "🎭", cls: "genre-drama" },
  { name: "Horror",   icon: "👻", cls: "genre-horror" },
  { name: "Romance",  icon: "💕", cls: "genre-romance" },
  { name: "Sci-Fi",   icon: "🚀", cls: "genre-scifi" },
  { name: "Thriller", icon: "🔪", cls: "genre-thriller" },
  { name: "Animation",icon: "🎨", cls: "genre-animation" },
];

const upcomingMovies = [
  { title: "Gladiator II", genre: "Action/Drama", year: "2025", duration: "2h 30m", month: "MAR", day: "14",
    desc: "Lucius, who once watched Maximus fight in the Colosseum as a young man, is now forced to enter the world of gladiators.",
    cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal"],
    poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=200&q=60&auto=format&fit=crop" },
  { title: "Wicked: For Good", genre: "Musical/Fantasy", year: "2025", duration: "2h 45m", month: "NOV", day: "21",
    desc: "The second part of the Wicked story, continuing the untold tale of the Wicked Witch of the West and Glinda the Good.",
    cast: ["Cynthia Erivo", "Ariana Grande", "Jonathan Bailey"],
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=60&auto=format&fit=crop" },
  { title: "Mission: Impossible – The Final Reckoning", genre: "Action/Thriller", year: "2025", duration: "3h 0m", month: "MAY", day: "23",
    desc: "Ethan Hunt and his IMF team race against time to track down a dangerous new weapon before it falls into the wrong hands.",
    cast: ["Tom Cruise", "Hayley Atwell", "Simon Pegg"],
    poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=200&q=60&auto=format&fit=crop" },
  { title: "Avatar: Fire and Ash", genre: "Sci-Fi/Fantasy", year: "2025", duration: "3h 10m", month: "DEC", day: "19",
    desc: "Jake Sully and Neytiri face new threats from Pandora's volcanic regions, home to a new clan of Na'vi with ancient powers.",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    poster: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=200&q=60&auto=format&fit=crop" },
];

const topRated = [
  { title: "The Shawshank Redemption", year: "1994", rating: "9.3", genre: "Drama",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=60&auto=format&fit=crop" },
  { title: "The Godfather", year: "1972", rating: "9.2", genre: "Crime",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&q=60&auto=format&fit=crop" },
  { title: "The Dark Knight", year: "2008", rating: "9.0", genre: "Action",
    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=300&q=60&auto=format&fit=crop" },
  { title: "Schindler's List", year: "1993", rating: "9.0", genre: "Drama",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=60&auto=format&fit=crop" },
  { title: "12 Angry Men", year: "1957", rating: "9.0", genre: "Drama",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=60&auto=format&fit=crop" },
  { title: "Pulp Fiction", year: "1994", rating: "8.9", genre: "Crime",
    poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&q=60&auto=format&fit=crop" },
  { title: "Forrest Gump", year: "1994", rating: "8.8", genre: "Drama",
    poster: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=60&auto=format&fit=crop" },
  { title: "Inception", year: "2010", rating: "8.8", genre: "Sci-Fi",
    poster: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?w=300&q=60&auto=format&fit=crop" },
];


// ---- HERO SLIDER ----
let currentSlide = 0;
let slideInterval;

function buildHeroDots() {
  const dots = document.getElementById('heroDots');
  dots.innerHTML = '';
  heroSlides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'hero-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToSlide(i));
    dots.appendChild(d);
  });
}

function goToSlide(n) {
  currentSlide = (n + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[currentSlide];

  document.getElementById('heroBg').style.backgroundImage = `url('${slide.bg}')`;
  document.getElementById('heroTag').textContent = slide.tag;
  document.getElementById('heroTitle').innerHTML = slide.title;
  document.getElementById('heroDesc').textContent = slide.desc;
  document.getElementById('heroMeta').innerHTML = `
    <span class="hero-rating">${slide.rating}</span>
    <span>${slide.duration}</span>
    <span>${slide.genre}</span>
    <span>${slide.year}</span>
  `;

  document.querySelectorAll('.hero-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });

  // Update hero content animation
  const content = document.getElementById('heroContent');
  content.style.animation = 'none';
  content.offsetHeight; // reflow
  content.style.animation = 'heroIn 0.7s ease both';
}

function startSlideTimer() {
  slideInterval = setInterval(() => goToSlide(currentSlide + 1), 6000);
}

function initHero() {
  buildHeroDots();
  goToSlide(0);
  startSlideTimer();

  document.getElementById('heroNext').addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
    startSlideTimer();
  });
  document.getElementById('heroPrev').addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(currentSlide - 1);
    startSlideTimer();
  });
}


// ---- RENDER CARDS ----
function createCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    ${movie.badge ? `<span class="card-badge">${movie.badge}</span>` : ''}
    <div style="overflow:hidden">
      <img class="card-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=70'"/>
    </div>
    <div class="card-overlay">
      <div>
        <div class="card-play">▶</div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-title">${movie.title}</div>
      <div class="card-meta">
        <span>${movie.year}</span>
        <span class="card-rating">★ ${movie.rating}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openModal(movie));
  return card;
}

function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  trendingMovies.forEach(m => grid.appendChild(createCard(m)));
}

function renderGenres() {
  const grid = document.getElementById('genresGrid');
  genres.forEach(g => {
    const card = document.createElement('div');
    card.className = `genre-card ${g.cls}`;
    card.innerHTML = `<span class="genre-icon">${g.icon}</span><span class="genre-name">${g.name}</span>`;
    card.addEventListener('click', () => {
      alert(`Browsing "${g.name}" movies — coming soon!`);
    });
    grid.appendChild(card);
  });
}

function renderUpcoming() {
  const list = document.getElementById('upcomingList');
  upcomingMovies.forEach(m => {
    const item = document.createElement('div');
    item.className = 'upcoming-item';
    item.innerHTML = `
      <div class="upcoming-poster">
        <img src="${m.poster}" alt="${m.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&q=60'"/>
      </div>
      <div class="upcoming-info">
        <div class="upcoming-title">${m.title}</div>
        <div class="upcoming-meta">
          <span>${m.genre}</span>
          <span>${m.duration}</span>
          <span>${m.year}</span>
        </div>
        <div class="upcoming-desc">${m.desc}</div>
      </div>
      <div class="upcoming-date">
        <span class="month">${m.month}</span>
        <span class="day">${m.day}</span>
      </div>
    `;
    item.addEventListener('click', () => openModal({
      title: m.title, genre: m.genre, year: m.year,
      desc: m.desc, rating: "TBD", poster: m.poster, cast: m.cast
    }));
    list.appendChild(item);
  });
}

function renderTopRated() {
  const row = document.getElementById('topRatedRow');
  topRated.forEach(m => row.appendChild(createCard({ ...m, desc: `A timeless ${m.genre.toLowerCase()} classic.`, cast: [] })));
}


// ---- MODAL ----
function openModal(movie) {
  document.getElementById('modalTag').textContent = movie.genre || 'Movie';
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalDesc').textContent = movie.desc || '';
  document.getElementById('modalMeta').innerHTML = `
    <span>★ ${movie.rating}</span>
    <span>${movie.year}</span>
    ${movie.duration ? `<span>${movie.duration}</span>` : ''}
    <span>${movie.genre || ''}</span>
  `;
  document.getElementById('modalPoster').innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover"
      onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=70'"/>
  `;
  const castArr = movie.cast || [];
  document.getElementById('modalCast').innerHTML = castArr.length ? `
    <h4>Cast</h4>
    <div class="cast-list">
      ${castArr.map(c => `<span class="cast-tag">${c}</span>`).join('')}
    </div>
  ` : '';

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}


// ---- SEARCH ----
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');

  document.getElementById('searchToggle').addEventListener('click', () => {
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 300);
  });

  document.getElementById('searchClose').addEventListener('click', () => {
    overlay.classList.remove('open');
    input.value = '';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      overlay.classList.remove('open');
      input.value = '';
    }
  });
}


// ---- NAVBAR ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}


// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  renderTrending();
  renderGenres();
  renderUpcoming();
  renderTopRated();
  initModal();
  initSearch();
  initNavbar();
});
