
function showSignupPage() {
  app.innerHTML = `
${navbar()}

<section class="mt-10 flex flex-col items-center md:items-start">

<h1 class="text-2xl font-bold mb-10 text-center  w-full">
Create Your Account
</h1>

<div class="w-[90%] max-w-[350px] flex flex-col gap-4 mx-auto md:mx-0 md:ml-48">

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


                    //  SigninPage


function showSigninPage() {
  app.innerHTML = `
<header class="flex flex-col md:flex-row md:justify-between py-3 px-2 md:px-12 border-b border-gray-300 mb-8 gap-4 md:gap-0">

<div class="flex items-center gap-2">
<div><strong>Quiz Master</strong></div>
</div>

<div class="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base">

<div class="cursor-pointer" onclick="showLandingPage()"></div>
<div class="cursor-pointer" onclick="showQuizPage()"></div>
<div class="cursor-pointer" onclick="showLeaderboard()"></div>
<div class="cursor-pointer" onclick="showProfilePage()"></div>

<img src="" class="w-10 rounded-full">

<img src=""
class="w-8 rounded-full">

</div>
</header><section class="mt-10 flex flex-col items-center md:items-start">

<h1 class="text-2xl font-bold mb-10 text-center  w-full">
Welcome Back!
</h1>

<div class="w-[90%] max-w-[350px] flex flex-col gap-4 mx-auto md:mx-0 md:ml-48">

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