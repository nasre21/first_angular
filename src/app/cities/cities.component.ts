import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `<ul>
  <li
    (click)="onCityClicked(city)"
    [ngClass]="{ 'alert alert-info': city === selection }"
  >
    {{ city | titlecase }}
  </li>
</ul>
 
 <p>Counter: {{ counterRender() }}</p>
 `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CitiesComponent{
  @Input() city!: string;
  @Input() selection!: string;
  @Output()cityClickEvent = new EventEmitter<string>();

  onCityClicked(city:string): void {
    //emit
    this.cityClickEvent.emit(city);
  }
  
  counterRender(): boolean {
    console.log('Render Form',);
    
    return true;
  }

  }
