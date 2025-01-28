import { Component, Input, input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }

    th, td {
      border-style: dashed;
    }
  `
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
