import axios from "../AxiosInstance";
import AuthTokenGen from "Utils/AuthTokenGen"



const CreateUserAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/user",
            method: "POST",
            data,
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

const UpdateUserAPI = async (id, data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `/user/update/?id=${id}`,
            method: "PATCH",
            data,
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

const GetUserAPI = async (type) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: type ? `/user/all/?type=${type}` : `/user/all`,
            method: "GET",
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

const GetSpecifucUserAPI = async (type, id) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: type ? `/user/${id}/?type=${type}` : `/user/${id}`,
            method: "GET",
            headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}


export { CreateUserAPI, GetUserAPI, GetSpecifucUserAPI, UpdateUserAPI }