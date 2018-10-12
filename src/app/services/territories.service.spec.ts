import { TestBed } from '@angular/core/testing';

import { TerritoriesService } from './territories.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TerritoriesService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [ HttpClientTestingModule ],
		providers: [ TerritoriesService ]
	}));

	it('should be created', () => {
		const service: TerritoriesService = TestBed.get(TerritoriesService);
		expect(service).toBeTruthy();
	});
});
