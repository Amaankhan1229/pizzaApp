function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let InputScreen = document.getElementById('display').value;
    let result=eval(InputScreen);
    document.getElementById('display').value = result;
}