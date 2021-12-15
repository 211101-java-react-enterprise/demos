import axios from "axios";

export const appClient = axios.create({
    baseURL: 'http://localhost:5000/quizzard',
    headers: {
        'Content-Type': 'application/json'
    }
});