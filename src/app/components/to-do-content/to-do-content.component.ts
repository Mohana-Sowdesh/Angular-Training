import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-content',
  templateUrl: './to-do-content.component.html',
  styleUrls: ['./to-do-content.component.css']
})
export class ToDoContentComponent {
  @Input() contentValue!: string;
  @Input() id!: number;
  @Output() triggerChangeEmitter = new EventEmitter<any>();

  /**
   * Function executed when a checkbox is clicked
   * @param event - This is the index of element that needs to be pushed to another box
   */
  log(event: Event){
    if((<HTMLInputElement>event.target).checked == true) {
      this.triggerChangeEmitter.emit(this.id);
    }
  }
}
