import { Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { Project } from '../../project';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  @Input('lang') selectedLang: string;

  public myProjects : Array<Project>;

   constructor(private http: HttpClient) {
     this.http.get('../../../assets/JSON/projects.json').subscribe(data => {
       // Read the result field from the JSON response.

       for (let i of data['projects']) {
         let v = new Project(i["id"], i["name"], i["language"]);
         console.log("JSOsqsqsqN",v);
         this.myProjects.push(v);
       }
       console.log("JSON",this.myProjects);
     });
     }
   ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.selectedProject);
  }





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
      "lvl":"55"
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
    }];
  public diplomes = [
    {
      "id": "dd",
      "color": ""
    },
    {
      "id": "Bac Professionnel Technicien Menuisier Agenceur",
      "total": "",
      "ville":"Vichy [03]",
      "univ":"ddddefefefefe",
      "alternance":"true",
      "date":"2013"
    },
    {
      "id": "Bac Technologique STI2D opt. SIN",
      "total": "Bac Technologique Sciences et Technologies de l'Industrie et du Développement Durable option Système d’Information et Numérique",
      "ville":"Digoin [71]",
      "univ": "Cité Scolaire Camille Claudel",
      "alternance":"",
      "date":"2015"
    },
    {
      "id": "BTS SIO opt. SLAM",
      "total": "BTS Service Informatique aux Organisations option Solutions Logicielles et Applications Métiers",
      "ville":"Vichy [03]",
      "univ": "",
      "alternance":"",
      "date":"2017"
    },
    {
      "id": "Licence Professionnel DIM",
      "total": "Licence Professionnel Développeur Informatique Multisupport",
      "ville":"Annecy [74]",
      "univ": "",
      "alternance":"true",
      "date":"En cours"
    },
  ];
  public projets = [
    {
      "id": "dd"
    },
    {
      "id": "0",
      "name": "Portfolio Remi Frontiere",
      "ville":"Angular 5 - Typescript",
    },
    {
      "id": "1",
      "name": "Logiciel Enregistrement Carte Grise",
      "ville":"C#",
    },
    {
      "id": "2",
      "name": "Allier Tests",
      "ville":"C#",
    },
    {
      "id": "3",
      "name": "DLL",
      "ville":"C#",
    },
    {
      "id": "4",
      "name": "Logiciel Facturation",
      "ville":"C#",
    },
    {
      "id": "5",
      "name": "Application mobile KumQuat",
      "ville":"Android Studio",
    },
  ];

  public selectedChip = "Tout";
  public selectedProject = this.projets[1];
  public selectedProjectID = 1;

  public chip1 = 'Tout';
  public chip2 = 'Web';
  public chip3 = 'Mobile';


  public getJson(){

    // http.get('/your.json').subscribe(data => {
    //   this.results = data;
    // });
  }

  public nextProject(){
    console.log("AV",this.selectedProject);
    this.selectedProject = this.projets[this.selectedProjectID+1];
    this.selectedProjectID++;
    console.log("AP",this.selectedProject);
  }
}
