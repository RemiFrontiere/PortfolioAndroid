import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input('lang') selectedLang: string;

  constructor() {
    }

    ngOnChanges() {
      console.log("LANG1:",this.selectedLang);
      console.log("LANG2:",this.selectedLang);
      console.log("LANG3:",this.selectedLang);
    }

    ngOnInit() {

    }
  title = 'dashboard';
}
