import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { ShowPetComponent } from './show-pet/show-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    NewPetComponent,
    EditPetComponent,
    ShowPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
