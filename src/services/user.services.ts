// importing User model

import User, { createUser, IUser } from '../models/user.model';

const userService = { 
    findByEmail: async (email: string):Promise<IUser | null> => {
        return await User.findOne({email: email})
    },

    findById: async (id: string):Promise<IUser | null> => {
        return await User.findById({_id: id})
    },

    createUser: async (lastname: string, firstname: string, middlename: string, dob: string, email: string, password: string, phoneNum: string):Promise<any> => {
        return await User.create({lastname, firstname, middlename, dob, email, password, phoneNum})
    }

}


export default userService;