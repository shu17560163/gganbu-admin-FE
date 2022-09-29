import instance from "./axios";

export const getRoles = (data?: object) => {
  return instance.get("/roles/getRoles", { params: data });
};
export const createRole = (data: object) => {
  return instance.post("/roles/createRole", data);
};
export const updateRole = (id: string, data?: object) => {
  return instance.post("/roles/updateRole", { roleId: id, ...data });
};
export const deleteRole = (id: string) => {
  return instance.post("/roles/deleteRole", { roleId: id });
};
