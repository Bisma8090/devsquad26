const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customTipInput = document.getElementById("custom-tip");
const tipButtons = document.querySelectorAll(".tip-btn");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalDisplay = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset");
let bill = 0;
let people = 1;
let tipPercent = 0;
function calculateTip() {
  if (people <= 0) {
    tipAmountDisplay.textContent = "0.00";
    totalDisplay.textContent = "0.00";
    return;
  }
  const tipPerPerson = (bill * tipPercent) / 100 / people;
  const totalPerPerson = bill / people + tipPerPerson;
  tipAmountDisplay.textContent = tipPerPerson.toFixed(2);
  totalDisplay.textContent = totalPerPerson.toFixed(2);
}
billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value) || 0;
  calculateTip();
});
peopleInput.addEventListener("input", () => {
  people = parseFloat(peopleInput.value) || 1;
  calculateTip();
});
tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipPercent = parseFloat(btn.textContent) || 0;
    customTipInput.value = "";
    tipButtons.forEach((b) => 
        b.classList.remove("bg-[hsl(172_67%_45%)]"));
 btn.classList.remove("bg-[hsl(183_98%_16%)]");
    btn.classList.add("bg-[hsl(172_67%_45%)]"); 
    calculateTip();
  });
});
customTipInput.addEventListener("input", () => {
  tipPercent = parseFloat(customTipInput.value) || 0;
  tipButtons.forEach((b) => b.classList.remove("bg-[hsl(172_67%_45%)]"));
  calculateTip();
});
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  bill = 0;
  people = 1;
  tipPercent = 0;
  tipAmountDisplay.textContent = "0.00";
  totalDisplay.textContent = "0.00";
tipButtons.forEach((b) => {
    b.classList.remove("bg-[hsl(172_67%_45%)]");
    b.classList.add("bg-[hsl(183_98%_16%)]"); 
  });});
