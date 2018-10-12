import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../../models/office.model';
import { Official } from '../../models/official.model';

@Component({
	selector: 'app-office',
	templateUrl: './office.component.html',
	styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {

	@Input() office: Office;
	@Input() officials: Official[];

	filteredOfficials: Official[];

	constructor() { }

	ngOnInit() {
	}

	getOfficialsForOffice() {
		return this.office.officialIndices.filter(i => this.officials[i]).map(i => this.officials[i]);
	}
}
