// import { promises } from "nodemailer/lib/xoauth2/"
import nodemailer from 'nodemailer';

export const  catchAsyncError = (passedFunction)=>(req,res,next)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next);
};