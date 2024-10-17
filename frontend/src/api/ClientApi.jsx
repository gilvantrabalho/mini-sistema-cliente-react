import api from './Config';

const getAll = (filters = {}) => {
    return api.get('client', { params: filters });
}

const register = (data) => {
    return api.post('client', data);
};

const deleteClient = (id) => {
    return api.delete(`client/${id}`);
}

const getClient = (id) => {
    return api.get(`client/${id}`);
}

const edit = (id, data) => {
    return api.put(`client/${id}`, data);
}

export { getClient, register, getAll, deleteClient, edit }