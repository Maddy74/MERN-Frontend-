import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import crypto from 'crypto';


const schema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true, "Please enter your name"],
    },
    lastname:{
        type:String,
        required:[true, "Please enter your name"],
    },

    email:{
        type:String,
        required: [true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email"],
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "password must be atleast 6 characters"],
        select: false,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },

    avatar:{
        public_id:{
            type:String,
            required: true,
        },   url:{
            type:String,
            required: true,
        },
    },

    resetPasswordToken: String,
    resetPasswordExpire:String,
});

schema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
   this.password =  await bcrypt.hash(this.password,15);
   next()
})

schema.methods.getJWTToken = function(){
    return jwt.sign({_id: this._id},process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

};
schema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
};


schema.methods.getResetToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    this.resetPasswordExpire = Date.now() +15 * 60 * 1000;

    return resetToken;
};
export const User = mongoose.model("User", schema); 