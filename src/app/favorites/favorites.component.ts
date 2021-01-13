import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AlertDialogComponent } from '../modal/modal.component';
import { UsersState } from '../store';
import { SelectUser } from '../store/actions/users.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favs = [];

  constructor(
    private dialog: MatDialog,
    private store: Store,
  ) { }
  @Select(UsersState.GetFavoriteUsers) favorites: Observable<any>;

  ngOnInit() {
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
}
