export type Task = {
  id: number;
  description: string;
  createat: Date;
  userid: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
