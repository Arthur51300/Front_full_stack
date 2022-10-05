import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import {FormsModule} from "@angular/forms";
import { DirectivesColorDirective } from './directives/directives-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    DirectivesColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
