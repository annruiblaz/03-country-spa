import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  public menuOptions: string[] = ['Home Page', 'About Page', 'Contact Page']

}
