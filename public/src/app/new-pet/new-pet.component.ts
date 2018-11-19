import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  errors: any;
  dupError: any;
  pet = { name: "", type: "", description: "", skill_one: "", skill_two: "", skill_three: "", likes: 0 };

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    let observable = this._httpService.newPet(this.pet);
    observable.subscribe(data => {
      console.log(data);
      if (data['dupError']) {
        this.dupError = data['dupError'];
      }
      
      if (data['error']) {
        this.errors = [];
        for (let msg in data['error'].errors) {
          this.errors.push(data['error'].errors[msg].message)
        }
      } 
      
      if (data['success']) {
        console.log('here');
        this._router.navigate(['/pets']);
      }
    });

    this.dupError = null;
    this.errors = null;
    this.pet = { name: "", type: "", description: "", skill_one: "", skill_two: "", skill_three: "", likes: 0 };

  }
}
