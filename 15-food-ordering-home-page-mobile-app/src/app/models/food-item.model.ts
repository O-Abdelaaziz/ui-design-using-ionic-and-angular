export interface FoodItem {
  id?: string;
  imageUrl: string;
  title: string;
  description: string;
  rating: number;
  distance: number; // in meters
  preparationTime: number; // in minutes
}

export const FoodItems: FoodItem[] = [
  {
    id: '1',
    imageUrl: 'assets/images/img-1.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 4, // 4 out of 5 stars
    distance: 254, // 254 meters
    preparationTime: 27 // 27 minutes
  },
  {
    id: '2',
    imageUrl: 'assets/images/img-2.webp',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 3,
    distance: 200,
    preparationTime: 20
  },
  {
    id: '3',
    imageUrl: 'assets/images/img-3.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 5, // 4 out of 5 stars
    distance: 100, // 254 meters
    preparationTime: 10 // 27 minutes
  },
  {
    id: '4',
    imageUrl: 'assets/images/img-4.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 4,
    distance: 254,
    preparationTime: 27
  },
  {
    id: '5',
    imageUrl: 'assets/images/img-5.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 4,
    distance: 254,
    preparationTime: 27
  },
  {
    id: '6',
    imageUrl: 'assets/images/img-6.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 4,
    distance: 254,
    preparationTime: 27
  }
];

export const RecommendedDrinks: FoodItem[] = [
  {
    id: '1',
    imageUrl: 'assets/images/img-7.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 4, // 4 out of 5 stars
    distance: 254, // 254 meters
    preparationTime: 27 // 27 minutes
  },
  {
    id: '2',
    imageUrl: 'assets/images/img-8.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 3,
    distance: 200,
    preparationTime: 20
  },
  {
    id: '3',
    imageUrl: 'assets/images/img-9.jpeg',
    title: 'Some Awesome Dish Title',
    description: 'Some description here',
    rating: 5, // 4 out of 5 stars
    distance: 100, // 254 meters
    preparationTime: 10 // 27 minutes
  },
];
