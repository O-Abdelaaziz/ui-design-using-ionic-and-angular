export interface Device {
  id: number;
  room_id: number;
  name: string;
  icon: string;
  status: boolean;
  charUuid?: string
}
