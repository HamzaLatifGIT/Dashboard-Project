import axios from "../AxiosInstance";
import AuthTokenGen from "Utils/AuthTokenGen"



const CreateCategoryAPI = async (data) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/category",
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

const GetCategoriesAPI = async (type) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: type ? `/category/all/?type=${type}` : `/category`,
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


export { CreateCategoryAPI, GetCategoriesAPI }