import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  cities= ["New York", "Bilbao", "Madrid"]
  name = "Juan";
  title = 'Dia 4 del reto';
  selection !: string;
  url = 'https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg';
  critertia = "";


  onCityClicked(city: string): void{
    console.log("this city is ->", city);
    this.selection = city;
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }
  onClear(): void {
    console.log("clear");
    this.selection = "";

  }

  onSearch(): void {
    console.log("search");
  }

}
