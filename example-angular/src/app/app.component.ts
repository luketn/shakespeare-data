import { Component } from '@angular/core';
import { Shakespeare } from 'shakespeare-data/lib/shakespeare';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shakespeare = new Shakespeare();

  sonnets = this.shakespeare.sonnets.all();
  search(term) {
    this.sonnets = this.shakespeare.sonnets.find(term);
  }
}
