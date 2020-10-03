import { Component, OnInit } from '@angular/core';
import { CountryCovid } from '../../appClasses/countrycovid'
import { CountryserviceService } from 'src/app/services/countryservice.service';
import { FormBuilder, FormControl } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
  countryCovid: CountryCovid;
  formGroup;
  showCommentBox: boolean=false;
  showAddComment: boolean=true;
  constructor(private countryserviceService: CountryserviceService,
    private formBuilder: FormBuilder,
    private location: Location) {
     
  }

  ngOnInit() {
    this.countryserviceService.getCountryCovid().subscribe(resultdata=>{
      this.countryCovid=resultdata;
      console.log(resultdata);
    });
    this.formGroup = this.formBuilder.group({
      comment: new FormControl()
    });
  }
  addComment(){
    this.showCommentBox=true;
    this.showAddComment=false;
  }
  onSubmit(formData) {
    var name = formData['comment'];
    var comment = {id: 0, comment: name, countryCovidId: this.countryCovid.id, commentTime: ''};
    this.countryserviceService.addComment(comment).subscribe((res) => {
      console.log('res', res);});
    this.countryCovid.comments.push(comment)
    this.formGroup = this.formBuilder.group({
      comment: new FormControl()
    });
    this.showCommentBox=false;
    this.showAddComment=true;
  }
  clickBack(){
    this.location.back();
  }

}
