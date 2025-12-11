export interface Coupon {
  code: string;
  discount: number;
  description: string;
  validUntil?: Date;
}
