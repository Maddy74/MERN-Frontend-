import express from "express";
import { checkout, paymentverification, getRazorPayKey} from "../controllers/paymentController.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(isAuthenticated ,paymentverification);

// get razorpaykey
router.route("/razorpaykey").get(getRazorPayKey);




export default router;
