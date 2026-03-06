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
class="w-8 rounded-full">

</div>
</header>
`;
}

const app = document.getElementById("app");

function showLandingPage() {

app.innerHTML = `
${navbar()}

<section
class="w-[90%] md:w-[70%] h-[420px] mx-auto mb-12 relative bg-[url('assets/d38989f4970885122b241362efabff60c8d3f553.png')] bg-cover bg-center flex justify-center items-end"
>

<div class="absolute inset-0 bg-black bg-opacity-30"></div>

<div class="relative flex flex-col items-center pb-8 w-[90%] text-center text-white">

<h1 class="text-2xl font-bold">Welcome to QuizMaster</h1>

<p class="mt-2 max-w-xl">
Test your knowledge with our engaging quizzes. Compete with friends
and climb the leaderboard. Start your quiz journey today!
</p>

<button onclick="showSignupPage()"
class="bg-blue-600 px-8 py-2 mt-4 mb-12 rounded-md">
Get Started
</button>

</div>
</section>

<section class="w-[90%] md:w-[70%] mx-auto my-12">

<div>
<h1 class="text-3xl font-bold">Key Features</h1>

<p class="mt-4 mb-12 text-base max-w-xl">
Explore the exciting features that make QuizMaster the ultimate quiz
app.
</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">

<div class="flex flex-col justify-between border border-gray-400 rounded-xl pt-4 pb-8 px-4">

<img src="assets/Frame44.png" class="w-6">

<h1><strong>Leaderboard</strong></h1>

<p class="text-sm text-gray-500">
Compete with friends and other users to see who can achieve the highest scores.
</p>

</div>

<div class="flex flex-col justify-between border border-gray-400 rounded-xl pt-4 pb-8 px-4">

<img src="assets/Frame4.png" class="w-6">

<h1><strong>Progress Tracking</strong></h1>

<p class="text-sm text-gray-500">
Track your progress and see how you improve over time with detailed performance reports.
</p>

</div>

<div class="flex flex-col justify-between border border-gray-400 rounded-xl pt-4 pb-8 px-4">

<img src="assets/Frame444.png" class="w-6">

<h1><strong>Timed Quizzes</strong></h1>

<p class="text-sm text-gray-500">
Challenge yourself with timed quizzes to test your speed and accuracy.
</p>

</div>

</div>

</section>
`;
}

function showSignupPage(){

app.innerHTML = `
${navbar()}

<section class="mt-10 flex flex-col items-center">

<h1 class="text-2xl font-bold mb-10 text-center">Create Your Account</h1>

<div class="w-[90%] max-w-[350px] flex flex-col gap-4">

<input id="name" placeholder="Full name"
class="border border-gray-300 p-2 rounded-md w-full">

<input id="email" placeholder="Email"
class="border border-gray-300 p-2 rounded-md w-full">

<input id="password" type="password" placeholder="Password"
class="border border-gray-300 p-2 rounded-md w-full">

<input id="confirmPassword" type="password" placeholder="Confirm Password"
class="border border-gray-300 p-2 rounded-md w-full">

<button onclick="signupUser()"
class="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md w-full">
Signup
</button>

<p class="mt-4 text-sm">
Already have an account?
<span onclick="showSigninPage()" class="text-blue-600 cursor-pointer">
Sign In
</span>
</p>

</div>

</section>
`;
}


function signupUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords not match");
    return;
  }

  let user = { name, email, password };

  localStorage.setItem("user", JSON.stringify(user));
  alert(` Signup Successful! Welcome ${name}`);
  showSigninPage();
}
function showSigninPage(){

app.innerHTML = `
${navbar()}

<section class="mt-10 flex flex-col items-center">

<h1 class="text-2xl font-bold mb-10 text-center">Welcome Back!</h1>

<div class="w-[90%] max-w-[350px] flex flex-col gap-4">

<input id="email" placeholder="Email"
class="border border-gray-300 p-2 rounded-md w-full">

<input id="password" type="password" placeholder="Password"
class="border border-gray-300 p-2 rounded-md w-full">

