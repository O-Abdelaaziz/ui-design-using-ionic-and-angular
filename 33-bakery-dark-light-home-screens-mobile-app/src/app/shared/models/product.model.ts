import {Variety} from "./ variety.model";

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  discount: number;
  reviewCount: number;
  image: string;
  category_id: number;
  seller_id: number;
  default_price: number | null;
  cut_price?: number | null,
  varieties: Variety[];
  type: string;
}
