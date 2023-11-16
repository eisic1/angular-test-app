import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available' },
    { id: 2, name: 'Smart Watch', price: '100', color: 'Black', available: 'Not Available' },
    { id: 3, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available' },
    { id: 4, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available' },
    { id: 5, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available' },
    { id: 6, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available' },
  ];
}
