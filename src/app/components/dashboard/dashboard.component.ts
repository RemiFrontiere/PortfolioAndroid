import { Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/*JSON*/
import { Project } from '../../project';
import { Competence } from '../../competence';
import { Diplome } from '../../diplome';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  @Input('lang') selectedLang: string;

  public myProjects : Array<Project>;
  public myCompetences : Array<Competence>;
  public myDiplomes : Array<Diplome>;

  public selectedProject : Project;
  public selectedChip = "Tout";
  public chip1 = 'Tout';
  public chip2 = 'Web';
  public chip3 = 'Mobile';

   constructor(private http: HttpClient) {
     this.myProjects = [];
     this.myCompetences = [];
     this.myDiplomes = [];
    }
   ngOnInit() {
     this.getJson();
  }
  ngOnChanges() {
  }

  public getJson(){
    this.http.get('../../../assets/JSON/projects.json').subscribe(data => {
      for (let i of data['projects']) {
        this.myProjects.push(new Project(i["id"], i["name"], i["language"], i["topimg"], i["texts"]));
      }
      this.selectedProject = this.myProjects[0];
    });
    this.http.get('../../../assets/JSON/competences.json').subscribe(data => {
      for (let i of data['competences']) {
        this.myCompetences.push(new Competence(i["id"], i["type"], i["icon"], i["lvl"]));
      }
    });
    this.http.get('../../../assets/JSON/diplomes.json').subscribe(data => {
      for (let i of data['diplomes']) {
        this.myDiplomes.push(new Diplome(i["id"], i["total"], i["ville"], i["alternance"], i["date"]));
      }
    });
  }

  public nextProject(){
    if(Number(this.selectedProject.Id) == this.myProjects.length-1){
      this.selectedProject = this.myProjects[0];
    }
    else
    {
      this.selectedProject = this.myProjects[Number(this.selectedProject.Id) + 1];
    }
  }
  public previousProject(){
    if(Number(this.selectedProject.Id) == 0){
      this.selectedProject = this.myProjects[Number(this.myProjects.length -1)];
    }
    else
    {
      this.selectedProject = this.myProjects[Number(this.selectedProject.Id) -1];
    }
  }
}
