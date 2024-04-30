export interface UserDetal {
  data: User;
  support: Suport;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  support: Suport;
}

export interface Suport {
  url: string;
  text: string;
}

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
