import {hotelRooms} from '../../hotelRooms.js';
// export default createAllThis;
export default createRoomMiniCard;


// createAllThis();


function createRoomMiniCard(roomObj, nodeToAppend) {
        
    function createDiv(classes, placeToAppend) {
        let newDiv = document.createElement('div');
        newDiv.className += classes;
        placeToAppend.append(newDiv);
        return newDiv;
    }

    let divElem = createDiv("room-card", nodeToAppend);
    divElem.setAttribute('data-room-id', roomObj['id']);
    let currentRoomObj = divElem;
    
    nodeToAppend = divElem;
    divElem = createDiv("slider-line slider-line-" + roomObj['id'], nodeToAppend);
    createSliderLine(roomObj, divElem);

    divElem = createDiv("slider-dots slider-dots-" + roomObj['id'], nodeToAppend);
    divElem = createDiv("room-card__image_prev room-card__image_prev-" + roomObj['id'], nodeToAppend);
    divElem = createDiv("room-card__image_next room-card__image_next-" + roomObj['id'], nodeToAppend);
    divElem = createDiv("room-card__details", nodeToAppend);

    
    
    
    
    
    drawSlider(currentRoomObj);

    function drawSlider(roomObject) {
        let offset = 0;
        const sliderLine = roomObject.querySelector('.slider-line');
        let imgCount = sliderLine.children.length;
    
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
            if (dotFilledX > 270-15-8-14*(imgCount-1)) {                        // > 205
                dotFilled.style.left = String(Number(dotFilledX) - 14) + "px";
            }
            else {
                dotFilled.style.left = "247px";
            }
        })
    
    }








    nodeToAppend = divElem;
    divElem = createDiv("details__suite font_h3", nodeToAppend);
    divElem.innerHTML = "№ <span class='font_h1'>000</span>";
    divElem = createDiv("details__price font_body", nodeToAppend);
    divElem.innerHTML = '<span class="price-and-ruble-sign">0</span> в сутки';
    divElem = createDiv("room-card__details_horizontal-line", nodeToAppend);
    divElem = createDiv("details__rating", nodeToAppend);

    // +rate-button("rating-"+roomID)

    divElem = createDiv("details__feedback font_body", nodeToAppend);
    divElem.innerHTML = 'отзывов нет';
}




function createSliderLine(roomObj, placeToAppend) {
    let imageArr = roomObj["picture"];
    // console.log("images: ");
    // console.log(imageArr);
    if (imageArr.length > 0) {
        imageArr.forEach(element => {                          // для каждого элемента в массиве picture создать img
            let imgElem = document.createElement('img');
            imgElem.src = String(element);
            imgElem.alt = "apartment " + String(roomObj['id']);
            imgElem.style.width = "270px";
            placeToAppend.append(imgElem); 
        });
    }
    else {
        let noImgElem = document.createElement('img');
        noImgElem.src = "../blocks/images/no-image-icon.png";
        noImgElem.alt = "Изображение отсутствует";
        noImgElem.style.marginLeft = "35px";
        noImgElem.style.marginTop = "auto";
        placeToAppend.append(noImgElem);
    }
}






















function createAllThis() {
    // получаем коллекцию всех карточек с комнатами
let currentRoom = document.getElementsByClassName('room-card');
console.log("Все комнаты: ");
console.log(currentRoom);

for (let i=0; i<currentRoom.length; i++) {                     // перебираем полученную коллекцию карточек
    let currentRoomID = currentRoom[i].getAttribute("data-room-id");  // считываем ид комнаты
    let dataCardId = String(i);
    currentRoom[i].setAttribute("data-card-id", dataCardId);           // добавляем дополнительный атрибут для идентификации карточки
    let elemChildren = currentRoom[i].children;                // получаем все дочерние элементы карточки
    for (let k=0; k < elemChildren.length; k++) {                          // перебираем дочерние элементы
        if (elemChildren[k].classList.contains('slider-line')) {                    // если этот элемент имеет указанный класс     
            // let currentSliderLine = elemChildren[k];         //      запоминаем текущий узел-слайдер
            //перебирать весь массив с описанием комнат и если ИД совпадает, выбрать свойство pictire         
            for (let j=0; j < hotelRooms.length; j++) {
                if (hotelRooms[j]["id"] == currentRoomID) {
                    let imageArr = hotelRooms[j]["picture"];
                    if (imageArr.length > 0) {
                        imageArr.forEach(element => {                          // для каждого элемента в массиве picture создать img
                            let imgElem = document.createElement('img');
                            imgElem.src = String(element);
                            imgElem.alt = "apartment " + String(currentRoomID);
                            imgElem.style.width = "270px";
                            elemChildren[k].append(imgElem); 
                        });
                    }
                    else {
                        let noImgElem = document.createElement('img');
                        noImgElem.src = "../blocks/images/no-image-icon.png";
                        noImgElem.alt = "Изображение отсутствует";
                        noImgElem.style.marginLeft = "35px";
                        noImgElem.style.marginTop = "auto";
                        elemChildren[k].append(noImgElem);
                    }

                    drawSlider(currentRoom[i]);
                  
                    let roomSuite;
                    roomSuite = currentRoom[i].querySelector('.room-card__details');
                    roomSuite.classList.add("room-card__details-" + dataCardId);

                    let luxuryMark = "";
                    if (hotelRooms[j]["luxury"]) {luxuryMark = "<span class='font_h3 text-marked'>люкс</span>";}
                    roomSuite.querySelector('.details__suite').innerHTML = "№ <span class='font_h1'>" + String(hotelRooms[j]["suite"]) + "</span>" + luxuryMark;
                    
                    roomSuite.querySelector('.price-and-ruble-sign').innerHTML = String(hotelRooms[j]["price"]);

                    let roomSuiteRating;
                    roomSuiteRating = roomSuite.querySelector(".details__rating");
                    let fieldsetClassList = roomSuiteRating.getElementsByTagName("fieldset")[0].classList[1];
                    let inputId = roomSuiteRating.getElementsByTagName("fieldset")[0].classList[1] + "_value_" + String(hotelRooms[j]["rating"]);
                    document.getElementById(inputId).checked = "true";
                    roomSuiteRating.contentEditable = "false";
                    
                    roomSuite.querySelector('.details__feedback').innerHTML = "<span weight='bold'>" + String(hotelRooms[j]["feedback"]) + "</span> отзывов";
                    
                }
            }
        }
    }
}



function drawSlider(roomObject) {
    let offset = 0;
    const sliderLine = roomObject.querySelector('.slider-line');
    let imgCount = sliderLine.children.length;

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
        if (dotFilledX > 270-15-8-14*(imgCount-1)) {                        // > 205
            dotFilled.style.left = String(Number(dotFilledX) - 14) + "px";
        }
        else {
            dotFilled.style.left = "247px";
        }
    })

}

}