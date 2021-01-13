import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UsersState } from '../store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select(UsersState.GetFavoriteUsers) favorites: Observable<any>;

  favs:any = [];
  loading: Boolean = false;

  constructor(private router: Router ) {}

  ngOnInit() {
    this.favorites.subscribe(f => {
      if (f.length) {
        this.favs = f;
      }
    });
  }

  sendToFavoriteRoute() {
    this.router.navigate(['/favorites']);
  }
}
