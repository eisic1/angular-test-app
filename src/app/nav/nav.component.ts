import { Component } from '@angular/core';

@Component({
  // Different selectors
  // selector: '[app-nav]'
  // selector: '.app-nav'
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  siteName: string = 'eShopping';
}
