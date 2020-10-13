import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from 'src/app/services/countryservice.service';
import { CountryCovid } from '../../appClasses/countrycovid'
import {Router} from "@angular/router"
import {Location} from '@angular/common';

@Component({
  selector: 'app-countrybycode',
  templateUrl: './countrybycode.component.html',
  styleUrls: ['./countrybycode.component.css']
})
export class CountrybycodeComponent implements OnInit {

  showErrorMsg: boolean=false;
  errorMsg: string=''
  constructor(private countryService: CountryserviceService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  countryByCode(name: string){
    if(name){
      this.countryService.getCountryByCode<CountryCovid>(name)
      .subscribe(
        (resultData)=>{
          if(resultData === null){
            this.errorMsg='No country found with this code '+name
            this.showErrorMsg=true
          }else{
            this.countryService.setCountryCovid(resultData);
            this.router.navigate(['/countrydetail']);
          }
          console.log(resultData);
        },
        error=> {
          this.errorMsg='Something went wrong, we apologies for the inconvinence.'
          this.showErrorMsg=true
          console.log(this.errorMsg)
        }
      );
    }
    else{
      this.errorMsg='Please enter valid inputs'
      this.showErrorMsg=true
    }
  }
  clickBack(){
    this.location.back();
  }
}
