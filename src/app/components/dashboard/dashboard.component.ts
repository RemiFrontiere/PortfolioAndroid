import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'dashboard';
}
