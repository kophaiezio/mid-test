

function sum() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    if (isNaN(A) || isNaN(B)) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số.";
    } else {
        document.getElementById('result').innerHTML = Number(A) + Number(B);
    }
}

function subtract() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    if (isNaN(A) || isNaN(B)) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số.";
    } else {
        document.getElementById('result').innerHTML = Number(A) - Number(B);
    }
}

function multiply() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    if (isNaN(A) || isNaN(B)) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số.";
    } else {
        document.getElementById('result').innerHTML = Number(A) * Number(B);
    }
}

function divide() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    if (isNaN(A) || isNaN(B)) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số.";
    } else if (Number(B) == 0) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số khác 0.";
    
    } else {
        document.getElementById('result').innerHTML = Number(A) / Number(B);
    }
}

function reset() {
    document.getElementById('A').value = "";
    document.getElementById('B').value = "";
    document.getElementById('result').innerHTML = "";
}

