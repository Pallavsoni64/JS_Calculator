let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == '❌'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if (buttonText == '🔙'){
            buttonText = screenValue;
            screenValue = screenValue.slice(0, -1);
            screen.value = buttonText;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
