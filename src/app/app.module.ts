import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ChildContainerComponent } from './child-container/child-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentProductComponent } from './ng-content-product/ng-content-product.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { LchDemoComponent } from './lch-demo/lch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    DemoComponent,
    CustomerListComponent,
    ChildContainerComponent,
    NgContentComponent,
    NgContentProductComponent,
    LifecycleHookComponent,
    LchDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
