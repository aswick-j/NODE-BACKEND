import express from "express";

import { RegisterController,LoginController } from "../controllers/users.js";

const router = express.Router();

import users from "../model/users.js";

router.post("/register", RegisterController);

router.post("/login",LoginController );

export default router;
