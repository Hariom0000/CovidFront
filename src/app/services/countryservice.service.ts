import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CountryCovid } from '../appClasses/countrycovid'
import { Comments } from '../appClasses/comments';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {
  private server: String= 'http://localhost:8780/';
  private subject = new BehaviorSubject<CountryCovid>(null);
   
  constructor(private http: HttpClient) {
  }

  setCountryCovid(countryCovid: CountryCovid){
    this.subject.next(countryCovid);
  }

  getCountryCovid():Observable<CountryCovid> {
    return this.subject;
  }

  getTotalCount<T>(): Observable<T> {
    return this.http.get<T>(this.server+"totals");
  }

  getCountries<T>(): Observable<T> {
    return this.http.get<T>(this.server+"countries");
  }

  getCountryByName<T>(name: string): Observable<T> {
    return this.http.get<T>(this.server+"countrybyname?country="+name);
  }

  getCountryByCode<T>(name: string): Observable<T> {
    return this.http.get<T>(this.server+"countrybycode?code="+name);
  }

  updateFavourite(name: string, favourite: boolean): Observable<any> {
        return this.http.post(this.server+"updatefavourite",{"name": name, "favourite": favourite});
  }

  addComment(comment: Comments): Observable<any> {
    return this.http.post(this.server+"addcomment",comment);
}
}
