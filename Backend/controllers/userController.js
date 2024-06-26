import { catchAsyncError } from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../utils/errorHandler.js';
import { User } from '../model/User.js';
import { sendToken } from '../utils/sendToken.js'
import { sendEmail } from '../utils/sendEmail.js';
import cloudinary from 'cloudinary'
import crypto from 'crypto';

// register
export const register = catchAsyncError(async (req, res, next) => {

    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return next(new ErrorHandler("Please enter all required fields", 400));
    }

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User already Exist", 409));


    user = await User.create({
        firstname,
        lastname,
        email,
        password,
        avatar: {
            public_id: "tempid",
            url: "tempurl",
        },
    });
    console.log("User created successfully:", user._id);
    sendToken(res, user, "Registered Successfully", 201)
});

// login
export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
console.log(email, password);
    if (!email || !password)
        return next(new ErrorHandler("Please enter all field", 400));

    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return next(new ErrorHandler("Incorrect Email or Password", 401));

    sendToken(res, user, `Welcome back, ${user.firstname}`, 200);
});


// logout
export const logout = catchAsyncError(async (req, res, next) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    }).json({
        success: true,
        message: "Logged Out Succcessfully",
    });
});

// profile
export const getMyProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    res.status(200)
        .json({
            success: true,
            user,
        });
});

// changing of password and comparing it with old password when login
export const changePassword = catchAsyncError(async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;


    if (!oldPassword || !newPassword)
        return next(new ErrorHandler("Please enter all field", 400));

    const user = await User.findById(req.user._id).select("+password");

    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch)
        return next(new ErrorHandler("Incorrect Old Password", 400));

    user.password = newPassword;

    await user.save();
    res.status(200).json({
        success: true,
        message:"Password changed Successfully",
    });
});

// forget password
export const forgetPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("User not found", 400));
    }

    const resetToken = await user.getResetToken();
    // http://localhost:3000/resetpassword/ncjksdncijsndjkcnsdjkncks
    //send token via email

    await user.save();

    const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken};`
    const message = `Click on the link to reset your password. ${url}. If you have not requested then please ignore`;
    await sendEmail(user.email, "Reset Password", message);
    res.status(200)
        .json({
            success: true,
            message: `Reset Token has been sent to ${user.email}`,
        });

});

// reset password
export const resetPassword = catchAsyncError(async (req, res, next) => {
    const { token } = req.params;

    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now(),
        },

    });
    if (!user)
        return next(new ErrorHandler("Token is Invalid or has been expired", 401));

    user.password = req.body.password;
    user.resetPasswordExpire = undefined;
    user.resetPasswordToken = undefined;

    await user.save();
    res.status(200)
        .json({
            success: true,
            message: "Password Changed Successfully",
            token,
        });
});

// Admin controllers
export const getAllUsers = catchAsyncError(async (req,res,next) => {
    const users = await User.find({
        
    });

    res.status(200).json({
        success: true,
        users,
    });
});
// update user role
export const updateUserRole = catchAsyncError(async (req,res,next) => {
    const user = await User.findById(req.params.id);

    if (!user) return next (new ErrorHandler("User Not found",404));

    if (user.role==="user") user.role="admin";
    else user.role = "user";

    await user.save();
    res.status(200).json({
        success: true,
        message:"Role Updated",
    });
});
// delete user role
export const deleteMyProfile = catchAsyncError(async (req,res,next) => {
    const user = await User.findById(req.user._id);

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    await user.deleteOne({ _id: req.user._id });
    res.status(200)
    .cookie("token", null, {
        expires: new Date(Date.now(0)),
    }).json({
        success: true,
        httpOnly: true,
        message:"User Deleted Successfully",
    });
});