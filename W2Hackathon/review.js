function reviewAnswers() {
  let wrongAnswers = quizQuestions
    .map((q, index) => {
      if (selectedAnswers[index] != q.correct) {
        return `
        <div class="mb-8">

        <h3 class="font-semibold text-lg mb-2">
        Question ${index + 1}
        </h3>

        <p class="text-gray-700 mb-2">
        ${q.question}
        </p>

        <p >
        Your answer: ${q.options[selectedAnswers[index]] || "Not answered"}
        </p>

        <p >
        Correct answer: ${q.options[q.correct]}
        </p>

        </div>
        `;
      }
    })
    .join("");

  app.innerHTML = `
${navbar()}

<section class="w-[90%] md:w-[60%] mx-auto mt-16">

<h1 class="text-3xl font-bold mb-10">
Review Incorrect Answers
</h1>

${wrongAnswers}

<div class="flex justify-end mt-10">

<button onclick="showQuizPage()"
class="bg-blue-600 text-white px-6 py-2 rounded">
Back to Quizzes
</button>

</div>

</section>
`;
}