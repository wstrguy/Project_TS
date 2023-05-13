// Importing Section
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import userService from '../services/user.services'
import { createUser, IGetUserAuth, IUser, UserLogin } from '../models/user.model';


// Creating User controllers

export const userSignup = async (req:Request<{}, {}, createUser>, res: Response):Promise<Response> => {
    let { lastname, firstname, middlename, dob, email, password, phoneNum} = req.body;
    try {
        
        // check if user already Exist 
        const userExist = await userService.findByEmail(email)
        if (userExist) return res.status(400).json({ message: 'User already exist'})

        // creating Hashed password 
        password = await bcrypt.hash(password, 10)

        // Creating user
        const user = await userService.createUser(lastname, firstname, middlename, dob, email, password, phoneNum)
        return res.status(201).json({
            message: 'User created Successfully',
            data: user
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message
        })
    }
};


// User login

export const userLogin = async (req:Request<{}, {}, UserLogin>, res:Response):Promise<Response> => {
    let { email, password} = req.body;
    try {
        const userExist = await userService.findByEmail(email)
        if (!userExist)
        return res.status(400).json({
            message: 'User does not Exist'
        }) 
                 
        const checkPwd: boolean = await bcrypt.compare(password, userExist.password)

        
        if (!checkPwd) return res.status(400).json({
            message: 'Incorrect password'
        })
        req.session.user = userExist        

        return res.status(200).json({
            message: 'User Logged In',
            user: req.session.user._id
        })
    } catch (error: any) {        
        return res.status(500).json({
            error: error.message
        })
    }
};


// Getting  users profile

export const getProfile = async (req:Request, res:Response):Promise<Response> => {
    const id = (req as IGetUserAuth).user._id
    try {
        const getUsers = await userService.findById(id)
        return res.status(200).json({
            message: 'User Profile',
            user: getUsers
        })
    } catch (error: any) {
        return res.status(500).json({
            error: error.message
        })
    }
};
