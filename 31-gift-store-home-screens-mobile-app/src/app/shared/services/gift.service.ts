import {Injectable} from '@angular/core';
import {Gift} from "../models/gift.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private gifts: Gift[] = [
    {
      id: '1',
      name: 'Surprise Gift Basket',
      price: 999,
      status: true,
      rating: 4.9,
      cover: 'assets/images/gift-basket.jpg',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Luxury Chocolate Box',
      price: 500,
      status: true,
      rating: 4.7,
      cover: 'assets/images/chocolate-box.jpg',
      description: 'Indulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'
    },
    {
      id: '3',
      name: 'OTT Subscription',
      price: 1500,
      status: true,
      rating: 4.9,
      cover: 'assets/images/gift-card.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'
    },
    {
      id: '4',
      name: 'Designer Handbag',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'assets/images/handbag.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '5',
      name: 'Personalized Mug',
      price: 350,
      status: true,
      rating: 4.5,
      cover: 'assets/images/mug.jpg',
      description: 'Start your day with a touch of personalization using our delightful Personalized Mug.'
    },
    {
      id: '6',
      name: 'Perfume Set',
      price: 2000,
      status: true,
      rating: 4.9,
      cover: 'assets/images/perfume-set.jpg',
      description: 'Discover the essence of luxury with our Perfume Set, a captivating blend of enchanting fragrances.'
    },
    {
      id: '7',
      name: 'Jewelry Box',
      price: 4000,
      status: true,
      rating: 4.6,
      cover: 'assets/images/jewelry-box.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed Jewelry Box, a symbol of elegance.'
    },
    {
      id: '8',
      name: 'Romantic Dinner Set',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/images/dinner-set.jpg',
      description: 'Create magical moments with our Romantic Dinner Set, perfect for a candlelit evening with your loved one.'
    },
    {
      id: '9',
      name: 'Leather Wallet',
      price: 2500,
      status: true,
      rating: 4.6,
      cover: 'assets/images/wallet.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable Leather Wallet, a blend of functionality and fashion.'
    },
    {
      id: '10',
      name: 'Phone Case',
      price: 999,
      status: true,
      rating: 4.7,
      cover: 'assets/images/phone-case.jpg',
      description: 'Protect your device in style with our trendy Phone Case, personalized for the modern individual.'
    },
    {
      id: '11',
      name: 'Diamond Jewelry',
      price: 20000,
      status: true,
      rating: 4.6,
      cover: 'assets/images/diamond.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'
    },
    {
      id: '12',
      name: 'Leather Travel Set',
      price: 5000,
      status: true,
      rating: 4.5,
      cover: 'assets/images/travel-bag.jpg',
      description: 'Embark on journeys in style with our Leather Travel Set, crafted for the modern-day explorer.'
    },
    {
      id: '13',
      name: 'Modern Wall Clock',
      price: 2500,
      status: true,
      rating: 4.7,
      cover: 'assets/images/wall-clock.jpg',
      description: 'Enhance your living space with our Modern Wall Clock, a blend of functionality and contemporary design.'
    },
    {
      id: '14',
      name: 'Eco-friendly Planters',
      price: 850,
      status: true,
      rating: 4.5,
      cover: 'assets/images/planters.jpg',
      description: 'Bring nature indoors with our Eco-friendly Planters, designed for the eco-conscious and nature enthusiasts.'
    },
  ];

  getGifts(): Gift[] {
    return this.gifts;
  }

  getGift(id: string): Gift | undefined {
    return this.gifts.find((g) => g.id === id);
  }

  addNewGift(gift: Gift) {
    this.gifts.push({...gift});
  }

  updateGift(gift: Gift) {
    const index = this.gifts.findIndex((g) => g.id === gift.id);
    if (index !== -1) {
      this.gifts[index] = {...gift};
    }
  }

  deleteGift(id: string) {
    this.gifts = this.gifts.filter((g) => g.id !== id);
  }
}
