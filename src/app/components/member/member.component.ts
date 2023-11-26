import { Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  @Input() memberName!: string;
  @Input() memberPlace!: string;
  @Input() gender!: string;
  @Input() memberPhoto!: string;
}
