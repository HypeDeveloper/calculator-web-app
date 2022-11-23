console.log(eval("2+3+4/6+8"));
let err = false
const buttons = document.querySelectorAll(".bttn");
const display = document.getElementById("result");
const clearResult = document.getElementById("clearResult").style;
buttons.forEach((bttn) => {
    const bttnValue = bttn.children[0].textContent;
    bttn.addEventListener("click", () => {
        if (bttnValue == "CA") {
            err=true
            ClearAnimation();
            return;
        }
        if (bttnValue == "=") {
            try {
                ShowResult();
            } catch (error) {
                ErrorText("Syntax Error");
            }
            return;
        }
        if (!err) {
            display.append(bttnValue);
        }
        textAdjust(display.textContent)
        
    });
});

function ErrorText(text) {
    err=true
    display.textContent = text;
    textAdjust(text)
    setTimeout(() => {
        ClearAnimation();
    }, 1800);
}

function textAdjust(text) {
    let textString = new String(text).split("").length
    if (textString < 7) {
        display.style.fontSize = "60px"
    }
    if (textString > 9) {
        display.style.fontSize = "40px";
    }
    if (textString > 14) {
        display.style.fontSize = "30px";
    }
    if (textString > 20) {
        display.style.fontSize = "25px";
    }
    if (textString > 25) {
        display.style.fontSize = "20px";
    }
    if (textString > 32) {
        ErrorText("Limit Reached")
    }
}

function ShowResult() {
    let displayValue = display.textContent;
    console.log(eval(displayValue));
    if (eval(displayValue) == Infinity) {
        ErrorText("Infinity");
    } 
    textAdjust(eval(displayValue))
    display.textContent = eval(displayValue);
}

function ClearAnimation() {
    clearResult.height = "430px";
    clearResult.width = "430px";
    clearResult.transition = "2s";
    clearResult.right = "-50px";
    clearResult.bottom = "-220px";
    clearResult.background = "black";
    clearResult.opacity = "0.5s";
    setTimeout(() => {
        display.textContent = "";
    }, 1500)

    setTimeout(() => {
        clearResult.height = "10px";
        clearResult.width = "10px";
        clearResult.right = "-40px";
        clearResult.bottom = "-60px";
        clearResult.transition = "0.7s";
        clearResult.opacity = "0s";
        clearResult.background = "none";
        err=false
    }, 2000)
}