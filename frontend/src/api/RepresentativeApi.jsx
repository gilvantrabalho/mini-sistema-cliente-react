import api from './Config';

const register = (data) => {
    return api.post('representative', data);
}

const getAll = (city) => {
    return api.get('representative', { params: city });
}

export {
    register,
    getAll
}
