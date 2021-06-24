const billAmt = document.getElementById("billamt");
const tipAmt = document.getElementById("tipamt");
const peopleAmt = document.getElementById("peopleamt");
const calculate = document.getElementById("calculate");
const totalTip = document.getElementById("totaltip");

const allInputs = [billAmt, tipAmt, peopleAmt];

allInputs.forEach((e) => {
  e.addEventListener("change", function () {
    if (this.value > 0) {
      this.classList.add("form-control-success");
      this.classList.remove("form-control-error");
    } else {
      this.classList.add("form-control-error");
      this.classList.remove("form-control-success");
    }
  });
});

const check = () => {
  allInputs.forEach((e) => {
    if (e.value > 0) {
      e.classList.add("form-control-success");
      e.classList.remove("form-control-error");
      calculateTotal();
    } else {
      e.classList.add("form-control-error");
      e.classList.remove("form-control-success");
      totalTip.innerHTML = "Please enter values";
    }
  });
};

const calculateTotal = () => {
  const tip = ((billAmt.value * tipAmt.value) / peopleAmt.value).toFixed(2);
  totalTip.innerHTML = `Tip per person: $${tip}`;
};

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  check();
});
