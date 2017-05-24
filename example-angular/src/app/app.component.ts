import { Component } from '@angular/core';
import * as Shakespeare from 'shakespeare-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sonnets = Shakespeare.sonnets.all();
  constructor() { }
  search(term) {
    this.sonnets = Shakespeare.sonnets.find(term);
  }
}
