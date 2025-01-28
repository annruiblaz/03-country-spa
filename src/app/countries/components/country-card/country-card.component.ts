import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html',
  styles: `
    img {
      object-fit: contain;
    }

    .col-cards {
      padding: 0;
    }

    .card {
      border-style: dashed;
    }

    .card-body {
      padding: 16px 10px;

      @media(min-width: 375px) {
        padding: 16px;
      }
    }

    .btn-secondary {
      font-size: 9px;
      max-width: 60px;
      max-height: 28px;
      margin-left: 10px;

      @media(min-width: 375px) {
        max-width: fit-content;
        font-size: 14px;
      }
    }

    .card-title {
      font-size: 13px;
      max-width: 120px;

      @media(min-width: 425px) {
        max-width: fit-content;
        font-size: 15px;
      }
    }

    .card-info {
      font-size: 10px;

      @media(min-width: 375px) {
        font-size: 12px;
      }
    }
  `
})
export class CountryCardComponent {

  @Input()
  public countries: Country[] = [];
}
