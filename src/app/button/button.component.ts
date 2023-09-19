import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
@Input() color!: string;
@Input() label!: string;
@Input() selection!: string;
  constructor(){}

  counterRender(): boolean {
    console.log('Render Form',);
    
    return true;
  }
}
