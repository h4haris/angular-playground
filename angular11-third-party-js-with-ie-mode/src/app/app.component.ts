import { Component } from '@angular/core';
declare function MakeRanger(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11-third-party-js-with-ie-mode';

  constructor() {
    const ranger = new MakeRanger();
    console.log(ranger);
    console.log(ranger.GetRangerRemoteJSVersion());
  }
}
