
function filterQuizzes(searchText) {
  searchText = searchText.toLowerCase().trim();

  const cards = document.querySelectorAll(".quiz-card");

  cards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();

    if (searchText === "") {
      card.classList.remove("bg-yellow-100", "opacity-50");
      return;
    }

    if (searchText.length > 1 && title.includes(searchText)) {
      card.classList.add("bg-yellow-100");
      card.style.display = "flex";

      card.classList.remove("opacity-50");
    } else {
      card.classList.remove("bg-yellow-100");
      card.classList.add("opacity-50");
    }
  });
}
let currentQuizTitle = "";
function startQuiz(title) {

  currentQuizTitle = title;   

  quizQuestions = quizzes[title];
  currentQuestion = 0;
  selectedAnswers = [];

  showQuestion();
}

function showQuizPage() {
  const featuredQuizzes = [
    {
      title: "The Universe",
      description: "Test your knowledge about the cosmos.",
      image: "assets/im1.JPG",
    },
    {
      title: "Ancient Civilizations",
      description: "Explore the mysteries of ancient cultures.",
      image: "assets/im2.JPG",
    },
    {
      title: "Shakespearean Plays",
      description: "Dive into the world of the Bard.",
      image: "assets/im3.JPG",
    },
  ];

  const allQuizzes = [
    {
      title: "General Knowledge",
      description: "Test your overall knowledge with a mix of questions.",
      image: "assets/im7.JPG",
    },
    {
      title: "Science",
      description: "Explore the wonders of science.",
      image: "assets/im5.JPG",
    },
    {
      title: "History",
      description: "Dive into historical events.",
      image: "assets/im6.JPG",
    },
    {
      title: "Literature",
      description: "Discover the world of books and authors.",
      image: "assets/im2.JPG",
    },
    {
      title: "Mathematics",
      description: "Challenge your math skills with various problems",
      image: "assets/im3.JPG",
    },
  ];

  const featuredHTML = featuredQuizzes
    .map((quiz) => {
      return `
<div 
class="quiz-card cursor-pointer p-2 rounded-lg"
data-title="${quiz.title}"
onclick="startQuiz('${quiz.title}')">
<img src="${quiz.image}" class="rounded-lg h-28 w-full object-cover">
<h3 class="mt-2 font-semibold">${quiz.title}</h3>
<p class="text-sm text-gray-500">${quiz.description}</p>
</div>
`;
    })
    .join("");

  const allQuizHTML = allQuizzes
    .map((quiz) => {
      return `
<div 
class="quiz-card flex flex-col md:flex-row md:justify-between md:items-center border-b pb-6 gap-4 cursor-pointer p-2 rounded-lg"
data-title="${quiz.title}"
onclick="startQuiz('${quiz.title}')">
<div>
<h3 class="font-semibold">${quiz.title}</h3>
<p class="text-sm text-gray-500">${quiz.description}</p>
</div>

<img src="${quiz.image}" class="w-full md:w-44 h-28 rounded-lg object-cover">

</div>
`;
    })
    .join("");

  app.innerHTML = `
<header class="flex justify-between py-3 px-12 border-b border-gray-300 mb-8" > 
<div class="flex items-center gap-8"> 
<div class="flex items-center gap-1">
 <div><img src="assets/Frame2.png" class="w-4" alt="iiii" /></div> 
 <div>Quiz Master</div> </div > 
 <div class="text-gray-600 cursor-pointer" onclick="showLandingPage()">Home</div>
  <div class="text-gray-600 cursor-pointer" onclick="showQuizPage()">Categories</div>
   <div class="text-gray-600 cursor-pointer" onclick="showQuizPage()">Quizzes</div>
    <div class="text-gray-600 " onclick="showLeaderboard()">Leaderboard</div> </div> 
    <div class="flex gap-4"> 
     <div class="flex items-center border border-gray-300 rounded-full px-2 py-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" /> </svg> 
<input 
id="quizSearch"
type="text"
placeholder="Search title"
oninput="filterQuizzes(this.value)"
class="outline-none text-sm w-18 md:w-24"/>
</div>
<div> <img src="assets/2c19a7b00653c91dcbf49f5eb38495c0fa92c990.png" class="w-8 rounded-full" alt="" onclick="showProfilePage()"/> </div> 
     </div>
      </header>
<section class="w-[90%] md:w-[70%] mx-auto">

<h1 class="text-2xl font-bold mb-6">Select a Quiz</h1>
<div class="flex flex-wrap gap-3 mb-8">

<button onclick="showQuizPage()" class="bg-gray-200 px-4 py-2 rounded-md text-sm">
All
</button>

<button onclick="startQuiz('Science')" class="bg-gray-200 px-4 py-2 rounded-md text-sm">
Science
</button>

<button onclick="startQuiz('History')" class="bg-gray-200 px-4 py-2 rounded-md text-sm">
History
</button>

<button onclick="startQuiz('Literature')" class="bg-gray-200 px-4 py-2 rounded-md text-sm">
Literature
</button>

<button onclick="startQuiz('Mathematics')" class="bg-gray-200 px-4 py-2 rounded-md text-sm">
Mathematics
</button>
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

const quizzes = {
  "General Knowledge": [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correct: 1,
    },
    {
      question: "Which continent is the largest?",
      options: ["Africa", "Asia", "Europe", "Australia"],
      correct: 1,
    },
    {
      question: "Which animal is known as king of jungle?",
      options: ["Tiger", "Lion", "Elephant", "Bear"],
      correct: 1,
    },
    {
      question: "Which country is famous for pizza?",
      options: ["Italy", "Spain", "France", "Greece"],
      correct: 0,
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correct: 2,
    },
  ],

  Science: [
    {
      question: "Which planet is known as Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1,
    },
    {
      question: "Water chemical formula?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correct: 0,
    },
    {
      question: "Sun is a?",
      options: ["Planet", "Star", "Comet", "Asteroid"],
      correct: 1,
    },
    {
      question: "Which gas do humans breathe?",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
      correct: 0,
    },
    {
      question: "Plants make food by?",
      options: ["Photosynthesis", "Digestion", "Respiration", "Evaporation"],
      correct: 0,
    },
  ],

  History: [
    {
      question: "Who discovered America?",
      options: ["Columbus", "Newton", "Einstein", "Tesla"],
      correct: 0,
    },
    {
      question: "World War 2 ended in?",
      options: ["1945", "1939", "1918", "1960"],
      correct: 0,
    },
    {
      question: "Great Wall belongs to?",
      options: ["India", "China", "Japan", "Korea"],
      correct: 1,
    },
    {
      question: "First President of USA?",
      options: ["Lincoln", "Washington", "Adams", "Jefferson"],
      correct: 1,
    },
    {
      question: "Who founded Mughal Empire?",
      options: ["Akbar", "Babur", "Aurangzeb", "Shahjahan"],
      correct: 1,
    },
  ],

  Literature: [
    {
      question: "Who wrote Hamlet?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
      ],
      correct: 1,
    },
    {
      question: "Who wrote Harry Potter?",
      options: ["J.K. Rowling", "Tolkien", "Lewis", "Dan Brown"],
      correct: 0,
    },
    {
      question: "Sherlock Holmes creator?",
      options: ["Arthur Conan Doyle", "Agatha Christie", "Hemingway", "Twain"],
      correct: 0,
    },
    {
      question: "Romeo and Juliet written by?",
      options: ["Shakespeare", "Milton", "Homer", "Virgil"],
      correct: 0,
    },
    {
      question: "The Odyssey written by?",
      options: ["Homer", "Plato", "Aristotle", "Socrates"],
      correct: 0,
    },
  ],

  Mathematics: [
    {
      question: "5 + 7 = ?",
      options: ["10", "11", "12", "13"],
      correct: 2,
    },
    {
      question: "Square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "10 × 5 = ?",
      options: ["40", "45", "50", "60"],
      correct: 2,
    },
    {
      question: "100 ÷ 10 = ?",
      options: ["5", "10", "15", "20"],
      correct: 1,
    },
    {
      question: "15 + 5 = ?",
      options: ["18", "19", "20", "21"],
      correct: 2,
    },
  ],

  "The Universe": [
    {
      question: "Which planet is the largest in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correct: 1,
    },
    {
      question: "What galaxy do we live in?",
      options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
      correct: 1,
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correct: 0,
    },
    {
      question: "What is the Sun?",
      options: ["Planet", "Star", "Asteroid", "Comet"],
      correct: 1,
    },
    {
      question: "Which planet has rings?",
      options: ["Mars", "Venus", "Saturn", "Mercury"],
      correct: 2,
    },
  ],

  "Ancient Civilizations": [
    {
      question: "Which civilization built the pyramids?",
      options: ["Greek", "Egyptian", "Roman", "Persian"],
      correct: 1,
    },
    {
      question: "The Indus Valley civilization was located in?",
      options: ["China", "India & Pakistan", "Egypt", "Greece"],
      correct: 1,
    },
    {
      question: "Who ruled the Macedonian Empire?",
      options: [
        "Alexander the Great",
        "Julius Caesar",
        "Napoleon",
        "Genghis Khan",
      ],
      correct: 0,
    },
    {
      question: "Which civilization built Machu Picchu?",
      options: ["Aztec", "Inca", "Maya", "Roman"],
      correct: 1,
    },
    {
      question: "The Roman Empire started in which country?",
      options: ["France", "Italy", "Spain", "Greece"],
      correct: 1,
    },
  ],

  "Shakespearean Plays": [
    {
      question: "Who wrote Romeo and Juliet?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen",
      ],
      correct: 0,
    },
    {
      question: "Who is the prince of Denmark in Hamlet?",
      options: ["Macbeth", "Hamlet", "Othello", "Romeo"],
      correct: 1,
    },
    {
      question: "Which play features the character Macbeth?",
      options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
      correct: 1,
    },
    {
      question: "Who is Juliet's lover?",
      options: ["Hamlet", "Romeo", "Macbeth", "Othello"],
      correct: 1,
    },
    {
      question: "Who wrote the play Othello?",
      options: ["Shakespeare", "Dickens", "Homer", "Virgil"],
      correct: 0,
    },
  ],
};
let timer;
let timeLeft = 30;

function startTimer() {
  clearInterval(timer);
  timeLeft = 30;

  timer = setInterval(() => {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    document.getElementById("hours").innerText = String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0",
    );

    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0",
    );

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
      return;
    }

    timeLeft--;
  }, 1000);
}

                    //  ProgressPage



function getProgress() {
  return ((currentQuestion + 1) / quizQuestions.length) * 100;
}
let quizQuestions = [];
let currentQuestion = 0;
let selectedAnswers = [];

function startQuiz(title) {

  currentQuizTitle = title;

  quizQuestions = quizzes[title];

  currentQuestion = 0;
  selectedAnswers = [];

  renderQuestion();
}

function renderQuestion() {
  let q = quizQuestions[currentQuestion];

  let optionsHTML = q.options
    .map((opt, index) => {
      return `
<label class="flex items-center border border-gray-300 rounded-md p-3 cursor-pointer">
<input type="radio" name="answer" value="${index}" class="mr-3">
${opt}
</label>
`;
    })
    .join("");

  app.innerHTML = `
${navbar()}

<section class="w-[90%] md:w-[70%] mx-auto mt-8">

<!-- Progress -->
<p class="text-sm mb-2">Progress</p>

<div class="w-full bg-gray-200 rounded-full h-2 mb-2">
<div class="h-2 rounded-full bg-black"
style="width:${getProgress()}%">
</div>
</div>

<p class="text-sm text-gray-500 mb-6">
Question ${currentQuestion + 1} of ${quizQuestions.length}
</p>

<!-- TIMER -->
<div class="grid grid-cols-3 gap-6 mb-10 text-center">

<div class="bg-gray-200 p-4 rounded-lg">
<p id="hours" class="text-xl font-bold">00</p>
<p class="text-sm text-gray-600 mt-1">Hours</p>
</div>

<div class="bg-gray-200 p-4 rounded-lg">
<p id="minutes" class="text-xl font-bold">00</p>
<p class="text-sm text-gray-600 mt-1">Minutes</p>
</div>

<div class="bg-gray-200 p-4 rounded-lg">
<p id="seconds" class="text-xl font-bold">30</p>
<p class="text-sm text-gray-600 mt-1">Seconds</p>
</div>

</div>

<h2 class="text-2xl font-bold mb-6">${q.question}</h2>

<div class="flex flex-col gap-4 mb-10">
${optionsHTML}
</div>

<div class="flex justify-between">

<button onclick="prevQuestion()" class="bg-gray-200 px-6 py-2 rounded">
Previous
</button>

<button onclick="nextQuestion()" class="bg-blue-600 text-white px-6 py-2 rounded">
Next
</button>

</div>

</section>
`;

  startTimer();
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (selected) {
    selectedAnswers[currentQuestion] = selected.value;
  }

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}