
const answer = "Expedition Everest"; // Replace with the actual answer
function checkGuess() {
  const input = document.getElementById("guess-input").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  if (input === answer.toLowerCase()) {
    feedback.textContent = "✅ Correct! Great job!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Try again!";
    feedback.style.color = "red";
  }
}
