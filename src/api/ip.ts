import instance from "./axios"

export const getIps = (data?: object) => {
  return instance.get("/ips", { params: data })
}
export const createIp = (data?: object) => {
  return instance.post("/ips", data)
}
export const updateIp = (id: string, data?: object) => {
  return instance.put("/ips/" + id, data)
}
export const deleteIp = (id: string) => {
  return instance.delete("/ips/" + id)
}
