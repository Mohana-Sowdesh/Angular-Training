import { Component, Input } from '@angular/core';

@Component({
  selector: 'li-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})

export class CardItemComponent {
  @Input() purchasedCourseTitle!: string;
  @Input() purchasedNoOfItems!: number;
}
