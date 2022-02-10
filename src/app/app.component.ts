import { Component } from '@angular/core';

declare var FieldCheck: any;
declare var EmailCheck: any;
declare var CPFCheck: any;
declare var AgeCheck: any;
declare var LatinCharsOverride: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedHotBeauty';
}