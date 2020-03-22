var showScreen = document.getElementById('screen');
var totalIncome = document.getElementById('totalIncome');
var other = document.getElementById('other');
var education = document.getElementById('education');
var houseRent = document.getElementById('houseRent');
var btn = document.getElementById('btn');

showScreen.innerHTML = "0"

btn.addEventListener('click', ()=> {
    calculateExpense();
});


function calculateExpense(){
    const expense = parseInt(houseRent.value) + parseInt(education.value) + parseInt(other.value);
    const result = parseInt(totalIncome.value) - expense;
    showScreen.innerHTML = result
    clearFields()
}


function clearFields(){
    houseRent.value = ""
    other.value = ""
    education.value =""
    totalIncome.value =""
}

