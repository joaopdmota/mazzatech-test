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
import { environment } from '../environments/environment';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    SidebarComponent,
    AlertDialogComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
    }),
    NgxsModule.forRoot([UsersState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ...MatModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent],
})
export class AppModule { }
