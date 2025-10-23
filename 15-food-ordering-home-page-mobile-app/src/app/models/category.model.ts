export interface Category {
  id: number;
  icon: string;
  color: string;
  title: string;
  places: number;
}

export const categories: Category[] = [
  {
    id: 1,
    icon: 'assets/icon/food.svg',
    color: '#E5454B',
    title: 'Food',
    places: 2215,
  },
  {
    id: 2,
    icon: 'assets/icon/drink.svg',
    color: '#5654D4',
    title: 'Drink',
    places: 658,
  },
  {
    id: 3,
    icon: 'assets/icon/vege.svg',
    color: '#09A792',
    title: 'Vegetable',
    places: 432,
  },
  {
    id: 4,
    icon: 'assets/icon/burger.svg',
    color: '#FAA43F',
    title: 'Burger',
    places: 843,
  },
  {
    id: 5,
    icon: 'assets/icon/cake.svg',
    color: '#B56450',
    title: 'Cake',
    places: 124,
  },
  {
    id: 6,
    icon: 'assets/icon/dessert.svg',
    color: '#FB2F62',
    title: 'Dessert',
    places: 723,
  },
  {
    id: 7,
    icon: 'assets/icon/pizza.svg',
    color: '#E5454B',
    title: 'Pizza',
    places: 984,
  },
  {
    id: 8,
    icon: 'assets/icon/noodle.svg',
    color: '#09A792',
    title: 'Noodle',
    places: 215,
  },
  {
    id: 9,
    icon: 'assets/icon/milktea.svg',
    color: '#5654D4',
    title: 'Milk & Tea',
    places: 362,
  },
  {
    id: 10,
    icon: 'assets/icon/chicken.svg',
    color: '#FAA43F',
    title: 'Chicken',
    places: 567,
  },
  {
    id: 11,
    icon: 'assets/icon/mexican-food.svg',
    color: '#FB2F62',
    title: 'Mexican food',
    places: 723,
  },
  {
    id: 12,
    icon: 'assets/icon/hot-coffee.svg',
    color: '#FB2F62',
    title: 'Coffee',
    places: 723,
  },
];


