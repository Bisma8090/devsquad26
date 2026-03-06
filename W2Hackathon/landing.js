function showLandingPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
${navbar()}
<section class="w-[90%] md:w-[70%] h-[420px] mx-auto mb-12 relative bg-[url('assets/d38989f4970885122b241362efabff60c8d3f553.png')] bg-cover bg-center flex justify-center items-end">
  <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  <div class="relative flex flex-col items-center pb-8 w-[90%] text-center text-white">
    <h1 class="text-2xl font-bold">Welcome to QuizMaster</h1>
    <p class="mt-2 max-w-xl">
      Test your knowledge with our engaging quizzes. Compete with friends
      and climb the leaderboard. Start your quiz journey today!
    </p>
    <button onclick="showSignupPage()" class="bg-blue-600 px-8 py-2 mt-4 mb-12 rounded-md">
      Get Started
    </button>
  </div>
</section>

<section class="w-[90%] md:w-[70%] mx-auto my-12">
  <div>
    <h1 class="text-3xl font-bold">Key Features</h1>
    <p class="mt-4 mb-12 text-base max-w-xl">
      Explore the exciting features that make QuizMaster the ultimate quiz app.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Feature Cards -->
    <div class="flex flex-col justify-between border border-gray-400 rounded-xl pt-4 pb-8 px-4">
      <img src="assets/Frame44.png" class="w-6">
      <h1><strong>Leaderboard</strong></h1>
      <p class="text-sm text-gray-500">Compete with friends and other users to see who can achieve the highest scores.</p>
    </div>
    <div class="flex flex-col justify-between border border-gray-400 rounded-xl pt-4 pb-8 px-4">
      <img src="assets/Frame4.png" class="w-6">
      <h1><strong>Progress Tracking</strong></h1>
      <p class="text-sm text-gray-500">Track your progress and see how you improve over time with detailed performance reports.</p>
    </div>
    <div class="flex flex-col justify-between border border-gray-400 rounded-xl pt-4 pb-8 px-4">
      <img src="assets/Frame444.png" class="w-6">
      <h1><strong>Timed Quizzes</strong></h1>
      <p class="text-sm text-gray-500">Challenge yourself with timed quizzes to test your speed and accuracy.</p>
    </div>
  </div>
</section>
`;
}