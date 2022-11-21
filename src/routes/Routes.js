import { Router } from "express";
import { login, signUp } from "../controllers/user.controller.js";
import { loginBodyValidation } from "../middlewares/loginBodyValidation.middlewares.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyValidation.middleware.js";

const router = Router();

router.post("/", loginBodyValidation, login);
router.post("/signup", signUpBodyValidation, signUp);
router.get("/home", getRegistry);
router.post("/register", postItem);

export default router;