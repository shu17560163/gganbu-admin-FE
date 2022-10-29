import instance from "./axios"

export const getLoginLogs = (data?: object) => {
  return instance.get("/loggers/getLoginLogs", { params: data })
}
