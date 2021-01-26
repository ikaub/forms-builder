export interface User {
  email: string;
  password: string;
}

export interface Token {
  access_token: string;
}

export interface AuthState {
  token: string;
  error: string;
}
