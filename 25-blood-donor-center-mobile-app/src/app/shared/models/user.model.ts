export interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  gender: 'Male' | 'Female';
  blood_group: string;
  photo: string;
  social_photo: string;
  distance: number;
  phone: string;
  email: string;
  last_donation?: string; // Optional, only for donors
  urgent?: boolean; // Optional, only for requests
}
