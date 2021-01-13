import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UsersState } from '../store';
import { SelectUser } from '../store/actions/users.actions';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class AlertDialogComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"
  @Select(UsersState.GetSelectedUser) selectedUser: Observable<any>;
  lat: number = 0;
  lng: number = 0;
  zoom: number = 15;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>,
  ) {
    this.dialogRef.updateSize('300vw','300vw')
  }

  ngOnInit() {
    this.selectedUser.subscribe(user => {
      this.lat = Number(user.address.geo.lat);
      this.lng = Number(user.address.geo.lat);
    });
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
