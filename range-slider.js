console.log("bebe");

// кружочки слайдера и инфа о них
let leftMark = document.querySelector('.range-slider__block-min');
let rightMark = document.querySelector('.range-slider__block-max');
let colorRange = document.querySelector('.range-slider__color-range');
let minPosition = document.querySelector('.range-slider__wrapper').offsetLeft;   // граница минимума
let maxPosition = document.querySelector('.range-slider__wrapper').offsetWidth;  // граница максимума
let maxForLeftMark = maxPosition;
let minForRightMark = minPosition;
console.log('maxPosition: ' + maxPosition);

// до движения кружков эти занчения отсутствуют, хотя нужны для вычисления ширины цветной полоски слайдера
leftMark.style.left = "0px";
rightMark.style.left = "250px";

console.log(leftMark.style.left);
console.log(rightMark.style.left);

let flag = 0;


function onMouseDown() {
    flag = 1;
}

function onMouseUp() {
    flag = 0;
}

// function onMouseOut() {
//     flag = 0;
// }

function onMouseMove() {
    if (flag === 1) {
        if ((event.pageX > minPosition) && (event.pageX < maxPosition)) {
            moveAt(event.target, event.pageX);
        } else
        return f = 0;
    }
}

function moveAt(elem, pageX) {
    // двигаем кружок
    elem.style.left = pageX - elem.offsetWidth + 'px';

    // изменение цветной полоски слайдера - минимальное значение
    if (event.target.className.includes("range-slider__block-min")) {
        colorRange.style.left = pageX - elem.offsetWidth + 'px';
        colorRange.style.width = String(rightMark.style.left.slice(0, -2) - event.target.style.left.slice(0, -2) + elem.offsetWidth) + "px";
    }
    // изменение цветной полоски слайдера - максимальное значение
    if (event.target.className.includes("range-slider__block-max")) {
        colorRange.style.width = String(event.target.style.left.slice(0, -2) - leftMark.style.left.slice(0, -2) + elem.offsetWidth) + "px";
    }
}




document.addEventListener('onmousedown', onMouseDown);
document.addEventListener('onmouseup', onMouseUp);
document.addEventListener('onmousemove', onMouseMove);
// document.addEventListener('onmouseout', onMouseOut);



// {
//     console.log('nen');
//     this.onmousemove = function() {
//         //console.log('полетели');
//         let coords = this.getBoundingClientRect();
//         this.left = coords.left;
//         console.log(coords.left);
//         this.onmouseup = function() {
//             console.log('фух');
//         }

//     }
// }



// function myGetCoords(elem) {
//     let coords = elem.getBoundingClientRect();
//     return {
//         top: coords.top + window.pageYOffset,
//         left: coords.left + window.pageXOffset,
//         leftX: coords.left,
//         rigth: coords.left + window.pageXOffset + coords.width,
//         bottom: coords.top + window.pageYOffset + coords.height,
//         width: coords.width
//     }
// }

// var leftMark;
// leftMark = document.querySelector('.range-slider__block-min');
// leftMark.style.backgroundColor = "red";

// var rightMark;
// rightMark = document.querySelector('.range-slider__block-max');
// rightMark.style.backgroundColor = "orange";


// function moveRange(elem) {
//     let elemCoords;
//     elemCoords = elem.getBoundingClientRect();
//     // console.log("I am in moveRange!");
//     console.log(elemCoords);
//     // console.log(elemCoords.left);
//     let newleft;
//     newleft = elemCoords.left + 50;
//     // console.log("newleft = " + newleft);
//     elem.style.left = newleft + 'px';
//     // console.log(elem.style.left);
// }

// function onMouseDown(e) {
//     let x = e.pageX;
//     let y = e.pageY;
//     document.querySelector('.bubu').innerHTML = "X : " + x + ", Y : " + y;
//     document.querySelector('.range-slider__block-min').style.left = x - 15 + 'px';
//     // let newleft;
//     // newleft = elemCoords.left
//     // return{
//     //     x: x
//     // }
// }

// function onMouseMove(e) {
//     let x = e.pageX;
//     let y = e.pageY;
//     document.querySelector('.bubu').innerHTML = "X : " + x + ", Y : " + y;
//     document.querySelector('.range-slider__block-min').style.left = x - 15 + 'px';
//     // let newleft;
//     // newleft = elemCoords.left
//     // return{
//     //     x: x
//     // }
// }

// // leftMark = document.querySelector('.range-slider__block-min');
// document.addEventListener('onmousedown', onMouseDown);
// document.addEventListener('onmousemove', onMouseMove);








// // function getCoords(elem) {
// //     /*Получаем координаты относительно окна браузера*/
// //     let coords = elem.getBoundingClientRect();
// //     /*Высчитываем значения координат относительно документа, вычисляя прокрутку документа*/
// //     return {
// //         top: coords.top + window.pageYOffset,
// //         left: coords.left + window.pageXOffset,
// //         leftX: coords.left,
// //         rigth: coords.left + window.pageXOffset + coords.width,
// //         bottom: coords.top + window.pageYOffset + coords.height,
// //         width: coords.width
// //     }
// // }


