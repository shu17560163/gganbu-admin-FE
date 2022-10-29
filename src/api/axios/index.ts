import axios from "axios"
import config from "../../config/env"
import { message } from "antd"
import { refreshToken } from "../staff"

const instance = axios.create({
  baseURL: config.instance.baseURL,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

let isRefreshing = false

const requests = []

instance.interceptors.response.use(
  (response) => {
    const { method } = response.config
    if (["post", "put", "delete", "patch"].includes(method)) {
      message.destroy()
      message.success("Success!")
    }
    return response.data
  },
  async (error) => {
    const status = error.response.status
    const originalRequest = error.config
    console.log(error, "看看返回错误", status)
    if (status === 401) {
      /**
       * refresh token
       * re-send the initial request
       */
      if (!isRefreshing) {
        isRefreshing = true
        return refreshToken()
          .then(async (res: any) => {
            localStorage.setItem("accessToken", res.accessToken)
            localStorage.setItem("refreshToken", res.refreshToken)
            return instance(originalRequest) // re-send initial request
          })
          .catch((error) => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            window.location.reload()
            return Promise.reject(error)
          })
          .finally(() => {
            isRefreshing = false
          })
      }
    }

    const info: { code?: number; message?: string } = {}
    if (!error.response) {
      info.code = 500
      info.message = "Network Error"
    } else {
      info.code = error.response.data?.code || 500
      info.message = error.response.data?.message || "Internal Server Error"
    }
    message.destroy()
    message.error(info.message)
    return Promise.reject(info)
  }
)
export default instance
