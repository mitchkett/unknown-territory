import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { RepresentativeInfoResponse } from '../models/representative-info-response.model';

@Injectable({
	providedIn: 'root'
})
export class RepresentativesService {

	private baseUrl: string = 'https://www.googleapis.com/civicinfo/v2/representatives';

	constructor(private http: HttpClient) { }

	getByAddress(address: string): Observable<RepresentativeInfoResponse> {
		let searchParams: HttpParams = new HttpParams().append('key', environment.googleCivicApiKey).append('address', address);

		return this.http.get<RepresentativeInfoResponse>(this.baseUrl, { params: searchParams });
	}
}
