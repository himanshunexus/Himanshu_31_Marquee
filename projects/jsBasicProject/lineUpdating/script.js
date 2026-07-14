const interestHeading = document.getElementById("interestHeading");
const interestInput = document.getElementById("interestInput");
const submitButton = document.getElementById("submitButton");

function changeInterest() {
  const newInterest = interestInput.value;
  if (newInterest !== "") {
    interestHeading.textContent = "My Current Interest: " + newInterest;
    interestInput.value = "";
  }
}

submitButton.addEventListener("click", changeInterest);
