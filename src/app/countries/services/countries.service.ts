import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURL: string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital: { term: '',countries: [] },
        byCountries: { term: '',countries: [] },
        byRegion: {region: undefined ,countries: [] }
    }

    constructor(private http: HttpClient) {
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage() {
        if(!localStorage.getItem('cacheStore')) return;

        this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
    }

    private getHttpCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( error => of([]))
        );
    }

    searchCapital(searchTerm: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${searchTerm}`;

        return this.getHttpCountriesRequest(url).pipe(
            tap( ( countries => this.cacheStore.byCapital = {term: searchTerm, countries: countries}) ),
            tap( () => this.saveToLocalStorage() )
        );
    }

    searchCountry(searchTerm: string): Observable<Country[]> {
        const url = `${this.apiURL}/name/${searchTerm}`;

        return this.getHttpCountriesRequest(url).pipe(
            tap( ( countries => this.cacheStore.byCountries = {term: searchTerm, countries: countries}) ),
            tap( () => this.saveToLocalStorage() )
        );
    }

    searchRegion(searchTerm: Region): Observable<Country[]> {
        const url = `${this.apiURL}/region/${searchTerm}`;

        return this.getHttpCountriesRequest(url).pipe(
            tap( ( countries => this.cacheStore.byRegion = {region: searchTerm, countries: countries}) ),
            tap( () => this.saveToLocalStorage() )
        );    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.apiURL}/alpha/${code}`;

        return this.http.get<Country[]>(url).pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError( error => of(null))
        );
    }

}