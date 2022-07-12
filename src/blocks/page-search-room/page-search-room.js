import { hotelRooms } from '../../hotelRooms.js';
import createRoomMiniCard from '../room-card/room-card.js';

let roomsCollection = hotelRooms;
let roomsWrapper = document.getElementsByClassName('rooms-wrapper');
roomsCollection.forEach(element => {
    let divElem = document.createElement('div');
    divElem.className += "room";
    roomsWrapper[0].append(divElem);
    let currentNode = divElem;
    createRoomMiniCard(element, currentNode);
})