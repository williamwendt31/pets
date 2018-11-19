import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allPets() {
    return this._http.get('/api/allPets');
  }

  newPet(pet) {
    return this._http.post('/api/newPet', pet);
  }

  removePet(petId) {
    return this._http.delete(`/api/removePet/${petId}`);
  }

  updatePet(pet) {
    return this._http.put('/api/updatePet', pet);
  }

  findPet(petId) {
    return this._http.get(`/api/findPet/${petId}`);
  }

  likePet(pet) {
    return this._http.put('/api/likePet/', pet);
  }
}
