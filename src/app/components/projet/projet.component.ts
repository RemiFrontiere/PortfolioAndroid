import { Component, Input } from '@angular/core';

@Component({
    selector: 'projet-component',
    templateUrl: 'projet.component.html',
    styleUrls: ['projet.component.scss']
})
export class ProjetComponent {
  @Input() item: JSON;
  private myItem: JSON;

  constructor(){
    console.log("CONSTRU",this.myItem);
  }

  ngOnChanges() {
    console.log("ONCHANGE1",this.item);

    this.myItem = this.item;

    console.log("ONCHANGE2",this.myItem);
  }

// public refresh(){
//   this.myItem = [
//     {
//     "id":"bling",
//     }
// ];

}
