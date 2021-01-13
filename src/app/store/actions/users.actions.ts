export class SelectUser {
  static readonly type = '[Users] Select user';
  constructor(public readonly payload: any) {}
}
export class GetUsers {
  static readonly type = '[Users] Get users';
  constructor(public readonly payload: any) {}
}
