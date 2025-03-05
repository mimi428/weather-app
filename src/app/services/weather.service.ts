import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'edc58c599c964155b5605017250503'; 
  private baseUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}


  getWeatherData(city: string): Observable<any> {
      const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
      return this.http.get(url);
  }
}
