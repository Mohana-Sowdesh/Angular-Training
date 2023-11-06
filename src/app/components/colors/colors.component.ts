import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  @Input() colourList!: {colorCode:string, isSelected:boolean}[];
  @Input() colorObj!: {colorCode:string, isSelected:boolean};
  @Output() colorSelectedTracker:EventEmitter<any> = new EventEmitter<any>();

  /**
   * Function which emits the color code of the color currently selected
   */
  displayTick() {
    this.colorSelectedTracker.emit(this.colorObj.colorCode);
  }
}
