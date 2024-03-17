import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { AddPersonComponent } from './add-person/add-person.component';

const routes: Routes = [
  { path: '', redirectTo: '/person-list', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'add', component: AddPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
