import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private subject: BehaviorSubject<Array<User>>;

  constructor() { 
    this.subject = new BehaviorSubject<Array<User>>([]);
  }

  getUsers$(): Observable<Array<User>> {
    return this.subject.asObservable();
  }

  addUser(user: User) {
    const newVal = [...this.subject.value,user];
    this.subject.next(newVal);
  }

  setUsers(users: Array<User>) {
    this.subject.next(users);
  }
}
