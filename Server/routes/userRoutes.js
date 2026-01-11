import express from "express";
import {
  registerUser,
  loginUser,
  getUserById,
  getUserResumes,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", authMiddleware, getUserById);
userRouter.get("/resumes", authMiddleware, getUserResumes);

export default userRouter;
