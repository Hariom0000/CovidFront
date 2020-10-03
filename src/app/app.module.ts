import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './country/countries/countries.component';
import { HomeComponent } from './home/home.component';
import { CountrybynameComponent } from './country/countrybyname/countrybyname.component';
import { CountrybycodeComponent } from './country/countrybycode/countrybycode.component';
import { CountrydetailComponent } from './country/countrydetail/countrydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomeComponent,
    CountrybynameComponent,
    CountrybycodeComponent,
    CountrydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
