import {instance} from "../server.js";
import Razorpay from "razorpay";
import crypto from 'crypto';
import { Payment } from "../model/PaymentModel.js";
import { User } from "../model/User.js"; 
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
export const checkout = async (req, res) => {
    const options = {
      amount: Number(req.body.price )* 100,
      currency: 'INR',
    };

    const order = await instance.orders.create(options);
    console.log(order)
    res.status(200).json({
      success: true,
      order,
    });
  };

  export const paymentverification = catchAsyncError(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user.role === "admin")
      return next(new ErrorHandler("Admin can't Buy Products", 400));

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

    const body = razorpay_order_id+ "|" +razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');
    const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database operations for successful payment verification could go here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    // Redirect to payment success page with reference
    return res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
  } else {
    // Handle invalid signature scenario
    return res.status(400).json({
      success: false,
      message: 'Payment verification failed. Signature mismatch.'
    });
  }
  });

  export const getRazorPayKey = async (req, res, next) => {
    res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_API_KEY,
    });
  };