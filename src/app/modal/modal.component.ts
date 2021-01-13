import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UsersState } from '../store';
import { AddFavorite, DeleteFavorite, UnselectUser } from '../store/actions/users.actions';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class AlertDialogComponent implements OnInit {
  @Select(UsersState.GetSelectedUser) selectedUser: Observable<any>;
  @Select(UsersState.GetFavoriteUsers) favorites: Observable<any>;
  user = null;
  favs = [];
  lat: number = 0;
  lng: number = 0;
  zoom: number = 15;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>,
    private store: Store,
  ) {
    this.dialogRef.updateSize('300vw','300vw')
  }

  ngOnInit() {
    this.selectedUser.subscribe(u => {
      this.lat = Number(u.address.geo.lat);
      this.lng = Number(u.address.geo.lat);
      this.user = u
    });
    this.favorites.subscribe(f => {
      this.favs = f;
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new UnselectUser());
  }

  checkFavorites() {
    if (this.favs.length) {
      const favoriteUser = this.favs.find(({ id }) => this.user.id === id);
      return !!favoriteUser;
    }

    return false;
  }

  favoriteUser() {
    this.store.dispatch(new AddFavorite(this.user));
  }

  deleteFavorite() {
    this.store.dispatch(new DeleteFavorite(this.user.id));
  }
}
