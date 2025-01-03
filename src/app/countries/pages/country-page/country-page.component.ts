import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: `
    h2 {
      font-weight: 600;
    }
      img {
        width: 100%;
        height: auto;
        min-width: 150px;
        object-fit: cover;
        trnasl: 
      }
  `
})
export class CountryPageComponent implements OnInit{
  public country?: Country;

  constructor( private activatedRoute: ActivatedRoute,
      private countriesService: CountriesService,
      private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id) )
    )
    .subscribe(
      (country) => {
        this.searchByAlphaCode(country);
      }
    );
  }

  searchByAlphaCode(country: Country | null) {
    if(!country) return this.router.navigateByUrl('');
    return this.country = country;
  }

}
