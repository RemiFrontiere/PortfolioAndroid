import { Component, Input } from '@angular/core';

@Component({
    selector: 'competence-component',
    templateUrl: 'competence.component.html',
    styleUrls: ['competence.component.scss']
})
export class CompetenceComponent {
@Input('item') item: string;
@Input('selectedChip') selectedChip: string;
public color = 'red';

ngOnChanges() {
}

}
