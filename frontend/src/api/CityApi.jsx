import api from './Config';

const getAll = (filters) => {
    return api.get('city');
};

export { getAll }