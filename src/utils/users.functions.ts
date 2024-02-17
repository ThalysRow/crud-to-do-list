import { knex } from "../database/connection";

export const findUserByEmail = async (email: string) => {
  const user = await knex("users").where("email", email).first();
  return user;
};

export const formateData = (data: string): string => {
  const stringToArray = data.trim().toLocaleLowerCase().split(" ");

  for (let i = 0; i < stringToArray.length; i++) {
    stringToArray[i] =
      stringToArray[i][0].toLocaleUpperCase() +
      stringToArray[i].slice(1).toLocaleLowerCase();
  }

  return stringToArray.join(" ");
};

export const findUserById = async (id: number) => {
  const user = knex("users").where("id", id).first();
  return user;
};
