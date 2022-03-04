import {hotelRooms} from '../../hotelRooms.js';

// получаем коллекцию всех карточек с комнатами
let currentRoom = document.getElementsByClassName('room-card');
console.log("Все комнаты: ");
console.log(currentRoom);

for (let i=0; i<currentRoom.length; i++) {                     // перебираем полученную коллекцию карточек
    // console.log(currentRoom[i].getAttribute("data-room-id"));
    let currentRoomID = currentRoom[i].getAttribute("data-room-id");  // считываем ид комнаты
    currentRoom[i].setAttribute("data-card-id", String(i));           // добавляем дополнительный атрибут для идентификации карточки
    console.log(currentRoomID);
    let elemChildren = currentRoom[i].children;                // получаем все дочерние элементы карточки
    for (let k=0; k < elemChildren.length; k++) {                          // перебираем дочерние элементы
        if (elemChildren[k].classList.contains('slider-line')) {                    // если этот элемент имеет указанный класс     
            // let currentSliderLine = elemChildren[k];         //      запоминаем текущий узел-слайдер
            //перебирать весь массив с описанием комнат и если ИД совпадает, выбрать свойство pictire         
            for (let j=0; j < hotelRooms.length; j++) {
                if (hotelRooms[j]["id"] == currentRoomID) {
                    let imageArr = hotelRooms[j]["picture"];
                    imageArr.forEach(element => {                          // для каждого элемента в массиве picture создать img
                        let imgElem = document.createElement('img');
                        imgElem.src = String(element);
                        imgElem.alt = "apartment " + String(currentRoomID);
                        elemChildren[k].append(imgElem);
                        // console.log(element);
                        
                    });
                    drawSlider(currentRoom[i]);




                    // start here
                    // addRoomDetails(hotelRooms[j]);

                    console.log('номер: ' + hotelRooms[j]["suite"]);
                    console.log(hotelRooms[j]["luxury"]);
                    console.log('цена: ' + hotelRooms[j]["price"]);
                    console.log(hotelRooms[j]["rating"]);
                
                
                                            // для каждого элемента в массиве picture создать img
                                        
                    let roomSuite = document.createElement('div');
                    roomSuite.classList.add("room-card__details-"+String(i));
                    // roomSuite.style.innerHTML = "testtesttest";
                    
                    roomSuite.style.position = "relative";
                    roomSuite.style.top = "-312px";
                    roomSuite.style.height = "65px";       // 105px
                    roomSuite.style.width = "230px";       // 270px
                    roomSuite.style.border = "1px solid red";
                    roomSuite.style.padding = "20px";
                    // roomSuite.style.margin = "auto";
                    roomSuite.style.display = "flex";
                    roomSuite.style.justifyContent = "space-between";
                    roomSuite.style.flexWrap = "wrap";
                    elemChildren[k].parentElement.append(roomSuite);

                    let insertText = "";
                    let luxuryMark = "";
                    if (hotelRooms[j]["luxury"]) {
                        luxuryMark = "<span class='font_h3 text-marked'>люкс</span>";
                    }  
                    insertText += "<div class='font_h1' width='100px' height='25px' margin='auto'>№ "+ String(hotelRooms[j]["suite"]) + luxuryMark +"</div>";
                    insertText += "<div class='font_body' width='100px' height='25px' margin='auto'>"+ String(hotelRooms[j]["price"]) +" <span class='font_h3-gray50'>в сутки</span></div>";
                    insertText += "<div><hr width='230px' color='rgb(31,32,65)' opacity='0.1'></div>";
                    // insertText += "<hr width='230px'>";

                    let ratingMark = "+rate-button('куку')";
                    insertText += "<div width='100px' height='25px'>" + "+rate-button('куку')" + "</div>";
                    // insertText += "<div width='100px' height='25px'>Рейтинг "+ String(hotelRooms[j]["rating"]) +"</div>";
                    insertText += "<div class='font_body' width='100px' height='25px' margin='auto'>"+ String(hotelRooms[j]["feedback"]) + " <span class='font_h3-gray50'>отзывов</span></div>";
                    roomSuite.insertAdjacentHTML('afterbegin', insertText);






                    // end here
                }
            }
        }
    }
}



