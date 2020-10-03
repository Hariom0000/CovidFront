import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CountriesComponent} from './country/countries/countries.component';
import {CountrybynameComponent} from './country/countrybyname/countrybyname.component'; 
import {CountrybycodeComponent} from './country/countrybycode/countrybycode.component'; 
import {CountrydetailComponent} from './country/countrydetail/countrydetail.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch: "full" },
  {path: "home", component:HomeComponent},
  {path: "countries", component:CountriesComponent},
  {path: "country-by-name", component:CountrybynameComponent},
  {path: "country-by-code", component:CountrybycodeComponent},
  {path: "countrydetail", component:CountrydetailComponent},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
