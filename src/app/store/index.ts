import { State, Selector, Action, StateContext } from '@ngxs/store';

import { SelectUser } from './actions/users.actions';

export interface UsersStateModel {
  users: any[];
  selectedUser: Object;
}

@State<UsersStateModel>({
  name: 'UsersState',
  defaults: {
    users: [],
    selectedUser: null,
  }
})
export class UsersState {

  @Selector() static GetUsers(state: UsersStateModel): any {
    return state.users;
  }

  @Selector() static GetSelectedUser(state: UsersStateModel): any {
    return state.selectedUser;
  }

  @Action(SelectUser)
  SelectUser(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: SelectUser
  ) {
    patchState({ selectedUser: {...payload }});
  }
}