function drawSlider(roomObject) {
    // console.log('i am drawing slider for: ' + roomID);
    // console.log(roomObject.children);
    let offset = 0;

    const sliderLine = roomObject.querySelector('.slider-line');
    // console.log(sliderLine);

    let imgCount = sliderLine.children.length;
    console.log("Количество изображений в этом слайдере: " + String(imgCount));



    let dotFilled;
    createImageDots(imgCount);

    function createImageDots(imageCount) {
        console.log('Нужно точек: ' + imageCount);
        let left0 = 247;
        let left1;
        let top0 = 0;
        let top1;
        let dotEmpty;

        for (var i = 1; i <= imageCount; i++) {
            left1 = left0;
            top1 = top0;
            dotEmpty = document.createElement('div');
            dotEmpty.className = "dot dot"+i;
            dotEmpty.style.left = left1 + "px";
            dotEmpty.style.top = top1 + "px";
            roomObject.querySelector('.slider-dots').append(dotEmpty);
            left0 -= 14;
            top0 -= 9;
        }

        dotFilled = document.createElement('div');
        dotFilled.className = "dot dot0";
        dotFilled.style.left = left1 + "px";
        top1 -= 9;
        dotFilled.style.top = top1 + "px";
        dotFilled.style.backgroundImage = "url(../blocks/images/ellipse_filled.svg)";
        dotFilled.style.zIndex = "40";
        roomObject.querySelector('.slider-dots').append(dotFilled);
    }



    roomObject.querySelector('.room-card__image_next').addEventListener('click', function(){
        offset += 270;
        if (offset > 270*(imgCount-1)) {
            offset = 0;
        }
        sliderLine.style.left = -1 * offset + 'px';

                // изменение положения закрашенной точки
        let dotFilledX = dotFilled.style.left.slice(0, dotFilled.style.left.length-2);
        if (dotFilledX < 247) {
            dotFilled.style.left = String(Number(dotFilledX) + 14) + "px";
        }
        else {
            dotFilled.style.left = String(247 - 14*(imgCount-1)) + "px";
        }   
    })



    roomObject.querySelector('.room-card__image_prev').addEventListener('click', function(){
        offset -= 270;
        if (offset < 0) {
            offset = 270*(imgCount-1);
        }
        sliderLine.style.left = -1 *offset + 'px';

                // изменение положения закрашенной точки
        let dotFilledX = dotFilled.style.left.slice(0, dotFilled.style.left.length-2);
        if (dotFilledX > 205) {
            dotFilled.style.left = String(Number(dotFilledX) - 14) + "px";
        }
        else {
            dotFilled.style.left = "247px";
        }
    })

}




// console.log('читаю из hotelRooms');
// console.log(hotelRooms);








/////////////////////////////////////////////////////////////////////////////////////

// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// let imageCount = document.getElementsByTagName('img').length;
// // console.log(imageCount);

// let dotFilled;

// function createImageDots(imgCount) {
//     let left0 = 247;
//     let left1;
//     let top0 = 0;
//     let top1;
//     let dotEmpty;

//     for (var i = 1; i <= imgCount; i++) {
//         left1 = left0;
//         top1 = top0;
//         dotEmpty = document.createElement('div');
//         dotEmpty.className = "dot dot"+i;
//         dotEmpty.style.left = left1 + "px";
//         dotEmpty.style.top = top1 + "px";
//         document.querySelector('.slider-dots').append(dotEmpty);
//         left0 -= 14;
//         top0 -= 9;
//     }

//     dotFilled = document.createElement('div');
//     dotFilled.className = "dot dot0";
//     dotFilled.style.left = left1 + "px";
//     top1 -= 9;
//     dotFilled.style.top = top1 + "px";
//     dotFilled.style.backgroundImage = "url(../blocks/images/ellipse_filled.svg)";
//     dotFilled.style.zIndex = "40";
//     document.querySelector('.slider-dots').append(dotFilled);
// }

// createImageDots(imageCount);

// document.querySelector('.room-card__image_next').addEventListener('click', function(){
//     offset += 270;
//     if (offset > 810) {
//         offset = 0;
//     }
//     sliderLine.style.left = -1 * offset + 'px';

//     // изменение положения закрашенной точки
//     let dotFilledX = dotFilled.style.left.slice(0, dotFilled.style.left.length-2);
//     if (dotFilledX < 247) {
//         dotFilled.style.left = String(Number(dotFilledX) + 14) + "px";
//     }
//     else {
//         dotFilled.style.left = "205px";
//     }    
// });

// document.querySelector('.room-card__image_prev').addEventListener('click', function(){
//     offset -= 270;
//     if (offset < 0) {
//         offset = 810;
//     }
//     sliderLine.style.left = -1 *offset + 'px';

//     // изменение положения закрашенной точки
//     let dotFilledX = dotFilled.style.left.slice(0, dotFilled.style.left.length-2);
//     if (dotFilledX > 205) {
//         dotFilled.style.left = String(Number(dotFilledX) - 14) + "px";
//     }
//     else {
//         dotFilled.style.left = "247px";
//     }
// });