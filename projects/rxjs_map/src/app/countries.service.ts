import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryMapperService } from './country-mapper.service';
import { CountryModel } from './models/country-model';
import { CountryResponseModel } from './models/country-response-model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private countryMapperService: CountryMapperService,
    private http: HttpClient) {}

  // get(): Observable<CountryModel[]> {
  //   return
  //   .pipe(map((countries) => this.countryMapperService.toClient(countries)));
  // }

    getCountry2(): Observable<CountryModel[]>{
      return this.http.get<CountryResponseModel[]>('http://localhost:2001/countries2')
      .pipe(map((countries) => this.countryMapperService.toClient(countries)));
    }
}
