import { Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-tags-with-checkbox',
  templateUrl: './tags-with-checkbox.component.html',
  styleUrls: ['./tags-with-checkbox.component.scss']
})
export class TagsWithCheckboxComponent {
  @Input() checkBoxLabel!: string;
  public checkBoxClicked: boolean = false;

  /**
   * Function to be executed on clicking checkbox
   */
  onCheckboxClicked(): void {
    this.checkBoxClicked == false ? (this.checkBoxClicked = true) : (this.checkBoxClicked = false);
    console.log(this.checkBoxClicked);
  }
}
