import axios from "axios";


const baseURL = import.meta.env.VITE_APP_ENV == "development" ? import.meta.env.VITE_APP_BASE_URL_DEVELOPMENT : import.meta.env.VITE_APP_ENV == "staggingSingle" ? import.meta.env.VITE_APP_BASE_URL_STAGGING_SINGLE : import.meta.env.VITE_APP_ENV == "staggingSub" ? import.meta.env.VITE_APP_BASE_URL_STAGGING_SUB : import.meta.env.VITE_APP_BASE_URL_LIVE;
const Instance = axios.create({
    baseURL: `${baseURL}/api`
});
window.location.CustomURL = `${baseURL}/static`

// Logout if no Token or Unauthenticated :
Instance.interceptors.response.use(undefined, function x(err) {
    // if (err?.response?.status == 401) {
    if (err?.response?.status == 401 && !window.location.pathname == "/login") {
        localStorage.clear()
        setTimeout(() => {
            window.location.href = "/"
        }, 1500)
        return Promise.reject(err)

    }
    return Promise.reject(err)
})

export default Instance;