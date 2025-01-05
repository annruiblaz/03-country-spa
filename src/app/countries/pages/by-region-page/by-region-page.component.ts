import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public regionsName: string[] = ['África','América','Asia','Europa','Oceanía'];
  public selectedRegion?: Region;

  
  constructor( private countriesService: CountriesService) {}

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    )
}

}
