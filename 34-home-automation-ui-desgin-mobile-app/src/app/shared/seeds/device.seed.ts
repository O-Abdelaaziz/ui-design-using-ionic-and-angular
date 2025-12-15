import {Device} from "../models/device.model";

export const devicesSeed: Device[] = [
  {
    id: 1,
    room_id: 1,
    name: 'Main Ceiling Light',
    icon: 'bulb',
    status: true,
    charUuid: '00001101-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 2,
    room_id: 1,
    name: 'Smart TV',
    icon: 'tv',
    status: false,
    charUuid: '00002201-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 3,
    room_id: 1,
    name: 'Air Conditioner',
    icon: 'snow',
    status: true,
    charUuid: '00003301-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 4,
    room_id: 1,
    name: 'Bed Lamp',
    icon: 'flashlight',
    status: true,
    charUuid: '00004401-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 5,
    room_id: 1,
    name: 'Air Purifier',
    icon: 'leaf',
    status: false,
    charUuid: '00005501-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 6,
    room_id: 1,
    name: 'Refrigerator',
    icon: 'cube',
    status: true,
    charUuid: '00006601-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 7,
    room_id: 1,
    name: 'Microwave Oven',
    icon: 'radio',
    status: true,
    charUuid: '00001101-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 8,
    room_id: 2,
    name: 'Water Heater',
    icon: 'water',
    status: true,
    charUuid: '00001101-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 9,
    room_id: 2,
    name: 'Study Desk Light',
    icon: 'file-tray-stacked-outline',
    status: false,
    charUuid: '00001101-0000-1000-8000-00805F9B34FB'
  },
  {
    id: 10,
    room_id: 3,
    name: 'Main Ceiling Light',
    icon: 'bulb-outline',
    status: true,
    charUuid: '00001101-0000-1000-8000-00805F9B34FB'
  },
]
