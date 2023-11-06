import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  @Input() colourList!: {colorCode:string, isSelected:boolean}[];
  @Input() colorObj!: {colorCode:string, isSelected:boolean};
  @Output() colorSelectedTracker: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Function which emits the color code of the color currently selected
   * @returns - void
   */
  displayTick(): void {
    this.colorSelectedTracker.emit(this.colorObj.colorCode);
  }
}