<button onclick="signinUser()"
class="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md w-full">
Login
</button>

<p class="mt-4 text-sm">
Don't have an account?
<span onclick="showSignupPage()" class="text-blue-600 cursor-pointer">
SignUp
</span>
</p>

</div>

</section>
`;
}
function signinUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Get stored user from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert(" No user found. Please signup first!");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert(` Welcome back, ${storedUser.name}!`);
    showProfilePage();
  } else {
    alert(" Invalid credentials");
  }
}
function showProfilePage() {
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

<div class="border border-gray-300 rounded-lg overflow-hidden">

<div class="grid grid-cols-3  p-4 font-semibold">
<div>Quiz Name</div>
<div>Score</div>
<div>Date</div>
</div>

<div id="quizHistory">

<div class="grid grid-cols-3 p-4 border-t">
<div>General Knowledge</div>
<div>85/100</div>
<div>2023-08-15</div>
</div>

<div class="grid grid-cols-3 p-4 border-t">
<div>Science Trivia</div>
<div>70/100</div>
<div>2023-08-10</div>
</div>

<div class="grid grid-cols-3 p-4 border-t">
<div>History Buff</div>
<div>92/100</div>
<div>2023-08-05</div>
</div>

</div>

</div>

</section>
`;
}
function showQuizPage(){

const featuredQuizzes=[
{
title:"The Universe",
description:"Test your knowledge about the cosmos.",
image:"assets/im1.JPG"
},
{
title:"Ancient Civilizations",
description:"Explore the mysteries of ancient cultures.",
image:"assets/im2.JPG"
},
{
title:"Shakespearean Plays",
description:"Dive into the world of the Bard.",
image:"assets/im3.JPG"
}
];

const allQuizzes=[
{
title:"General Knowledge",
description:"Test your overall knowledge with a mix of questions.",
image:"assets/im7.JPG"
},
{
title:"Science",
description:"Explore the wonders of science.",
image:"assets/im5.JPG"
},
{
title:"History",
description:"Dive into historical events.",
image:"assets/im6.JPG"
},
{
title:"Literature",
description:"Discover the world of books and authors.",
image:"assets/im2.JPG"
},
{
title:"Mathematics",
description:"Challenge your math skills with various problems",
image:"assets/im3.JPG"
}
];

const featuredHTML=featuredQuizzes.map((quiz)=>{
return `
<div class="cursor-pointer">
<img src="${quiz.image}" class="rounded-lg h-28 w-full object-cover">
<h3 class="mt-2 font-semibold">${quiz.title}</h3>
<p class="text-sm text-gray-500">${quiz.description}</p>
</div>
`
}).join("");

const allQuizHTML=allQuizzes.map((quiz)=>{
return `
<div class="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-6 gap-4 cursor-pointer">

<div>
<h3 class="font-semibold">${quiz.title}</h3>
<p class="text-sm text-gray-500">${quiz.description}</p>
</div>

<img src="${quiz.image}" class="w-full md:w-44 h-28 rounded-lg object-cover">

</div>
`
}).join("");

app.innerHTML=`
${navbar()}

<section class="w-[90%] md:w-[70%] mx-auto">

<h1 class="text-2xl font-bold mb-6">Select a Quiz</h1>

<div class="flex flex-wrap gap-3 mb-8">

<button class="bg-gray-200 px-4 py-1 rounded-md text-sm">All</button>
<button class="bg-gray-200 px-4 py-1 rounded-md text-sm">Science</button>
<button class="bg-gray-200 px-4 py-1 rounded-md text-sm">History</button>
<button class="bg-gray-200 px-4 py-1 rounded-md text-sm">Literature</button>
<button class="bg-gray-200 px-4 py-1 rounded-md text-sm">Mathematics</button>

</div>

<h2 class="text-xl font-semibold mb-4">Featured Quizzes</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
${featuredHTML}
</div>

<h2 class="text-xl font-semibold mb-6">All Quizzes</h2>

<div class="flex flex-col gap-6">
${allQuizHTML}
</div>

</section>
`;
}

showLandingPage();