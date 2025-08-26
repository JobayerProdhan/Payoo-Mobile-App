const addMoneyBtn = document.getElementById("add-money");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addMoneyBtn.style.backgroundColor = "#0874F20D";
  addMoneyBtn.style.borderColor = "#0874F2";
  const recentActivity = document.getElementById("recent-activity");
  recentActivity.style.display = "none";
  const addMoneyForm = document.getElementById("add-money-form");
  addMoneyForm.style.display = "block";

  const submitBtn = document.getElementById("submit-btn");
  addMoney(submitBtn);

});

function addMoney(submitBtn) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const pinNumber = "1234";
    const pinNumberValue = document.getElementById("pin-number").value;

    if (pinNumberValue === pinNumber) {
      // Success modal
      Swal.fire({
        title: "Success!",
        text: "Money added successfully!",
        icon: "success",
        confirmButtonText: "OK",
        width: 250,
        padding: "1em"
      }).then(() => {
    document.getElementById("amount-to-add").value = "";
    document.getElementById("pin-number").value = "";
    document.getElementById("account-number").value = "";
  });

      const totalMoney = document.getElementById("total-money").innerText;
      const amountToAdd = document.getElementById("amount-to-add").value;
      const newTotal = parseFloat(totalMoney) + parseFloat(amountToAdd);
      document.getElementById("total-money").innerText = newTotal;
    } else {
      // Error modal
      Swal.fire({
        title: "Wrong",
        text: "Please enter correct PIN",
        icon: "error",
        confirmButtonText: "Try Again",
        width: 250,
        padding: "1em",
      });
    }
  });

}
