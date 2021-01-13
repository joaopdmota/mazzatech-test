import { State, Selector, Action, StateContext } from '@ngxs/store';

import { SelectUser, AddFavorite, DeleteFavorite, SetFavorites, UnselectUser } from './actions/users.actions';

export interface UsersStateModel {
  users: any[];
  favorites: any[];
  selectedUser: Object;
}

@State<UsersStateModel>({
  name: 'UsersState',
  defaults: {
    users: [],
    selectedUser: null,
    favorites: [],
  }
})
export class UsersState {

  @Selector() static GetUsers(state: UsersStateModel): any {
    return state.users;
  }

  @Selector() static GetSelectedUser(state: UsersStateModel): any {
    return state.selectedUser;
  }

  @Selector() static GetFavoriteUsers(state: UsersStateModel): any {
    return state.favorites;
  }

  @Action(SelectUser)
  SelectUser(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: SelectUser
  ) {
    patchState({ selectedUser: {...payload }});
  }

  @Action(UnselectUser)
  UnselectUser(
    { patchState, }: StateContext<UsersStateModel>,
  ) {
    patchState({ selectedUser: null});
  }

  @Action(SetFavorites)
  SetFavorites(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: SetFavorites
  ) {
    const users = [...payload];

    patchState({ favorites: [...users]});

    window.sessionStorage.setItem('users', JSON.stringify(users));
  }

  @Action(AddFavorite)
  AddFavorite(
    { patchState, getState }: StateContext<UsersStateModel>,
    { payload }: AddFavorite
  ) {
    const state = getState();
    const users = [...state.favorites, payload];

    patchState({ favorites: [...users]});

    window.sessionStorage.setItem('users', JSON.stringify(users));
  }

  @Action(DeleteFavorite)
  DeleteFavorite(
    { patchState, getState }: StateContext<UsersStateModel>,
    { payload }: DeleteFavorite
  ) {
    const state = getState();
    const users = state.favorites.filter(({ id }) => payload !== id);

    if (users.length) {
      window.sessionStorage.setItem('users', JSON.stringify(users));
    } else {
      window.sessionStorage.removeItem('users')
    }

    patchState({ favorites: [...users]});
  }

}
