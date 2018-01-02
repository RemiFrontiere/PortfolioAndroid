//import * as firebase from "firebase";
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { DiplomeComponent } from './components/diplome/diplome.component';
import { CompetenceComponent } from './components/competence/competence.component';
import { ProjetComponent } from './components/projet/projet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [ // Composants
    AppComponent,
    DashboardComponent,
    AboutComponent,
    DiplomeComponent,
    CompetenceComponent,
    ProjetComponent
  ],
  imports: [ // Imports
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ProjetComponent,
    DiplomeComponent,
    CompetenceComponent] // Composants
})
export class AppModule { }
