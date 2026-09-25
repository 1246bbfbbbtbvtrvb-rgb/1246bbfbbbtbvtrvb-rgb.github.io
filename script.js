function showMessage() {
  document.getElementById("message").innerText =
    "🎉 Great! JavaScript ka button kaam kar raha hai.";
}


// Practice Quiz + Score System

document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(".question");

  const quizData = [
    {
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyper Tool Markup Language"
      ],
      answer: 0
    },
    {
      options: [
        "Website ka design banane ke liye",
        "Database banane ke liye",
        "Internet chalane ke liye"
      ],
      answer: 0
    },
    {
      options: [
        "Website ko interactive banata hai",
        "Sirf image banata hai",
        "Sirf text likhta hai"
      ],
      answer: 0
    },
    {
      options: [
        "display: flex",
        "text: bold",
        "color: red"
      ],
      answer: 0
    }
  ];

  let score = 0;
  let answered = 0;

  // Score display
  const scoreBox = document.createElement("div");

  scoreBox.style.background = "#fff3bd";
  scoreBox.style.padding = "20px";
  scoreBox.style.margin = "20px 0";
  scoreBox.style.borderRadius = "10px";
  scoreBox.style.fontWeight = "bold";
  scoreBox.innerText = "🏆 Score: 0 / " + quizData.length;

  const practiceSection = document.getElementById("practice");

  practiceSection.insertBefore(
    scoreBox,
    practiceSection.children[2]
  );


  questions.forEach(function (question, index) {

    if (!quizData[index]) return;

    const optionsBox = document.createElement("div");

    let selected = false;

    quizData[index].options.forEach(function (option, optionIndex) {

      const button = document.createElement("button");

      button.innerText = option;
      button.style.margin = "5px";

      button.addEventListener("click", function () {

        if (selected) return;

        selected = true;
        answered++;

        const allButtons = optionsBox.querySelectorAll("button");

        allButtons.forEach(function (btn) {
          btn.disabled = true;
        });

        if (optionIndex === quizData[index].answer) {

          score++;

          button.innerText = "✅ " + option;
          question.style.border = "2px solid green";

        } else {

          button.innerText = "❌ " + option;
          question.style.border = "2px solid red";

          allButtons[quizData[index].answer].innerText =
            "✅ " + quizData[index].options[quizData[index].answer];

        }

        scoreBox.innerText =
          "🏆 Score: " + score + " / " + quizData.length;

        if (answered === quizData.length) {

          const result = document.createElement("p");

          result.innerText =
            "🎉 Quiz Complete! Your Score: " +
            score + " / " + quizData.length;

          result.style.fontWeight = "bold";
          result.style.color = "green";

          practiceSection.appendChild(result);

        }

      });

      optionsBox.appendChild(button);

    });

    question.appendChild(optionsBox);

  });

});
