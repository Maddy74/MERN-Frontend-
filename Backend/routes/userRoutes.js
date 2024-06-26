import express from "express";
import {changePassword, forgetPassword, getMyProfile, getAllUsers,updateUserRole,deleteMyProfile, login,logout, register, resetPassword} from "../controllers/userController.js";
import {authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/me").delete(isAuthenticated, deleteMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);


// admin routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
export default router;

router.route("/admin/users/:id").put(isAuthenticated, authorizeAdmin,updateUserRole);