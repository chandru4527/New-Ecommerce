import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosApi = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
});

axiosApi.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        // If request failed with 401
        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                // Request new access token
                await apiUrl.post("/auth/refresh-token");

                // Retry original request
                return axiosApi(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// GET
export const get = async (url, config = {}) => {
    const { data } = await axiosApi.get(url, config);
    return data;
};

// POST
export const post = async (url, payload, config = {}) => {
    const { data } = await axiosApi.post(url, payload, config);
    return data;
};

// PUT
export const put = async (url, payload, config = {}) => {
    const { data } = await axiosApi.put(url, payload, config);
    return data;
};

// PATCH
export const patch = async (url, payload, config = {}) => {
    const { data } = await axiosApi.patch(url, payload, config);
    return data;
};

// DELETE
export const remove = async (url, config = {}) => {
    const { data } = await axiosApi.delete(url, config);
    return data;
};

// FILE UPLOAD
export const postFormData = async ( url, formData, config = {}) => {
    const { data } = await axiosApi.post( url, formData, config);
    return data;
};

export default axiosApi;