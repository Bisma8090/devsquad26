
function showResult() {
  let score = 0;

  quizQuestions.forEach((q, index) => {
    if (selectedAnswers[index] == q.correct) {
      score++;
    }
  });

  let percentage = Math.round((score / quizQuestions.length) * 100);
  let today = new Date().toLocaleDateString();

  let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    name: currentQuizTitle,   
    score: score + "/" + quizQuestions.length,
    date: today,
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));
  app.innerHTML = `
  ${navbar()}

  <section class="w-[90%] md:w-[60%] mx-auto mt-16 text-center">
  
  <h1 class="text-3xl font-bold mb-8">Quiz Results</h1>

  <div class="flex justify-between text-sm mb-2">
  <span>Quiz Completed</span>
  <span>${percentage}%</span>
  </div>

  <div class="w-full bg-gray-200 h-2 rounded mb-8">
  <div class="bg-black h-2 rounded" style="width:${percentage}%"></div>
  </div>

  <div class="bg-gray-200 rounded-lg p-6 mb-8 text-left">
  <p class="text-gray-600">Score</p>
  <h2 class="text-3xl font-bold">${score}/${quizQuestions.length}</h2>
  </div>

  <p class="text-gray-600 mb-8">
  Congratulations! You've completed the quiz with a score of
  ${score} out of ${quizQuestions.length}.
  </p>

  <button onclick="reviewAnswers()"
  class="bg-blue-600 text-white px-6 py-2 rounded mb-4">
  Review Answers
  </button>

  <br>

  <button onclick="showQuizPage()"
  class="bg-gray-200 px-6 py-2 rounded">
  Take Another Quiz
  </button>

  </section>
  `;
}
