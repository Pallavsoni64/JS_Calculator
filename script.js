let screen = document.querySelector('#input');
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
            screenValue = screenValue.slice(0, -1);
            buttonText = screenValue;
            screen.value = buttonText;
        }
        else if(buttonText/0 == true){
            screen.value = 'Infinity'
        }
        else if(0/0 == true){
            screen.value = 'Nan'
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
