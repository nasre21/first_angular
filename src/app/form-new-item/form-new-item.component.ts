
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() className= "btn btn-primary";
  @Input() label!: string;
  @Input() selection!: City;


  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();



  addNewItem(item:string):void {
    this.newItemEvent.emit(item);
  }

  updateCityItem(item:City, change: string):void {
    console.log('item',item);
    const city: City = {
    _id:item._id,
      name:change,

}

  this.updateItemEvent.emit(city);


  }
  counterRender(): boolean {
    console.log('Render Form',);

    return true;
  }
}
