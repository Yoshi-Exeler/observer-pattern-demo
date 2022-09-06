import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  currentUsername: string = ""

  currentFirstName: string = ""

  currentLastName: string = ""

  currentAge: number = 0

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  updateUsername(v: any) {
    this.currentUsername = (v as HTMLInputElement).value;
  }

  updateFirstName(v: any) {
    this.currentFirstName = (v as HTMLInputElement).value;
  }

  updateLastName(v: any) {
    this.currentLastName = (v as HTMLInputElement).value;
  }

  updateAge(v: any) {
    this.currentAge = Number((v as HTMLInputElement).value);
  }

  onCreateUser() {
    let newUser: User = {
      Age: this.currentAge,
      FirstName: this.currentFirstName,
      LastName: this.currentLastName,
      Username: this.currentUsername
    }
    this.usersService.addUser(newUser);
  }

  onClearUsers() {
    this.usersService.setUsers([]);
  }
}
