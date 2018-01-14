import { Component, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/*Class*/
import { Project } from '../../project';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'projet-component',
    templateUrl: 'projet.component.html',
    styleUrls: ['projet.component.scss']
})
export class ProjetComponent {
  @Input() item: Project;
  private isFlipped : boolean = false;
  constructor(public dialog: MatDialog){
  }

  ngOnChanges() {
  }

  openDialog(text:string): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { img: text }
    });
  }
}
