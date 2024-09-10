let counterElement = document.getElementById("count");



function decrease() {
    let previousCountValue = counterElement.textContent;
    let updatedCountValue = parseInt(previousCountValue) -1;

    if (updatedCountValue < 0) {
        counterElement.style.color = "red"
        counterElement.style.fontWeight = 900
        counterElement.style.fontSize = 64;
    }
    else if (updatedCountValue > 0) {
        counterElement.style.color = "green";
        counterElement.style.fontWeight = 900
        counterElement.style.fontSize = 64;
    }
    else {
        counterElement.style.color = "black";
        counterElement.style.fontWeight = 900
        counterElement.style.fontSize = 64;
    }

    counterElement.textContent = updatedCountValue;
    
}

function reset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black";
    counterElement.style.fontWeight = 900
    counterElement.style.fontSize = 64;
}

function increase() {
    let previousCountValue = counterElement.textContent;
    let updatedCountValue = parseInt(previousCountValue) + 1;
    if (updatedCountValue > 0) {
        counterElement.style.color = "green";
        counterElement.style.fontWeight = 900
        counterElement.style.fontSize = 64;
    }
    else if (updatedCountValue < 0) {
        counterElement.style.color = "red"
        counterElement.style.fontWeight = 900
        counterElement.style.fontSize = 64;
    }
    else {
        counterElement.style.color = "black";
        counterElement.style.fontWeight = 900;
        counterElement.style.fontSize = 64;
    }
    counterElement.textContent = updatedCountValue
}