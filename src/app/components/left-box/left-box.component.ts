import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})

export class LeftBoxComponent {
  @Input() leftBoxData!: string[];
  @Output() someEmitter =  new EventEmitter<any>();

  /**
   * Function executed when an event is emitted on checking a checkbox
   * @param id - This is the index of element that needs to be pushed to another box
   */
  bounceDataBack = (id:number) => {
    this.someEmitter.emit(id);
  }
}
