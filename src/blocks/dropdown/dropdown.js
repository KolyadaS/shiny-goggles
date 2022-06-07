let dropdownCollection = document.getElementsByClassName('dropdown');
for (let entry of dropdownCollection) {
    dropdownManager(entry);
}

function dropdownManager(dropdown) {
    let allGuestsCount = 0;
    const clearButton = dropdown.querySelector('.dropdown__button_clear');
    const applyButton = dropdown.querySelector('.dropdown__button_apply');
    let dropdownBtnsCollection = dropdown.getElementsByTagName('button'); 

    function checkClearBtnVisibility(button) {
        if (allGuestsCount === 0) {
            button.style.visibility = "hidden";
        }
        else { button.style.visibility = "visible"; }
    }

    checkClearBtnVisibility(clearButton);

    for (let button of dropdownBtnsCollection) {
        button.addEventListener('click', function (event) {       // добавить слушатель события "клик" со следующей функцией
            let indexOfPressedBtn = event.target.classList.value.substr(-1);     // индекс из имени класса нажатой кнопки
            let guestCountLabel = dropdown.querySelector('.guest-content-' + indexOfPressedBtn);
            let currentGuestsCount = Number(guestCountLabel.innerHTML);   // текущее количество гостей

            function changeGuestCount (amountOfChange) {
                currentGuestsCount += amountOfChange;
                allGuestsCount += amountOfChange;
                guestCountLabel.innerHTML = String(currentGuestsCount);
                checkClearBtnVisibility(clearButton);
            }

            if ((event.target.classList.contains('button_minus')) && (Number(guestCountLabel.innerHTML) > 0)) {
                changeGuestCount(-1);
            } else if (event.target.classList.contains('button_plus')) {
                changeGuestCount(1);
            }
        });
    };

    clearButton.onclick = function () {
        for (let indexOfGuestCountLabel = 0; indexOfGuestCountLabel < (dropdownBtnsCollection.length / 2); indexOfGuestCountLabel++) {
            dropdown.querySelector('.guest-content-' + indexOfGuestCountLabel).innerHTML = '0';
        }
        allGuestsCount = 0;
        dropdown.querySelector('.dropdown__menu').innerHTML = 'Сколько гостей';
        checkClearBtnVisibility(clearButton);
    }

    function wordInflexion(num, wordForms) {        // окончание слова "гость" в зависимости от общего количества гостей
        num = Math.abs(num);
        var num1 = num % 10;
        if (num > 10 && num < 20) { return wordForms[2]; }
        if (num1 == 1) { return wordForms[0]; }
        if (num1 > 1 && num1 < 5) { return wordForms[1]; }
        return wordForms[2];
    }

    applyButton.onclick = function () {
        dropdown.querySelector('.dropdown__menu').innerHTML = allGuestsCount + " " + wordInflexion(allGuestsCount, ['гость', 'гостя', 'гостей']);
    }

}