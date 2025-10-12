export interface Member {
  id: number;
  name: string;
  photo: string;
  phone: string;
  gender: string;
  address: string;
  batchName: string;
  batchTime: string;
  trainingType: string;
  package: {
    plan: string;
    totalAmount: string;
    discount: string;
    purchaseDate: string;
    planExpiryDate: string;
    paid: string;
    dueAmount: string;
    daysRemaining: number;
  };
}
