import express from "express";

import { userController } from "../controllers/index.js";
import { isAuthenticated } from "../middlewares/index.js";

const { register, getAllUsers } = userController;

const router = express.Router();

const userRoutes = {
  REGISTER: "/local/register",
  GET_ALL: "/local/users",
};

router.post(userRoutes.REGISTER, register);
router.get(userRoutes.GET_ALL, isAuthenticated, getAllUsers);

export default router;
