import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showMenu = false;
  public selectedLang = 'fr';
  public langs = [
    {value: 'fr', viewValue: 'Français'},
    {value: 'uk', viewValue: 'English'}
  ];
}
