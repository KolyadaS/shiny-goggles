import "./scss/style.scss";

function importAll(r) {
    r.keys().forEach(r)
  }

importAll(require.context('./blocks/images', false, /\.*$/));

import "./blocks/rate-button/rate-button.js";
import "./blocks/room-card/room-card.js";
import "./blocks/dropdown/dropdown.js";
import './blocks/page-search-room/page-search-room.js';


const searchRoomButton = document.getElementsByClassName('search-form__button');
const homeContainer = document.getElementsByClassName('home-container');
const searchRoomContainer = document.getElementsByClassName('search-room-container_display');

searchRoomButton[0].onclick = function (e) {
    searchRoomContainer[0].style.display = "flex";
    homeContainer[0].style.display = "none";
}  