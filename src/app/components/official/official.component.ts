import { Component, OnInit, Input } from '@angular/core';
import { Official } from '../../models/official.model';

@Component({
	selector: 'app-official',
	templateUrl: './official.component.html',
	styleUrls: ['./official.component.scss']
})
export class OfficialComponent implements OnInit {

	@Input() official: Official;

	constructor() { }

	ngOnInit() {
	}

}
