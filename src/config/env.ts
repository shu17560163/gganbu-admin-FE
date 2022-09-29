// var need to start with VITE
export default {
  instance: {
    baseURL: import.meta.env["VITE_SERVER_BASE_URL"],
    loginBaseURL: import.meta.env["VITE_LOGIN_BASE_URL"],
    userProfileBaseURL: import.meta.env["VITE_USER_PROFILE_BASE_URL"],
  },
}
