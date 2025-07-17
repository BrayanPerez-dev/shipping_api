import { OrderStatus } from '../types/order.type';
import { Bulk } from './bulk.entity';

export class Order {
  id: string;
  orderNumber: number;
  status: OrderStatus;
  collection_address: string;
  destination_address: string;
  first_name: string;
  last_name: string;
  telephone: string;
  email: string;
  indications?: string;
  department: string;
  reference?: string;
  scheduled_date: string;
  userId: string;
  bulk?: Bulk[];
}
