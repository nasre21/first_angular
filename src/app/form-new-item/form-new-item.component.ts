import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent {
  @Input() className= "btn btn-primary";
  @Input() label!: string;
  @Output() newItemEvent = new EventEmitter<string>();



  addNew(item:string):void {
    console.log("this is item",item);
    this.newItemEvent.emit(item);
  }
}
