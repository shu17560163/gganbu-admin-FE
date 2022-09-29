import instance from "./axios";

export const getStaffs = (data?: object) => {
  return instance.get("/staffs/getStaffs", { params: data });
};
export const createStaff = (data?: object) => {
  return instance.post("/staffs/createStaff", data);
};
export const updateStaff = (id: string, data?: object) => {
  return instance.post("/staffs/updateStaff", { staffId: id, ...data });
};
export const resetPassword = (staffId, password) => {
  return instance.post("/staffs/resetPassword", { staffId, password });
};

// ########  login module
export const login = (data: object) => {
  return instance.post("/staffs/login", data);
};

export const getCode = (data: object) => {
  return instance.get("/staffs/getCode", { params: data });
};

export const getStaffByToken = () => {
  return instance.get("/staffs/getStaffByToken", {});
};
