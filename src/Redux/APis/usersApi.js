import axios from "axios";

export const loadUsersApi = async () => axios.get(`http://localhost:8000/user`);

export const adduserApi = async (newUser) => axios.post(`http://localhost:8000/user`, newUser);

export const updateUserApi = async (updateUser) => axios.put(`http://localhost:8000/user/${updateUser.id}`, updateUser.values);

export const deleteUserApi = async (deleteUser) => axios.delete(`http://localhost:8000/user/${deleteUser}`);




