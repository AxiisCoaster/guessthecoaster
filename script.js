
let current = 0;

function loadCoaster() {
  const img = document.getElementById("coaster-img");
  const feedback = document.getElementById("feedback");
  const input = document.getElementById("guess-input");
  input.value = "";
  feedback.textContent = "";
  img.src = coasters[current].image;
}

function checkGuess() {
  const input = document.getElementById("guess-input").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const accepted = coasters[current].acceptedAnswers.map(a => a.toLowerCase());

  if (accepted.includes(input)) {
    feedback.textContent = "✅ Correct! Great job!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Try again!";
    feedback.style.color = "red";
  }
}

window.onload = () => {
  current = Math.floor(Math.random() * coasters.length);
  loadCoaster();
};
