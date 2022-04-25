import axios from "axios";

const BASE_URL = 'http://localhost:5000';

async function signUp(body) {
    await axios.post(`${BASE_URL}/sign-up`, body)
}

async function signIn(body) {
    await axios.post(`${BASE_URL}/sign-in`, body)
}


const api = {
    signUp,
    signIn
}

export default api;
