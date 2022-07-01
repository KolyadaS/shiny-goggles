import "./scss/style.scss";

function importAll(r) {
    r.keys().forEach(r)
  }

importAll(require.context('./blocks/images', false, /\.*$/));

import "./blocks/rate-button/rate-button.js";
import "./blocks/room-card/room-card.js";
import "./blocks/dropdown/dropdown.js";
import './blocks/page-search-room/page-search-room.js';