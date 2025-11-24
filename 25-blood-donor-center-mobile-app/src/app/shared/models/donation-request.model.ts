import { User } from './user.model';

export interface DonationRequest extends Omit<User, 'last_donation'> {
  request_date: string;  // e.g., '2023-11-20' or '2 days ago'
  status: 'pending' | 'fulfilled' | 'expired';  // Status of the request
  hospital?: string;  // Optional: hospital where blood is needed
  units_required: number;  // Number of blood units needed
  urgency: 'low' | 'medium' | 'high';  // Urgency level
  notes?: string;  // Any additional notes about the request
}