// // function moveRange(elem) {
// //     /*Находим нужный элемент по классу или id*/
// //     var coords = getCoords(elem);

// //     /*Определяем зону окрашывания*/
// //     var colorRange = elem.parentElement.children[1];
// //     var f;//устанавливаем флаг для определения мин или макс элемента
// //     var value; //значение фильтра

// //     /*Определяем второй ползунок и родителя*/
// //     var parent = {}
// //     parent.element = elem.parentElement;
// //     parent.coords = getCoords(parent.element);

// //     var block2 = {}
// //     if (elem.classList.contains('range-slider__block-min')) {
// //         block2.element = elem.parentElement.children[2];
// //         block2.coords = getCoords(block2.element);
// //         f = 0;
// //     } else {
// //         block2.element = elem.parentElement.children[0];
// //         block2.coords = getCoords(block2.element);
// //         f = 1;
// //     }

// //     /*Делаем индикатор над ползунком*/
// //     var indicator = document.createElement('div');
// //     if (elem.children.length) {
// //         elem.innerHTML = '';//обнуляем предыдущее значение
// //     }
// //     elem.appendChild(indicator);

// //     document.addEventListener('mousemove', onMouseMove);
// //     document.addEventListener('mouseup', onMouseUp);
// //     document.addEventListener('touchmove', onMouseMove);
// //     document.addEventListener('touchend', onMouseUp);

// //     /*выключаем браузерное событие DaD*/
// //     elem.ondragstart = function () {
// //         return false;
// //     }

// //     function onMouseMove(e) {

// //         /*Определяем смещение влево*/
// //         e.preventDefault();//предотвратить запуск выделения элементов

// //         /*Определяем положение мыши в зависимости от устройства*/
// //         /*На мобильных устройствах может фиксироваться несколько точек касания, поэтому используется массив targetTouches*/
// //         /*Мы будем брать только первое зафиксированое касание по экрану targetTouches[0]*/
// //         if (e.touches === undefined) {
// //             var pos = e.clientX;
// //         } else {
// //             var pos = e.targetTouches[0].clientX;
// //         }

// //         /*Устанавливаем границы движения ползунка*/
// //         let newLeft = pos - parent.coords.leftX;
// //         let rigthEdge = parent.coords.width - (coords.width + 1);

// //         if (newLeft < 0) {
// //             newLeft = 0;
// //         } else if (newLeft > rigthEdge) {
// //             newLeft = rigthEdge;
// //         }
// //         if (f == 0 && pos > block2.coords.left - block2.coords.width) {
// //             newLeft = block2.coords.left - block2.coords.width - parent.coords.leftX;
// //         } else if (f == 1 && pos < block2.coords.rigth + 5) {
// //             newLeft = block2.coords.rigth - block2.coords.left;
// //         }
// //         /*устанавливаем отступ нашему элементу*/
// //         elem.style.left = newLeft + 'px';

// //         //     Определяем значение фильтра
// //         let rangeMin = +document.querySelector('.filter number:first-child').innerHTML;
// //         let rangeMax = +document.querySelector('.filter number:last-child').innerHTML;
// //         if (f == 0) {
// //             value = (newLeft / (parent.coords.width / (rangeMax - rangeMin)) + rangeMin).toFixed(1);
// //         } else {
// //             value = (newLeft / (parent.coords.width / (rangeMax - rangeMin)) + 0.3 + rangeMin).toFixed(1);
// //         }

// //         /*Выводим значение над ползунком*/
// //         indicator.style.position = 'absolute';
// //         indicator.style.fontSize = "14px";
// //         indicator.style.left = - coords.width / 2 + "px";
// //         indicator.style.top = parseFloat(window.getComputedStyle(elem).getPropertyValue('top')) - 10 + "px";

// //         // /*Для красоты слайдера уберем вывод значений в начальной и конечной точках*/
// //         // if (value <= rangeMin) {
// //         //     indicator.innerHTML = "";
// //         // } else if (value >= rangeMax) {
// //         //     indicator.innerHTML = "";
// //         // } else {
// //         //     indicator.innerHTML = value;
// //         // }


// //         /*Делаем цветную плашечку диапазона выбора*/
// //         if (f == 0) {
// //             colorRange.style.left = newLeft + coords.width + "px";
// //             colorRange.style.width = block2.coords.left - getCoords(elem).left - coords.width + "px";
// //         } else {
// //             colorRange.style.left = block2.coords.left - parent.coords.leftX + "px";
// //             colorRange.style.width = getCoords(elem).left - block2.coords.left + "px";
// //         }
// //     }

// //     function onMouseUp() {
// //         document.removeEventListener('mouseup', onMouseUp);
// //         document.removeEventListener('mousemove', onMouseMove);
// //         document.removeEventListener('touchend', onMouseUp);
// //         document.removeEventListener('touchmove', onMouseMove);
// //     }
// // }
