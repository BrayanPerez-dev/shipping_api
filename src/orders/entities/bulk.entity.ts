export class Bulk {
  id: string;
  length: number;
  height: number;
  width: number;
  weight_pounds: number;
  orderId: string;
  constructor(
    id: string,
    length: number,
    height: number,
    width: number,
    weight_pounds: number,
    orderId: string,
  ) {
    this.id = id;
    this.length = length;
    this.height = height;
    this.width = width;
    this.weight_pounds = weight_pounds;
    this.orderId = orderId;
  }
}
