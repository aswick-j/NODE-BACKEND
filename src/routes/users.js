import express from "express";

const router = express.Router();

import { RegisterController,LoginController } from "../controllers/users.js";

router.post("/register", RegisterController);

router.post("/login",LoginController );

export default router;
