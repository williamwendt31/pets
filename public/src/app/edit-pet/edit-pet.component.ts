import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petId: any;
  errors: any;
  dupError: any;
  
  pet = { name: "", type: "", description: "", skill_one: "", skill_two: "", skill_three: "" };

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.petId = params['_id'];
    });
  
    this.findPet();
  }

  findPet() {
    let observable = this._httpService.findPet(this.petId);
    observable.subscribe(data => {
      console.log(data);
      this.pet = data['pet'];
    });
  }

  onSubmit() {
    let observable = this._httpService.updatePet(this.pet);
    observable.subscribe(data => {
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
        console.log('here navigating');
        this._router.navigate(['/pets']);
      }
    });

    this.dupError = null;
    this.errors = null;
  }
}
