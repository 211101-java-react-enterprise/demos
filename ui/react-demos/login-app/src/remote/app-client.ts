import axios from "axios";

export const appClient = axios.create({
    baseURL: 'http://quizzardapi-env.eba-puyqjfxg.us-east-1.elasticbeanstalk.com/quizzard',
    headers: {
        'Content-Type': 'application/json'
    }
});