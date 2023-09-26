
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



  addNewItem(item:string):void {
    this.newItemEvent.emit(item);
  }

  counterRender(): boolean {
    console.log('Render Form',);

    return true;
  }
}
