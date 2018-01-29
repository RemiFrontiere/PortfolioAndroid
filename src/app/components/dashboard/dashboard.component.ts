import { Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/*JSON*/
import { Project } from '../../project';
import { Competence } from '../../competence';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  @Input('lang') selectedLang: string;

  public myProjects : Array<Project>;
  public myCompetences : Array<Competence>;

  public selectedProject : Project;
  public selectedChip = "Tout";
  public chip2 = 'Web';
  public chip3 = 'Mobile';

   constructor(private http: HttpClient) {
     this.myProjects = [];
     this.myCompetences = [];
    }
   ngOnInit() {
     this.getJson();
  }
  ngOnChanges() {
  }

  public getJson(){
    this.http.get('../../../assets/JSON/competences.json').subscribe(data => {
      for (let i of data['competences']) {
        this.myCompetences.push(new Competence(i["id"], i["type"], i["icon"], i["lvl"]));
      }
    });
    if(this.selectedLang == 'fr'){
      this.http.get('../../../assets/JSON/projects.json').subscribe(data => {
        for (let i of data['projects']) {
          this.myProjects.push(new Project(i["id"], i["name"], i["language"], i["topimg"], i["texts"]));
        }
        this.selectedProject = this.myProjects[0];
      });
    }
    else if(this.selectedLang == 'uk'){
      this.http.get('../../../assets/JSON/projectsUK.json').subscribe(data => {
        for (let i of data['projects']) {
          this.myProjects.push(new Project(i["id"], i["name"], i["language"], i["topimg"], i["texts"]));
        }
        this.selectedProject = this.myProjects[0];
      });
    }
  }
}
