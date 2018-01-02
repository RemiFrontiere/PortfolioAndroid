import { Component, Input } from '@angular/core';

@Component({
    selector: 'diplome-component',
    templateUrl: 'diplome.component.html',
    styleUrls: ['diplome.component.scss']
})
export class DiplomeComponent {
  @Input('item') item: string;

}
