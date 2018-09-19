import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Office } from './models/office.model';
import { RepresentativesService } from './services/representatives.service';
import { RepresentativeInfoResponse } from './models/representative-info-response.model';
import { Official } from './models/official.model';
import { DivisionMap } from './models/division-map.model';
import { TerritoriesService } from './services/territories.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Uknown Territory';
	showError = false;
	lat = 38.0301788;
	lng = -98.2305004;
	zoom = 4.69;

	mapLayerTypes = ['Congressional Districts', 'Counties', 'States'];
	mapLayer = null;

	resultSets = ['Elected Officials'];
	selectedResultSet = this.resultSets[0];
	searchTerritory = '';

	divisions: DivisionMap;
	offices: Office[];
	officials: Official[];

	searchForm: FormGroup;
	resultsField: FormControl;

	get addressField() { return this.searchForm.get('address'); }
	get layerField() { return this.searchForm.get('layer'); }

	constructor(private fb: FormBuilder, private representativeService: RepresentativesService, private territoryService: TerritoriesService) {
		this.searchForm = this.fb.group({
			address: null,
			layer: null
		});

		this.layerField.valueChanges.subscribe(selectedLayer => {
			if (selectedLayer) {
				this.selectMapLayerType();
			}
		});

		this.resultsField = new FormControl(this.resultSets[0]);
	}

	clearSearch() {
		this.searchForm.reset();
		this.mapLayer = null;
	}

	search() {
		this.showError = false;
		this.searchTerritory = this.addressField.value;
		this.representativeService.getByAddress(this.addressField.value).subscribe(
			(res: RepresentativeInfoResponse) => this.bindResults(res),
			error => this.handleError(error));

		this.searchForm.markAsPristine();
	}

	selectLayer(layerInfo) {
		const stateAbbreviation: string = layerInfo.feature.f.STUSPS;
		this.searchTerritory = layerInfo.feature.f.NAME;
		this.representativeService.getByState(stateAbbreviation).subscribe(
			(res: RepresentativeInfoResponse) => this.bindResults(res),
			error => this.handleError(error));
	}

	bindResults(res: RepresentativeInfoResponse) {
		this.divisions = res.divisions;
		this.offices = res.offices;
		this.officials = res.officials;
	}

	handleError(error) {
		console.log(error);
		this.divisions = null;
		this.offices = null;
		this.officials = null;
		this.showError = true;
	}

	selectMapLayerType() {
		this.territoryService.getStates().subscribe((res: Object) => {
			this.mapLayer = res;
		});
	}

	selectResultSet(setIndex: number) {
		this.selectedResultSet = this.resultSets[setIndex];
	}
}
