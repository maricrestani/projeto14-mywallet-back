import { Router } from "express";
import { login, signUp } from "../controllers/user.controller.js";
import {userSchemaValidation} from "../middlewares/userValidation.middleware.js"

const router = Router();

router.post("/", userSchemaValidation, login);
router.post("/signup", userSchemaValidation, signUp);

export default router;