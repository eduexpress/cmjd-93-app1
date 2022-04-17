import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';


@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
