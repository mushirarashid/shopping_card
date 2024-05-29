// ================================
function updateNumber(isIncrease) {
  const caseNumberField = document.getElementById("buy_phn");
  const caseNumberFieldValueString = caseNumberField.value;

  const caseNumberFieldValueNumber = parseInt(caseNumberFieldValueString);

  let newCaseNumner;
  if (isIncrease === true) {
    newCaseNumner = caseNumberFieldValueNumber + 1;
  } else {
    newCaseNumner = caseNumberFieldValueNumber - 1;
  }
  caseNumberField.value = newCaseNumner;
  return newCaseNumner;
}

function netPrice(produceNumber) {
  let newPrice = produceNumber * 1219;
  let totalPrice = document.getElementById("phnPriceCount");
  totalPrice.innerText = newPrice;
  return newPrice;
}

function subTotal(subTotalCost) {
  const phnSinglePriceCost = document.getElementById(subTotalCost);
  const phnSinglePriceCostString = phnSinglePriceCost.innerText;
  const phnSinglePriceCostNumber = parseInt(phnSinglePriceCostString);
  return phnSinglePriceCostNumber;
}

function calculate() {
  let returnPhnSinglePriceCostNumber = subTotal("phnPriceCount");
  let returnCoverSinglePriceCostNumber = subTotal("coverPriceCount");

  let totalCurrentSubTotal =
    returnPhnSinglePriceCostNumber + returnCoverSinglePriceCostNumber;

  let nowSubTotal = document.getElementById("subTotal");
  nowSubTotal.innerText = totalCurrentSubTotal;
}
// ================== addEven ===============

document.getElementById("phone_plus").addEventListener("click", function () {
  const returnNewCaseNumber = updateNumber(true);

  let returnPlusPhnTotalPrice = netPrice(returnNewCaseNumber);

  // =========== calculate total

  calculate();
});
document.getElementById("phn_minus").addEventListener("click", function () {
  const returnNewCaseNumber = updateNumber(false);

  let returnMinusPhnTotalPrice = netPrice(returnNewCaseNumber);

  // =================

  calculate();
});

// ============== Cover_part ==========

function updateCoverNumber(number) {
  let buyCoverInputField = document.getElementById("buy_cover");
  let buyCoverInputFieldValue = buyCoverInputField.value;
  let buyCoverInputFieldValueNumber = parseInt(buyCoverInputFieldValue);

  let newNumber;
  if (number === true) {
    newNumber = buyCoverInputFieldValueNumber + 1;
  } else {
    newNumber = buyCoverInputFieldValueNumber - 1;
  }
  buyCoverInputField.value = newNumber;
  return newNumber;
}

function newPrice(totalNumber) {
  let totalPrice = document.getElementById("coverPriceCount");
  let newTotalPrice = totalNumber * 59;
  totalPrice.innerText = newTotalPrice;
  return totalPrice;
}

// ==============AddEven =================

document.getElementById("cover_plus").addEventListener("click", function () {
  let returnNewPlus = updateCoverNumber(true);

  let returnPlusCoverTotalPrice = newPrice(returnNewPlus);

  // ============
  calculate();
});

document.getElementById("cover_minus").addEventListener("click", function () {
  let returnNewMinus = updateCoverNumber(false);

  let returnMinusCoverTotalPrice = newPrice(returnNewMinus);
  // ===============
  calculate();
});
