import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: `<ul class="list-group">
  <li class="list-group-item mt-1"
    (click)="onCityClicked(city)"
    [ngClass]="{ 'active': city?._id === selection?._id}"
  >
    {{ city?.name | titlecase }}
    <button *ngIf=" city?._id === selection?._id" (click)="onDeleteCity(city._id)" type="button" class="btn btn-danger float-end">Delete</button>

  </li>
</ul>

 <!-- <p>Counter: {{ counterRender() }}</p> -->
 `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CitiesComponent{
  @Input() city!: City;
  @Input() selection!: City;
  @Output()cityClickEvent = new EventEmitter<City>();
  @Output()cityDeleteEvent = new EventEmitter<string>();

  onCityClicked(city:City): void {
    //emit
    this.cityClickEvent.emit(city);
  }

  counterRender(): boolean {
    console.log('Render Form',);

    return true;
  }

  onDeleteCity(id:string): void {
    //emit
    this.cityDeleteEvent.emit(id);

  }

  }
