import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TerritoriesService {

	constructor(private http: HttpClient) { }

	getStates(): Observable<Object> {
		return this.http.get<Object>('./assets/us-states.geojson');
	}
}
