document.addEventListener("DOMContentLoaded", function() {
    var billAmountInput = document.getElementById("billAmount");
    var tipPercentInput = document.getElementById("tipPercent");
    var peopleAmountInput = document.getElementById("peopleAmount");

    var tipText = document.getElementById("tipPerPerson");
    var billText = document.getElementById("billPerPerson");

    billAmountInput.addEventListener("input", calculate);
    billAmountInput.addEventListener('blur', calculate);
    tipPercentInput.addEventListener('blur', calculate);
    peopleAmountInput.addEventListener('blur', calculate);

    function calculate() {
        var billAmount = parseFloat(billAmountInput.value);
        var tipPercent = parseFloat(tipPercentInput.value) / 100;
        var personAmount = parseFloat(peopleAmountInput.value);

        if (personAmount !== 0) {
            var tip = (billAmount * tipPercent) / personAmount;
            var bill = (billAmount / personAmount) + tip;

            tipText.textContent = "$" + tip.toFixed(2);
            billText.textContent = "$" + bill.toFixed(2);
        } else {
            tipText.textContent = "$0.00";
            billText.textContent = "$0.00";
        }
    }
})