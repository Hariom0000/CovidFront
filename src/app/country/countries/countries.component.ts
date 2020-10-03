import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from 'src/app/services/countryservice.service';
import { Country } from '../../appClasses/country'
import { CountryCovid } from '../../appClasses/countrycovid'
import {Router} from "@angular/router"
import {Location} from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private countryService: CountryserviceService,
    private router: Router,
    private location: Location) { 
  }
  originalData: Country[];
  countries: Country[];

  ngOnInit() {
     this.countryService.getCountries<Country[]>()
      .subscribe((resultData)=>{
        this.countries=resultData
        this.originalData=resultData
      });
  }

  searchData(searchValue: any) {
    this.countries = this.originalData.filter((item: Country) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
}

  updateFavourite(country: Country){
    this.countryService.updateFavourite(country.name, !country.favourite).subscribe((res) => {
      console.log('res', res);});
    country.favourite = !country.favourite;
  }

  countryByName(name: string){
    this.countryService.getCountryByName<CountryCovid>(name)
    .subscribe((resultData)=>{
      console.log(resultData);
      this.countryService.setCountryCovid(resultData);
      this.router.navigate(['/countrydetail']);
    });
  }

  countryByCode(code: string){
    this.countryService.getCountryByCode<CountryCovid>(code)
    .subscribe((resultData)=>{
      console.log(resultData);
      this.countryService.setCountryCovid(resultData);
      this.router.navigate(['/countrydetail']);
    });
  }

  clickBack(){
    this.location.back();
  }

}
