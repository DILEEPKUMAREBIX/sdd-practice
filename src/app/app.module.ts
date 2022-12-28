import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FilterComponent } from './filter/filter.component';
import { CounterComponent } from './counter/counter.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { LchComponent } from './lch/lch.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CardDetailsComponent,
    CounterComponent,
    CreateFormComponent,
    EmployeeComponent,
    LchComponent,
    HeaderComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
