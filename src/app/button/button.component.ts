import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
@Input() color!: string;
@Input() label!: string;
@Input() selection!: string;
  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
  console.log('changes->', changes);
  }
  ngOnInit(): void {
    console.log('OnInit ->');
  
    }
  ngOnDestroy(): void {
  console.log('destroyed ->');
  }

}
