import "./scss/style.scss";

function importAll(r) {
    r.keys().forEach(r)
  }

importAll(require.context('./blocks/images', false, /\.*$/));

// import "./blocks/images/icon.svg";
// import "./blocks/images/toxin.svg";
// import "./blocks/images/logoss.jpg";
// import "./blocks/images/insert_emoticon.svg";
// import "./blocks/images/userpic.png";

// import "./blocks/images/0001_1.png";
// import "./blocks/images/0001_2.png";
// import "./blocks/images/0001_3.png";
// import "./blocks/images/0001_4.png";
// import "./blocks/images/0002_1.png";
// import "./blocks/images/0002_2.png";
// import "./blocks/images/0002_3.png";

// import "./blocks/images/ellipse_filled.svg";
// import "./blocks/logo/logo.js";
// import "../node_modules/air-datepicker/dist/js/datepicker.min.js";
import "./blocks/rate-button/rate-button.js";
import "./blocks/room-card/room-card.js";
import "./blocks/dropdown/dropdown.js";

console.log('I am in index.js');