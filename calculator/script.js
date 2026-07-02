let display = document.getElementById("display");

function press(value) {
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}