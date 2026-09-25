function showMessage() {
  document.getElementById("message").innerText =
    "🎉 Great! JavaScript ka button kaam kar raha hai.";
}

// Quiz Score System
let score = 0;
let answered = 0;
const totalQuestions = 4;

function checkAnswer(button, correct) {
  const question = button.closest(".quiz-question");

  // Ek question ka answer dobara select na ho
  if (!question || question.dataset.done === "true") {
    return;
  }

  question.dataset.done = "true";
  answered++;

  const buttons = question.querySelectorAll("button");

  // Sabhi buttons disable karo
  buttons.forEach(function (btn) {
    btn.disabled = true;
  });

  if (correct) {
    score++;
    button.innerText = "✅ " + button.innerText;
    question.style.border = "2px solid green";
  } else {
    button.innerText = "❌ " + button.innerText;
    question.style.border = "2px solid red";
  }
}

// Score show karna
function showScore() {
  const scoreBox = document.getElementById("score");

  if (answered < totalQuestions) {
    scoreBox.innerText =
      "⚠️ Pehle sabhi 4 questions ka answer do.";
    return;
  }

  scoreBox.innerText =
    "🎉 Your Score: " + score + " / " + totalQuestions;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const button = document.querySelector(".dark-btn");

  if (document.body.classList.contains("dark-mode")) {
    button.innerText = "☀️ Light Mode";
  } else {
    button.innerText = "🌙 Dark Mode";
  }
}
