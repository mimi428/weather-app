import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  weatherData!:any;
  cityName: string = "Hanoi";

  url = `http://api.weatherapi.com/v1/current.json`;
  key = 'edc58c599c964155b5605017250503';
  

  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
}

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(this.cityName).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
  });
  }
}
