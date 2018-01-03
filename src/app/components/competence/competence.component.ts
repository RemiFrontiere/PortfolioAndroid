import { Component, Input } from '@angular/core';

import { Competence } from '../../competence';

@Component({
    selector: 'competence-component',
    templateUrl: 'competence.component.html',
    styleUrls: ['competence.component.scss']
})
export class CompetenceComponent {
@Input('item') item: Competence;
@Input('selectedChip') selectedChip: string;

ngOnChanges() {
}

}
