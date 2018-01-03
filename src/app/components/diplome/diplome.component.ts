import { Component, Input } from '@angular/core';
import { Diplome } from '../../diplome';

@Component({
    selector: 'diplome-component',
    templateUrl: 'diplome.component.html',
    styleUrls: ['diplome.component.scss']
})
export class DiplomeComponent {
  @Input('item') item: Diplome;

}
