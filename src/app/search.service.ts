import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {




 // tslint:disable-next-line: variable-name
 private _getVenueUrl = 'http://localhost:3000/findvenues/location=/sporttype=';
  constructor(private http: HttpClient) { }




getVenues(searchObj): Observable<object[]> {
  this._getVenueUrl = `http://localhost:3000/findvenues/location:${searchObj.location}/sporttype:${searchObj.sporttype}`;
  console.log(this._getVenueUrl);
  return this.http.get<object[]>(this._getVenueUrl);
}

getVenue(searchObj): Observable<object> {
  const url = `http://localhost:3000/findvenues/${searchObj.location}/${searchObj.sporttype}/${searchObj.id}`;
  console.log(url);
  return this.http.get<object>(url);
}


}
