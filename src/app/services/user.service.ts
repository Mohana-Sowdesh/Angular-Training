import { Injectable } from '@angular/core';
import { USERNAMES } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public userData = [{userId: 1, name: USERNAMES[0]}, { userId: 2, name: USERNAMES[1]}];

  constructor() { }
}
