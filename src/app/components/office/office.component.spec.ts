import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OfficeComponent } from './office.component';
import { Office } from 'src/app/models/office.model';
import { Official } from 'src/app/models/official.model';
import { OfficialComponent } from '../official/official.component';
import { ChannelLinkComponent } from '../channel-link/channel-link.component';

describe('OfficeComponent', () => {
	let component: OfficeComponent;
	let fixture: ComponentFixture<OfficeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OfficeComponent, OfficialComponent, ChannelLinkComponent],
			imports: [ MatCardModule, MatIconModule, FontAwesomeModule ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OfficeComponent);
		component = fixture.componentInstance;

		const componentOffice = new Office();
		componentOffice.officialIndices = [1, 2, 3];
		const componentOfficials: Official[] = [];

		component.office = componentOffice;
		component.officials = componentOfficials;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
