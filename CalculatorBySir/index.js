
var buttons = document.querySelectorAll('button');
let screenValue = '';
function takeInput(value){
    console.log(value);
    if(value=="+") {
            str+="+";
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

}

