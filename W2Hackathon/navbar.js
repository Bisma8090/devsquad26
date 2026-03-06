function navbar() {
  return `
<header class="flex flex-col md:flex-row md:justify-between py-3 px-2 md:px-12 border-b border-gray-300 mb-8 gap-4 md:gap-0">
  <div class="flex items-center gap-2">
    <img src="assets/Frame2.png" class="w-4" alt="">
    <div>Quiz Master</div>
  </div>

  <div class="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base">
    <div class="cursor-pointer" onclick="showLandingPage()">Home</div>
    <div class="cursor-pointer" onclick="showQuizPage()">Quizzes</div>
    <div class="cursor-pointer" onclick="showLeaderboard()">Leaderboard</div>
    <div class="cursor-pointer" onclick="showProfilePage()">Profile</div>
    <img src="assets/Frame1.png" class="w-10 rounded-full">
    <img src="assets/2c19a7b00653c91dcbf49f5eb38495c0fa92c990.png"
    class="w-8 rounded-full" onclick="showProfilePage()">
  </div>
</header>
`;
}