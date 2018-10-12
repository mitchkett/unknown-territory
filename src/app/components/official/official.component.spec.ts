import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialComponent } from './official.component';
import { MatIconModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChannelLinkComponent } from '../channel-link/channel-link.component';
import { Official } from 'src/app/models/official.model';

describe('OfficialComponent', () => {
	let component: OfficialComponent;
	let fixture: ComponentFixture<OfficialComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OfficialComponent, ChannelLinkComponent],
			imports: [ MatIconModule, FontAwesomeModule ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OfficialComponent);
		component = fixture.componentInstance;
		const componentOfficial = new Official();
		component.official = componentOfficial;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
