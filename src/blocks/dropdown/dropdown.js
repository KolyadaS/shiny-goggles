var dropdownBtns = Array.from(document.getElementsByTagName('button'));   // преобразование HTMLCollection в массив
var allGuestsCount = 0;

function correctVisibility(button) {             // спрятать или показать кнопку очистить
    if (allGuestsCount == 0) {                         // в зависимости от общего количества гостей
        button.style.visibility = "hidden";
    }
    else { button.style.visibility = "visible"; }
}

correctVisibility(document.querySelector('.dropdown__button_clear'));   // спрятать кнопку очистить


dropdownBtns.forEach((element) => {                            // для каждого элемента массива
    element.addEventListener('click', function (event) {       // добавить слушатель события "клик" со следующей функцией
        let index = event.target.classList.value.substr(-1);     // индекс из имени класса нажатой кнопки
        let guestCount = Number(document.querySelector('.guest-content-' + index).innerHTML);   // текущее количество гостей
        if (event.target.classList.contains('button_minus')) {           // если нажата кнопка "минус"
            if (Number(document.querySelector('.guest-content-' + index).innerHTML) > 0) {
                guestCount += -1;
                allGuestsCount += -1;                                           // уменьшить количество гостей
                document.querySelector('.guest-content-' + index).innerHTML = String(guestCount);
                correctVisibility(document.querySelector('.dropdown__button_clear'));   // проверить, не надо ли спрятать кнопку очистить
            }
        }
        else if (event.target.classList.contains('button_plus')) {   // если нажата кнопка "плюс"
            guestCount += 1;
            allGuestsCount += 1;                                        // увеличить количество гостей
            document.querySelector('.guest-content-' + index).innerHTML = String(guestCount);
            correctVisibility(document.querySelector('.dropdown__button_clear'));   // показать кнопку очистить
        }
    });
});

document.querySelector('.dropdown__button_clear').onclick = function () {  // кнопка очистить
    for (let index = 0; index < (dropdownBtns.length / 2); index++) {     // сбросить значения в 0
        document.querySelector('.guest-content-' + index).innerHTML = '0';
    }
    allGuestsCount = 0;
    document.querySelector('.dropdown__menu').innerHTML = 'Сколько гостей';    // сбросить подпись с общим количеством гостей
    correctVisibility(document.querySelector('.dropdown__button_clear'));  // спрятать кнопку очистить
}

function wordInflexion(num, wordForms) {        // окончание слова "гость" в зависимости от общего количества гостей
    num = Math.abs(num);
    var num1 = num % 10;
    if (num > 10 && num < 20) { return wordForms[2]; }
    if (num1 == 1) { return wordForms[0]; }
    if (num1 > 1 && num1 < 5) { return wordForms[1]; }
    return wordForms[2];
}

document.querySelector('.dropdown__button_apply').onclick = function () {  // кнопка применить
    document.querySelector('.dropdown__menu').innerHTML = allGuestsCount + " " + wordInflexion(allGuestsCount, ['гость', 'гостя', 'гостей']);
}