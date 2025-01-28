import { Component } from '@angular/core';
import { SideMenuItem } from '../../interfaces/interfaces';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: `

  `
})
export class NavbarComponent {

  public menuOptions: SideMenuItem[] = [
    { title: 'Por País', routerLink: 'countries/by-country'},
    { title: 'Por Región', routerLink: 'countries/by-region'},
    { title: 'Por Capital', routerLink: 'countries/by-capital'}
  ];

  public selectedMenu?: SideMenuItem;

  saveSelectedMenu(selected: SideMenuItem):void {
    this.selectedMenu = selected;
  }

}
