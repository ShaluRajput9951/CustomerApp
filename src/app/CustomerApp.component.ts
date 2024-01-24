import { Component } from '@angular/core';
import{ Customer } from './CustomerApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer=new Customer();
}
