import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertDialogComponent } from './modal/modal.component';
import MatModules from '../utils/imports.js';
import { UsersState } from './store';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    SidebarComponent,
    AlertDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcjUUZqsS3HQfthYrfQ06aXXZV2-nO_tM'
    }),
    NgxsModule.forRoot([UsersState], { developmentMode: true } ),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ...MatModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent],
})
export class AppModule { }
