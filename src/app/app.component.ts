import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { City, DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {


  cities: City[]=[];
  selection !: City;
  url = 'https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg';
  critertia = "";

  constructor(private readonly dataSVc: DataService) { }
  ngOnInit(): void {
    this.dataSVc.getCities().subscribe(res=>{
      this.cities = [...res];
    });

  }

  onCityClicked(city: City): void{
    this.selection = city;
  }

  // addNewCity(city: string): void {
  //   this.cities.push(city);
  // }




  onDeleteCity(id: string): void {
    console.log("delete city", id);


  }
  onClear(): void {
    console.log("clear");
    this.selection = {
      _id: "",
      name: ""
    };

  }

  onSearch(): void {
    console.log("search");
  }



}

