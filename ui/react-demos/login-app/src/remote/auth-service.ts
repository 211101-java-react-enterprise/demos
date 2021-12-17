import { Principal } from "../models/Principal";
import { appClient } from "./app-client"

export const authenticate = async (credentials: {username: string, password: string}) => {

    let resp = await appClient.post('/auth', credentials);
    
    if (resp.status == 401) {
        throw resp.data;
    }

    if (resp.status == 200) {
        console.log('Authentication success!'); 
    }

    return resp.data;

}