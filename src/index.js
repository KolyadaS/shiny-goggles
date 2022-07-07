import "./scss/style.scss";

function importAll(r) {
    r.keys().forEach(r)
  }

importAll(require.context('./blocks/images', false, /\.*$/));

import "./blocks/rate-button/rate-button.js";
import "./blocks/room-card/room-card.js";
import "./blocks/dropdown/dropdown.js";
import './blocks/page-search-room/page-search-room.js';

const homeContainer = document.getElementsByClassName('home-container');
const searchRoomContainer = document.getElementsByClassName('search-room-container_display');
const searchRoomButton = document.getElementsByClassName('search-form__button');
const registrationLoginContainer = document.getElementsByClassName('registration-login-container');
const registrationForm = document.getElementsByClassName('registration-form');
const loginForm = document.getElementsByClassName('login-card');
const registrationButton = document.getElementsByClassName('registration-button');
const loginButton = document.getElementsByClassName('login-button');

searchRoomButton[0].onclick = function (e) {
    searchRoomContainer[0].style.display = "flex";
    homeContainer[0].style.display = "none";
}  

registrationButton[0].onclick = function (e) {
  registrationLoginContainer[0].style.display = "flex";
  registrationForm[0].style.display = "flex";
  loginForm[0].style.display = "none";
  homeContainer[0].style.display = "none";
  searchRoomContainer[0].style.display = "none";
}

loginButton[0].onclick = function (e) {
  registrationLoginContainer[0].style.display = "flex";
  loginForm[0].style.display = "flex";
  registrationForm[0].style.display = "none";
  homeContainer[0].style.display = "none";
  searchRoomContainer[0].style.display = "none";
}