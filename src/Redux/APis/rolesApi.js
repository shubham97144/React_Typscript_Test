import axios from "axios";

export const loadRolesApi = async () => axios.get(`http://localhost:8000/role`);

export const addRoleApi = async (newRole) => axios.post(`http://localhost:8000/role`, newRole);

export const updateRoleApi = async (updateRole) => axios.put(`http://localhost:8000/role/${updateRole.id}`, updateRole.values);

export const deleteRoleApi = async (deleteRole) => axios.delete(`http://localhost:8000/role/${deleteRole}`);




