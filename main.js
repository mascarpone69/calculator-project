let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".buttons button"));

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                display.innerText = Function('"use strict"; return (' + display.innerText + ')')();
                } catch (e) {
                    display.innerText = "Error!"
                }
                break;
            case "+/-":
                if (display.innerText !== "0") {
                    if (display.innerText.startsWith("-")) {
                        display.innerText = display.innerText.slice(1);
                    } else {
                        display.innerText = "-" + display.innerText;
                    }
                }
                break;
            case "%":
                let passedText = display.innerText + "/100";
                try {
                    display.innerText = Function('"use strict"; return (' + passedText + ')')();
                } catch (e) {
                    display.innerText = "Error!"
                    }
                break;
            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                display.innerText = e.target.innerText;
            }
                else {
                    display.innerText += e.target.innerText;
                }
        }
    });
}) 