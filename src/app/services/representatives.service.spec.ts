import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepresentativesService } from './representatives.service';

describe('RepresentativesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [ RepresentativesService ]
		});
	});

	it('should be created', inject([RepresentativesService], (service: RepresentativesService) => {
		expect(service).toBeTruthy();
	}));
});
