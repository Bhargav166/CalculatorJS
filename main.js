const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })

    equalBtn.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = 'Please enter';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clearBtn.addEventListener('click', function (e) {
        screen.value = '';
    })

});