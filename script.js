  // Select elements
let plusBtns = document.querySelectorAll(".fa-plus-circle");
let minusBtns = document.querySelectorAll(".fa-minus-circle");
let trashBtns = document.querySelectorAll(".fa-trash-alt");
let heartBtns = document.querySelectorAll(".fa-heart");

let quantities = document.querySelectorAll(".quantity");
let unitPrices = document.querySelectorAll(".unit-price");

let total = document.querySelector(".total");

// Function to update total price
function updateTotal() {
  let sum = 0;

  quantities.forEach(function (qty, index) {
    let quantity = Number(qty.innerHTML);

    // Remove "$" and convert to number
    let price = Number(unitPrices[index].innerHTML.replace("$", ""));

    sum += quantity * price;
  });

  total.innerHTML = sum + " $";
}

// PLUS BUTTON
plusBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    quantities[index].innerHTML++;

    updateTotal();
  });
});

// MINUS BUTTON
minusBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    if (quantities[index].innerHTML > 0) {
      quantities[index].innerHTML--;

      updateTotal();
    }
  });
});

// DELETE PRODUCT
trashBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Remove the whole product card
    btn.closest(".card-body").remove();

    updateTotal();
  });
});

// LIKE PRODUCT
heartBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("text-danger");
  });
});