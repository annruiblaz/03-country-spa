import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html'
})
export class CountryCardComponent {

  @Input()
  public countries: Country[] = [];
}
