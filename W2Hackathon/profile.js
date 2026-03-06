
function showProfilePage() {
  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  let historyHTML = history
    .map(
      (q) => `
<div class="grid grid-cols-3 p-4 border-t">
<div>${q.name}</div>
<div>${q.score}</div>
<div>${q.date}</div>
</div>
`,
    )
    .join("");
  const user = JSON.parse(localStorage.getItem("user"));

  app.innerHTML = `
${navbar()}

<section class="w-[70%] mx-auto">

<div class="flex flex-col items-center mb-10">

<img src="assets/2c19a7b00653c91dcbf49f5eb38495c0fa92c990.png"
class="w-24 h-24 rounded-full mb-3"/>

<h1 class="text-xl font-bold">${user.name}</h1>

<p class="text-gray-500">Quiz Enthusiast</p>
<p class="text-gray-400 text-sm">Joined 2026</p>

</div>


<div class="flex gap-8 border-b border-gray-300 mb-8">
<div class="pb-2 border-b-2 border-gray-200  font-semibold">Activity</div>
<div class="pb-2 border-b-4 border-gray-500 font-extrabold ">Profile</div>
</div>


<h2 class="text-xl font-semibold border-b border-gray-300 pb-4 mb-8 ">Personal Information </h2>

<div class="grid grid-cols-2 gap-10 mb-10">

<div>
<p class="text-gray-500 text-sm">Name</p>
<p>${user.name}</p>
</div>

<div>
<p class="text-gray-500 text-sm">Email</p>
<p>${user.email}</p>
</div>

<div>
<p class="text-gray-500 text-sm border-t border-gray-300 pt-4">Bio</p>

<p class=" py-2  w-[250px] mt-2"
>Avid quiz taker and trivia lover. Always up for a challenge!<p>

</div>

</div>


<h2 class="text-xl font-semibold mb-6">Quiz History</h2>

<div class="border border-gray-300 mb-8 rounded-lg overflow-hidden">

<div class="grid grid-cols-3  p-4 font-semibold">
<div >Quiz Name</div>
<div>Score</div>
<div>Date</div>
</div>

<div id="quizHistory">
${historyHTML}
</div>


</div>

</div>

</section>
`;
}