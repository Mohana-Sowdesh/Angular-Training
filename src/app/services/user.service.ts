import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public userData = [{name: 'Somukumar Ekambaram'}, { name: 'Mounika Murugeshan'}];

  constructor() { }
}
