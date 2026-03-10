const toggle = document.getElementById("themeToggle");
const body = document.getElementById("body");

let darkMode = true;

toggle.addEventListener("click", () => {

if (darkMode) {

body.classList.remove("bg-black","text-white");
body.classList.add("bg-white","text-black");

document.getElementById("navbarLinks").classList.remove("text-white");
document.getElementById("contactBtn").classList.remove("bg-[#925FF0]");
document.getElementById("contactBtn").classList.add("bg-black","text-white");
document.getElementById("themeToggle").src = "assets/Switch Mode02.png";
document.getElementById("logo").src = "assets/Logo02.png";
document.getElementById("menuBtn").src = "assets/menu02.png";
document.getElementById("insta").src = "assets/Instagram02.png";
document.getElementById("figma").src = "assets/Figma02.png";
document.getElementById("linkedin").src = "assets/LinkedIn02.png";
document.getElementById("twitter").src = "assets/Twitter02.png";
document.getElementById("telegram").src = "assets/Telegram02.png";
document.getElementById("medium").src = "assets/Medium02.png";


darkMode = false;

}
 else
     {

document.getElementById("navbarLinks").classList.remove("text-black");
document.getElementById("navbarLinks").classList.add("text-white");
document.getElementById("contactBtn").classList.remove("bg-black");
document.getElementById("contactBtn").classList.add("bg-[#925FF0]");
document.getElementById("logo").src = "assets/light/Logo.png";
document.getElementById("insta").src = "assets/light/Instagram.png";
document.getElementById("menuBtn").src = "assets/menu.png";
document.getElementById("figma").src = "assets/light/Figma.png";
document.getElementById("linkedin").src = "assets/light/linkedin.png";
document.getElementById("twitter").src = "assets/light/twitter.png";
document.getElementById("telegram").src = "assets/light/telegram.png";
document.getElementById("medium").src = "assets/light/Medium Logo.png";

body.classList.remove("bg-white","text-black");
body.classList.add("bg-black","text-white");


darkMode = true;

}

});