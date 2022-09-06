import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(
    private usersService: UsersService
  ) { 
    this.users$ = this.usersService.getUsers$();
  }

  ngOnInit(): void {
  }

}
