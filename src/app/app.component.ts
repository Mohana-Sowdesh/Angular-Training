import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('textvalue') inputElement!: ElementRef;

  public leftContentBox: string[] = [];
  public tempRightAddContentBox: string[] = [];
  public tempLeftAddContentBox: string[] = [];
  public rightContentBox: string[] = [];

  /**
   * Function executed on clicking add button
   * @param content - This is the value present in the input box
   */
  triggerSubmit = (content: string) => {
    this.inputElement.nativeElement.value = '';
    this.leftContentBox.push(content);
  }

  /**
   * Function executed when an event is emitted on checking a checkbox
   * @param id - This is the index of element that needs to be pushed to right box
   */
  addContentToRight = (id:number) => {
    this.tempRightAddContentBox.push(this.leftContentBox[id]);
  }

  /**
   * Function executed when 'Push to right' button is clicked
   * @param 
   */
  pushToRight = ()=> {
    this.rightContentBox.push(...this.tempRightAddContentBox);
    this.leftContentBox = this.leftContentBox.filter(content=>
      (this.tempRightAddContentBox.indexOf(content) < 0)
    );
    this.tempRightAddContentBox = [];
  }

  /**
   * Function executed when 'Push to left' button is clicked
   * @param 
   */
  pushToLeft = ()=> {
    this.leftContentBox.push(...this.tempLeftAddContentBox);
    this.rightContentBox = this.rightContentBox.filter(content =>
      (this.tempLeftAddContentBox.indexOf(content) < 0)
    );
    this.tempLeftAddContentBox = [];
  }

  /**
   * Function executed when an event is emitted on checking a checkbox
   * @param 
   */
  addContentToLeft = (id:number) => {
    this.tempLeftAddContentBox.push(this.rightContentBox[id]);
  }
  
}
