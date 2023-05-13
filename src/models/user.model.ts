// Creating User models 

import mongoose, { Schema, Document} from "mongoose";
import {Request} from 'express'

export interface IUser extends Document {
    lastname: string,
    firstname: string,
    middlename: string,
    dob: string,
    email: string,
    password: string,
    phoneNum: string
}

export interface createUser{
    lastname: string;
    firstname: string;
    middlename: string;
    dob: string
    email: string;
    password: string;
    phoneNum: string;
}
export interface UserLogin{
    email: string;
    password: string;
}

export interface IGetUserAuth extends Request{
    user: any;
}

// User Schema

const userSchema: Schema = new Schema({
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    dob: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String
    }
})


export default mongoose.model<IUser>('User', userSchema);