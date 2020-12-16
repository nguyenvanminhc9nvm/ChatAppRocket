export interface ILoginResponse {
  userId: string;
  authToken: string;
  me: User;
}

export interface User {
  _id: string;
  name: string;
}
