import { userCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
  const user = res.locals.user;
  const aliasPassword = bcrypt.hashSync(user.password, 10);

  try {
    await userCollection.insertOne({ ...user, password: aliasPassword });
    res.sendStatus(201);
    if (!user) {
      return res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function login(req, res) {}
