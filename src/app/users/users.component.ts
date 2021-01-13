import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { UsersService } from '../../services/users/users.service';
import { AlertDialogComponent } from '../modal/modal.component';
import { SelectUser } from '../store/actions/users.actions';

export interface User {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'phone', 'website'];
  loading: Boolean = false;
  users: Array<User> = [];

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private store: Store,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  openAlertDialog(user) {
    this.store.dispatch(new SelectUser(user));

    this.dialog.open(AlertDialogComponent, {
      data:{},
    });
  }

  async getUsers() {
    this.loading = true;
    this.users = await this.usersService.getUsers();
    this.loading = false;
  }
}
