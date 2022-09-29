import instance from "./axios"

export const getRoles = (data?: object) => {
  return instance.get("/roles", { params: data })
}
export const createRole = (data?: object) => {
  return instance.post("/roles", data)
}
export const updateRole = (id: string, data?: object) => {
  return instance.put("/roles/" + id, data)
}
export const deleteRole = (id: string) => {
  return instance.delete("/roles/" + id)
}
