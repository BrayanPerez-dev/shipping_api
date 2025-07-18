export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface IFindOrder {
  userId: string;
  scheduled_date?: {
    gte: Date;
    lte: Date;
  };
}
