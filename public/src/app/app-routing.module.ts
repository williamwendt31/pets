import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
const routes: Routes = [
  { path: 'pets', component: AllPetsComponent },
  { path: 'pets/new', component: NewPetComponent },
  { path: 'pets/:_id', component: ShowPetComponent },
  { path: 'pets/:_id/edit', component: EditPetComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
