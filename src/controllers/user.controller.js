import { userCollection, sessionCollection } from "../database/db.js";

import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function login(req, res) {
  const { email, password } = req.body;
  const token = uuid();

  try {
    const userExists = await userCollection.findOne({ email });
    if (!userExists) {
      return res.sendStatus(401);
    }

    const passwordOk = bcrypt.compareSync(password, userExists.password);
    if (!passwordOk) {
      return res.sendStatus(401);
    }

    await sessionCollection.insertOne({ token, userId: userExists._id });

    res.send({ token });
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await userCollection.insertOne({ name, email, password: hashPassword });
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}