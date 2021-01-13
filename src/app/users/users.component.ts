import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UsersService } from '../../services/users/users.service';
import { AlertDialogComponent } from '../modal/modal.component';
import { SelectUser } from '../store/actions/users.actions';
import { UsersState } from '../store';

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
  @Select(UsersState.GetFavoriteUsers) favorites: Observable<any>;
  displayedColumns: string[] = ['name', 'username', 'phone', 'website'];
  loading: Boolean = false;
  users: Array<User> = [];
  favs = [];

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private store: Store,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.favorites.subscribe(f => {
      this.favs = f;
    });
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

  isFavorite(user) {
    return this.favs.find(({ id }) => id === user.id);;
  }
}
