import instance from "./axios"

export const getStaffs = (data?: object) => {
  return instance.get("/staffs", { params: data })
}
export const createStaff = (data?: object) => {
  return instance.post("/staffs", data)
}
export const updateStaff = (id: string, data?: object) => {
  return instance.put("/staffs/" + id, data)
}
export const resetPassword = (staffId, password) => {
  return instance.post("/staffs/resetPassword", { staffId, password })
}

// ########  login module
export const login = (data: object) => {
  return instance.post("/staffs/login", data)
}

export const getCode = (data: object) => {
  return instance.get("/staffs/code", { params: data })
}

export const getStaffByToken = () => {
  return instance.get("/staffs/token", {})
}
