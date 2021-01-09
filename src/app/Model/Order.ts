import { Cart } from "./cart";

export class Order {
    orderId: number;
    orderBy: string;
    orderStatus: string;
    products: Cart[];
}