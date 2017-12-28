import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'about';
}
