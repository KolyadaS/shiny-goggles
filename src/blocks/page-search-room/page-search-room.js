import {hotelRooms} from '../../hotelRooms.js';
import createRoomMiniCard from '../room-card/room-card.js';

console.log('page-search-room.js: room searching...');
let roomsCollection = hotelRooms;
let roomsWrapper = document.getElementsByClassName('rooms-wrapper');
console.log(roomsWrapper);
console.log(roomsCollection);
roomsCollection.forEach(element => {
    let divElem = document.createElement('div');
    divElem.className += "room";
    roomsWrapper[0].append(divElem);
    let currentNode = divElem;
    createRoomMiniCard(element, currentNode);
})