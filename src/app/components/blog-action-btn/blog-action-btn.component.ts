import { Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-blog-action-btn',
  templateUrl: './blog-action-btn.component.html',
  styleUrls: ['./blog-action-btn.component.scss']
})
export class BlogActionBtnComponent {
  @Input() btnText!: string;
  @Input() bgColor!: string;
  @Input() fontColor!: string;
}
