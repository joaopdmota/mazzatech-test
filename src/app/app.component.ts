import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UsersState } from './store';
import { SetFavorites } from './store/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Select(UsersState.GetFavoriteUsers) favorites: Observable<any>;
  favs = [];

  constructor(private store: Store) {}

  ngOnInit() {
    const favoriteUsers = JSON.parse(window.sessionStorage.getItem('users'));

    this.favorites.subscribe(f => {
      if (f.length) {
        this.favs = f;
      }
    });

    if (favoriteUsers && !this.favs.length)  {
      this.store.dispatch(new SetFavorites(favoriteUsers));
    }
  }
}
