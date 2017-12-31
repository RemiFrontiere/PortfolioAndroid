import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input('lang') selectedLang: string;

  public competences =
  ([
    {
      "id": "",
      "color": ""
    },
    {
      "id": "C#",
      "color": "pink"
    },
    {
      "id": "Java Android",
      "color": "blue"
    },
    {
      "id": "Javascript",
      "color": "#297200"
    },
    {
      "id": "Typescript",
      "color": "#297200"
    },
    {
      "id": "Angular",
      "color": "#297200"
    },
    {
      "id": "VueJS",
      "color": "#297200"
    },
    {
      "id": "Git",
      "color": "gray"
    },
    {
      "id": "HTML/Pug",
      "color": "#297200"
    },
    {
      "id": "CSS/SCSS/LESS",
      "color": "#297200"
    },
    {
      "id": "UML",
      "color": "red"
    },
    {
      "id": "WindowPhone",
      "color": "blue"
    }
]);

  constructor() {
    }

    ngOnChanges() {
      console.log("LANG1:",this.competences);
    }

    ngOnInit() {

    }


  title = 'dashboard';

}
