import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Office } from './models/office.model';
import { RepresentativesService } from './services/representatives.service';
import { RepresentativeInfoResponse } from './models/representative-info-response.model';
import { Official } from './models/official.model';
import { DivisionMap } from './models/division-map.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Find My Representatives';
	divisions: DivisionMap;
	offices: Office[];
	officials: Official[];
	searchForm: FormGroup;

	get addressField() { return this.searchForm.get('address'); }

	constructor(private fb: FormBuilder, private representativeService: RepresentativesService) {
		this.searchForm = this.fb.group({
			address: ['', Validators.required]
		});
	}

	search() {
		this.representativeService.getByAddress(this.addressField.value).subscribe((res: RepresentativeInfoResponse) => {
			this.divisions = res.divisions;
			this.offices = res.offices;
			this.officials = res.officials;
		});

		this.searchForm.markAsPristine();
	}
}
