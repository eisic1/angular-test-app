import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available', type: 'Free' },
    { id: 2, name: 'Gold watch', price: '100', color: 'Black', available: 'Not Available', type: 'Premium' },
    { id: 3, name: 'Sunglasses', price: '100', color: 'Black', available: 'Available', type: 'Free' },
    { id: 4, name: 'Man glasses', price: '100', color: 'Black', available: 'Not Available', type: 'Free' },
    { id: 5, name: 'Iphone 14pro', price: '100', color: 'Black', available: 'Available', type: 'Premium' },
    { id: 6, name: 'Gold', price: '100', color: 'Black', available: 'Available', type: 'Premium' },
    { id: 4, name: 'Pencil', price: '100', color: 'Black', available: 'Not Available', type: 'Free' },
    { id: 5, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available', type: 'Free' },
    { id: 6, name: 'Smart Watch', price: '100', color: 'Black', available: 'Available', type: 'Premium' },
  ];

  getTotalProducts(){
    return this.products.length;
  }

  getTotalFreeProducts(){
    return this.products.filter(product => product.type === 'Free').length;
  }

  getTotalPremiumProducts(){
    return this.products.filter(product => product.type === 'Premium').length;
  }

  productsCountRadioButton: string = 'All';
  searchText: string = '';

  onRadioButtonChanged(data: string){
    this.productsCountRadioButton = data;
    //console.log(data);
  }

  onSearchTextEntered(val: string){
    this.searchText = val;
  }

}
