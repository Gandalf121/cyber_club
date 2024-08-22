import axios from "axios";
import axiosConfig from "./axiosConfig.ts"
export function login(email: string, password: string) {
    const req = {
        email: email,
        password: password,
    }
    return axios.post(axiosConfig.auth.login, req)
}