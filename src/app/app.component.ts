import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Unknown Territory';
  lat: number = 42.9429479;
  lng: number = -85.6801226;
}
