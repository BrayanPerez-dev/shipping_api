import { Bulk } from './bulk.entity';

export class Order {
  id: string;
  orderNumber: number;
  status: string;
  collection_address: string;
  destination_address: string;
  first_name: string;
  last_name: string;
  telephone: string;
  email: string;
  indications?: string | null;
  department: string;
  reference?: string | null;
  scheduled_date: Date;
  userId: string;
  bulk?: Bulk[];

  constructor(
    id: string,
    orderNumber: number,
    status: string,
    collection_address: string,
    destination_address: string,
    first_name: string,
    last_name: string,
    telephone: string,
    email: string,
    indications: string,
    department: string,
    reference: string,
    scheduled_date: Date,
    userId: string,
    bulk: Bulk[],
  ) {
    this.id = id;
    this.orderNumber = orderNumber;
    this.status = status;
    this.collection_address = collection_address;
    this.destination_address = destination_address;
    this.first_name = first_name;
    this.last_name = last_name;
    this.telephone = telephone;
    this.email = email;
    this.indications = indications;
    this.department = department;
    this.reference = reference;
    this.scheduled_date = scheduled_date;
    this.userId = userId;
    this.bulk = bulk;
  }
}
