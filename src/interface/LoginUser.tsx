export interface LoginUser {
  Login: string;
  Password: string;
}

export interface IUserMap {
  Email: string;
  LastName: string;
  Type: string;
  Login: string;
  Name: string;
  Id: number;
}

export interface Response {
  Message: string;
  User: IUserMap;
  Token: string;
}
