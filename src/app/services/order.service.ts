import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  deliveryOptions: string[] = ['Takeout', 'Delivery'];

  sizeOptions: string[] = ['Small', 'Medium', 'Large', 'X-Large'];

  ingredients: string[] = ['Pepperoni', 'Mushrooms', 'Onion', 'Sausage', 'Green Peppers'];

  constructor() { }
}
