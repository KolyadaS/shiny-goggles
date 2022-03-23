export {hotelRooms};

let hotelRooms = [];
let room = {
    id: "0001",
    suite: 888,
    luxury: true,
    price: 9990,
    rating: 4,
    feedback: 145,
    picture: ['../blocks/images/0001_1.png', '../blocks/images/0001_2.png', '../blocks/images/0001_3.png', '../blocks/images/0001_4.png'],
}
hotelRooms.push(room);

room = {
    id: "0002",
    suite: 840,
    luxury: false,
    price: 9900,
    rating: 3,
    feedback: 65,
    picture: ['../blocks/images/0002_1.png', '../blocks/images/0002_2.png', '../blocks/images/0002_3.png']
}
hotelRooms.push(room);

room = {
    id: "0003",
    suite: 111,
    luxury: false,
    price: 1111,
    rating: 1,
    feedback: 11,
    picture: ['../blocks/images/0003_3.png', '../blocks/images/0003_1.jpeg', '../blocks/images/0003_2.png']
}
hotelRooms.push(room);

room = {
    id: "0004",
    suite: 555,
    luxury: false,
    price: 555,
    rating: 5,
    feedback: 55,
    picture: []
}
hotelRooms.push(room);

// console.log("хотелрумный js = " + hotelRooms);
// console.log(JSON.stringify(hotelRooms, null, '  '));