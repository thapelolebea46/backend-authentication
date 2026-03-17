// routes/authRoutes.js
import express from "express";
import { signup, login, forgotPassword } from "../controllers/authController.js";

const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// LOGIN
router.post("/login", login);

// FORGOT PASSWORD
router.post("/forgot-password", forgotPassword);

export default router;