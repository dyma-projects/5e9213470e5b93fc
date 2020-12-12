import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.users.subscribe((users: string[])=> {
      this.users=users
    });
    // il faut initialiser les users ici avec le service
  }

}
