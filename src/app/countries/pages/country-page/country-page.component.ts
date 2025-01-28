import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';
import * as L from 'leaflet';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

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
    }

    li,
    hr {
      border-style: dashed;
      border-color: var(--bs-border-color-translucent);
      border-width: var(--bs-border-width);
    }

    #map {
      margin: 0 auto;
      padding: 0;
      width: 95%;
      height: 400px;
      border: 1px dashed var(--bs-border-color-translucent);
      border-radius: 20px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      
      @media(min-width: 960px) {
        max-width: 600px;
        height: 300px;
      }
  `
})
export class CountryPageComponent implements OnInit, OnDestroy {
  public country?: Country;
  public map?: any;

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
        
        if(this.country) {
          setTimeout(() => {
            this.initializeMap();
          }, 500); 
      }
      }
    );

  }

  ngOnDestroy(): void {
    this.map.remove();
  }

  searchByAlphaCode(country: Country | null) {
    if(!country) return this.router.navigateByUrl('');
    return this.country = country;
  }

  initializeMap() {

    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('El contenedor del mapa no existe en el DOM.');
      return;
    }

    if (!this.country || !this.country.latlng) return;

    const center:[number, number] = [this.country.latlng[0], this.country.latlng[1]];

    this.map = L.map ('map', {
      center: center,
      zoom: 6
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.map.invalidateSize();
  }

  getStartOfWeek(day: string): string {
    switch(day) {
      case 'monday':
        return 'Lunes';
      case 'sunday':
        return 'Domingo';
      default: 
        return 'No tenemos la información.'
    }
  }

}

