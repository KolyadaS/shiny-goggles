import {hotelRooms} from '../hotelRooms.js';
// import createAllThis from '../blocks/room-card/room-card.js';
import createRoomMiniCard from '../blocks/room-card/room-card.js';

console.log('room searching...');
let roomsCollection = hotelRooms;
let roomsWrapper = document.getElementsByClassName('rooms-wrapper');
console.log(roomsWrapper);
console.log(roomsCollection);
roomsCollection.forEach(element => {
    console.log(element);
    // roomCardHTML(element['id'], roomsWrapper);


    let divElem = document.createElement('div');
    divElem.className += "room";
    roomsWrapper[0].append(divElem);
    let currentNode = divElem;
    createRoomMiniCard(element, currentNode);

})