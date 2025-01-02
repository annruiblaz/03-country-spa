import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURL: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCapital(searchTerm: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${searchTerm}`;

        return this.http.get<Country[]>(url);
    }
}