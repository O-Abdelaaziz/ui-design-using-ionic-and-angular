import {Room} from "../models/room.model";

export const roomsSeed: Room[] = [
  {
    id: 1,
    name: "Living Room",
    deviceCount: 7,
    image: "assets/rooms/living-room.jpg",
    selected: false,
  },
  {
    id: 2,
    name: "Bedroom",
    deviceCount: 4,
    image: "assets/rooms/bed-room.jpg",
    selected: true,
  },
  {
    id: 3,
    name: "Study Room",
    deviceCount: 2,
    image: "assets/rooms/study-room.jpg",
    selected: false,
  },
  {
    id: 4,
    name: "Kitchen",
    deviceCount: 1,
    image: "assets/rooms/kitchen.jpg",
    selected: false,
  },
  {
    id: 5,
    name: "Bathroom",
    deviceCount: 1,
    image: "assets/rooms/bath-room.jpg",
    selected: false,
  },
  {
    id: 6,
    name: "Garage",
    deviceCount: 1,
    image: "assets/rooms/garage.jpg",
    selected: false,
  },

]
