import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  template: `<p>home-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomePageComponent { }
