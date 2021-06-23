const billAmt = document.getElementById("billamt");
const tipAmt = document.getElementById("tipamt");
const peopleAmt = document.getElementById("peopleamt");
const calculate = document.getElementById("calculate");

const allInputs = [billAmt, tipAmt, peopleAmt];

allInputs.forEach((e) => {
  e.addEventListener("change", function () {
    if (this.value > 0) {
      this.classList.add("form-control-success");
      this.classList.remove("form-control-error");
      return true;
    } else {
      this.classList.add("form-control-error");
      this.classList.remove("form-control-success");
      return false;
    }
  });
});

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  checkBillAmt(billAmt);
});
