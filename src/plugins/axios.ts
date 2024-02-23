import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"

const config = <AxiosRequestConfig>{
    baseURL: import.meta.env.GLOBAL_API_BASE_URL,
    timeout: 5000,
    headers: {

    },
    validateStatus(status) {
        return status >= 200 && status < 300
    },
    maxRedirects: 5,
}

const requestHandler = (config: AxiosRequestConfig) => {
    return config
}

const errorHandler = (error: AxiosError) => {
    return error
}

const successHandler = (response: AxiosResponse) => {
    return response
}

const axiosInstance: AxiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(
    requestConfig => requestHandler(requestConfig),
    error => error
)

axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error),
)

export default axiosInstance
