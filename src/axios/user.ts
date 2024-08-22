import axios from "axios";
import axiosConfig from "./axiosConfig.ts"
export function createUser(email: string, password: string, fullName:string) {
    const req = {
        email: email,
        password: password,
        fullName : fullName
    }
    return axios.post(axiosConfig.user.createUser, req)
}