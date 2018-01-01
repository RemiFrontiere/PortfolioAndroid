import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input('lang') selectedLang: string;

  public selectedChip = "Tout";


  public chip1 = 'Tout';
  public chip2 = 'Web';
  public chip3 = 'Mobile';



  public competences = [
    {
      "id": "dd",
      "color": ""
    },
    {
      "id": "C#",
      "color": "#b0233c",
      "type":"",
      "icon":"",
      "lvl":"35"
    },
    {
      "id": "Android Studio",
      "color": "#444493",
      "type":"Mobile",
      "icon":"android.png",
      "lvl":"20"
    },
    {
      "id": "Javascript",
      "color": "#297200",
      "type":"Web",
      "icon":"js.png",
      "lvl":"20"
    },
    {
      "id": "Typescript",
      "color": "#297200",
      "type":"Web",
      "icon":"ts.png",
      "lvl":"40"
    },
    {
      "id": "Angular",
      "color": "#297200",
      "type":"Web",
      "icon":"angular.ico",
      "lvl":"40"
    },
    {
      "id": "VueJs",
      "color": "#297200",
      "type":"Web",
      "icon":"vue.png",
      "lvl":"20"
    },
    {
      "id": "Git",
      "color": "gray",
      "type":"Versionning",
      "icon":"git.png",
      "lvl":"60"
    },
    {
      "id": "HTML/Pug",
      "color": "#297200",
      "type":"Web",
      "icon":"html.png",
      "lvl":"50"
    },
    {
      "id": "Css/Scss/Less",
      "color": "#297200",
      "type":"Web",
      "icon":"",
      "lvl":"60"
    },
    {
      "id": "UML",
      "color": "#ba520e",
      "type":"",
      "icon":"",
      "lvl":"20"
    },
    {
      "id": "Windows Phone",
      "color": "#444493",
      "type":"Mobile",
      "icon":"",
      "lvl":"20"
    }
];

  constructor() {
    }

    ngOnChanges() {
      console.log("LANG1:"+this.selectedLang+"ddddddd");
    }

    ngOnInit() {

    }


  title = 'dashboard';

}
