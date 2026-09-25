function showMessage() {
  document.getElementById("message").innerText =
    "🎉 Great! JavaScript ka button kaam kar raha hai.";
}


// Practice Quiz

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

  questions.forEach(function (question, index) {

    if (!quizData[index]) return;

    const optionsBox = document.createElement("div");

    quizData[index].options.forEach(function (option, optionIndex) {

      const button = document.createElement("button");

      button.innerText = option;
      button.style.margin = "5px";

      button.addEventListener("click", function () {

        if (optionIndex === quizData[index].answer) {
          score++;
          question.style.border = "2px solid green";
          button.innerText = "✅ " + option;
        } else {
          question.style.border = "2px solid red";
          button.innerText = "❌ " + option;
        }

      });

      optionsBox.appendChild(button);

    });

    question.appendChild(optionsBox);

  });

});
