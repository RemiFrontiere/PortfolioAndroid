import { Component , Input} from '@angular/core';

@Component({
    selector: 'about-component',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent {
  @Input() lang: string;

}
