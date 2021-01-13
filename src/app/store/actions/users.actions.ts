export class SelectUser {
  static readonly type = '[Users] Select user';
  constructor(public readonly payload: any) {}
}

export class UnselectUser {
  static readonly type = '[Users] Unselect user';
  constructor() {}
}

export class AddFavorite {
  static readonly type = '[Users] Add favorite user';
  constructor(public readonly payload: any) {}
}

export class SetFavorites {
  static readonly type = '[Users] Add favorite users';
  constructor(public readonly payload: any) {}
}

export class DeleteFavorite {
  static readonly type = '[Users] Delete favorite user';
  constructor(public readonly payload: any) {}
}


