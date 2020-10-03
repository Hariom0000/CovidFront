import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service'
import { Totalcount } from '../appClasses/totalcount'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CountryserviceService]
})
export class HomeComponent implements OnInit {

  totalCount: Totalcount;
  constructor(private countryService: CountryserviceService) { }

  ngOnInit() {
     this.countryService.getTotalCount<Totalcount>()
     .subscribe((resultData)=>{this.totalCount=resultData});
  }
  
}
