import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { CreateBoardingComponent } from './create-boarding/create-boarding.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UpdateAddressComponent } from './update-address/update-address.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { BoardingOptionsComponent } from './boarding-options/boarding-options.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBoardingComponent,
    UpdateAddressComponent,
    BoardingOptionsComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'create', component: CreateBoardingComponent},
      {path: 'address', component: UpdateAddressComponent},
      {path: 'options', component: BoardingOptionsComponent},
      {path: 'sign', component: SignComponent},
      {path: '', redirectTo: '/create', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
