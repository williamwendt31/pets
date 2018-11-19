import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {
  petId: any;
  pet: any;
  isLiked: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.petId = params['_id'];
    });
    
    this.findPet();
    this.isLiked = false;
  }

  findPet() {
    let observable = this._httpService.findPet(this.petId);
    observable.subscribe(data => {
      this.pet = data['pet'];
    });
  }

  onAdopt() {
    let observable = this._httpService.removePet(this.petId);
    observable.subscribe(data => {
      this._router.navigate(['/pets']);
    });
  }

  onLike() {
    this.pet.likes += 1;
    let observable = this._httpService.likePet(this.pet);
    observable.subscribe(data => {
      if (data['success']) {
        this.isLiked = true;
      }
    });

    this.findPet();
  }
}
