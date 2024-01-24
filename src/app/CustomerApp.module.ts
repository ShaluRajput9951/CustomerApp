import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './CustomerApp.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    CustomerAppModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerAppModule { }
