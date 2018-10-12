import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OfficeComponent } from './components/office/office.component';
import { OfficialComponent } from './components/official/official.component';
import { ChannelLinkComponent } from './components/channel-link/channel-link.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
	MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatSelectModule, MatMenuModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TerritoriesService } from './services/territories.service';
import { RepresentativesService } from './services/representatives.service';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				OfficeComponent,
				OfficialComponent,
				ChannelLinkComponent
			],
			providers: [ TerritoriesService, RepresentativesService, MapsAPILoader ],
			imports: [
				MatInputModule,
				MatFormFieldModule,
				MatButtonModule,
				MatToolbarModule,
				MatIconModule,
				MatCardModule,
				MatSelectModule,
				MatMenuModule,
				FontAwesomeModule,
				ReactiveFormsModule,
				AgmCoreModule,
				FontAwesomeModule,
				HttpClientTestingModule
			]
		}).compileComponents();
	}));
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	// it(`should have as title 'app'`, async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.debugElement.componentInstance;
	// 	expect(app.title).toEqual('app');
	// }));
	// it('should render title in a h1 tag', async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('Welcome to unknown-territory!');
	// }));
});
