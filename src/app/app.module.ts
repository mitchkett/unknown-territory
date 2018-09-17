import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepresentativesService } from './services/representatives.service';
import { OfficeComponent } from './components/office/office.component';
import { OfficialComponent } from './components/official/official.component';

@NgModule({
	declarations: [
		AppComponent,
		OfficeComponent,
		OfficialComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyA_R63kyjU_cCRxVOKpqKNG3qfys10LsvY'
		})
	],
	providers: [RepresentativesService],
	bootstrap: [AppComponent]
})
export class AppModule { }
