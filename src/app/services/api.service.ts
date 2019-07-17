import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from '../models/items';


export class ApiService {
  private endpointURL : string = 'https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Item[]> {
    return this.http.get<any>(this.endpointURL)
      .pipe(
        map(model => model.data)
      );
  }
}