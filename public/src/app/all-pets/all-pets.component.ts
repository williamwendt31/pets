import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  pets: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allPets();
  }

  allPets() {
    let observable = this._httpService.allPets();
    observable.subscribe(data => {
      this.pets = data['pets'];
    });
  }
}
