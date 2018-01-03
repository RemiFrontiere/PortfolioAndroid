import { Component, Input } from '@angular/core';

/*Class*/
import { Project } from '../../project';

@Component({
    selector: 'projet-component',
    templateUrl: 'projet.component.html',
    styleUrls: ['projet.component.scss']
})
export class ProjetComponent {
  @Input() item: Project;

  constructor(){
  }

  ngOnChanges() {
  }

}
