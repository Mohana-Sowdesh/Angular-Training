import { Component } from '@angular/core';

@Component({
  selector: 'li-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  public menuList:string[] = ['Dashboard', 'Explore courses', 'My courses', 'Notes', 'Settings'];
}
