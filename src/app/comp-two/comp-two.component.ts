import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(
    private usersService: UsersService
  ) { 
    this.users$ = this.usersService.getUsers$();
    this.users$.subscribe((value) => {
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

}
