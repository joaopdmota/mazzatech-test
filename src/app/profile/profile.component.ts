import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  storedUsers:any = [];
  loading: Boolean = false;


  constructor() {}

  ngOnInit() {
    this.storedUsers = this.fetchUsers() || [];
  }

  fetchUsers() {
    return window.localStorage.getItem('users');
  }
}
