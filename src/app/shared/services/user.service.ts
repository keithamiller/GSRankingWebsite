import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Gender } from '../models/gender.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers(){
    return this.mockUsers();
  }

  mockUsers(){
    var jakTan = new User("Jak Tan", Gender.Male);
    jakTan.createUserBrief(240, 130, 260, 600, 420)
    var johnStractan = new User("Juan", Gender.Male);
    johnStractan.createUserBrief(240, 160, 280, 700, 500);
    var yeahGoodo = new User("Yeah Goodo", Gender.Male);
    yeahGoodo.createUserBrief(200, 135, 240, 9000, 820);

    var users: User[] = [johnStractan, jakTan, yeahGoodo];
    return users;
  }
}
