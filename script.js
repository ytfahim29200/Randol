function generateRandomNumber() {
    var min = 1;
    var max = 100;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = 'Random Number: ' + randomNumber;
}
