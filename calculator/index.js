let screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
let screenValue = '';
buttons.forEach((btn)=>{
    let btntext=btn.target.innerText;
    screenValue+=btntext;
    screen.value=screenValue;
})

       







if (buttonText == 'Back') {
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText=="AC")
            {
                screenValue="";
                screen.value=screenValue;
            }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


