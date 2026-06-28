import axios from 'axios';

const API_URL = 'https://resume-builder-7ngc.onrender.com/api/';

const UserLogin = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}auth/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default UserLogin;

