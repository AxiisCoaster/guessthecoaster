
let current = 0;
let lang = 'en';
let score = 0;

const translations = {
  en: {
    title: "Guess the Roller Coaster",
    next: "Next",
    correct: "Correct!",
    wrong: "Try again",
    langToggle: "FR",
    score: "Score"
  },
  fr: {
    title: "Devine le Grand Huit",
    next: "Suivant",
    correct: "Bravo !",
    wrong: "Réessaye",
    langToggle: "EN",
    score: "Score"
  }
};

const titleEl = document.getElementById("game-title");
const imgEl = document.getElementById("coaster-img");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const langBtn = document.getElementById("lang-toggle");
const scoreEl = document.getElementById("score-display");

function updateTexts() {
  const t = translations[lang];
  titleEl.textContent = t.title;
  nextBtn.textContent = t.next;
  langBtn.textContent = t.langToggle;
  scoreEl.textContent = `${t.score}: ${score}`;
}

function showCoaster() {
  const coaster = coasters[current];
  imgEl.src = coaster.image;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  coaster.options.forEach(option => {
    const btn = document.createElement("button");
    btn.onclick = () => {
  if (option === coaster.answer) {
    feedbackEl.textContent = translations[lang].correct;
    score++;
  } else {
    feedbackEl.textContent = translations[lang].wrong;
    score = Math.max(0, score - 1);
  }
  updateTexts(); // pour mettre à jour le score affiché
};
    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  current = (current + 1) % coasters.length;
  showCoaster();
};

langBtn.onclick = () => {
  lang = lang === "en" ? "fr" : "en";
  updateTexts();
};

updateTexts();
showCoaster();
