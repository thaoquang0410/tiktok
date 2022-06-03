import axios from 'axios';

const Requests = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await Requests.get(path, options);
    return response.data;
};

export default Requests;