import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ContractsComponent } from './components/contracts/contracts.component';

import { ContractService } from './services/contract.service';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: '', redirectTo: 'contracts', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatBadgeModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }