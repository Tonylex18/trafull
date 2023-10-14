import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

const axiosClient = (token: string | null = null): AxiosInstance => {
    const headers = token
        ? {
              Authorization: `Bearer ${token}`,
          }
        : {};

    const client = axios.create({
        baseURL: "url",
        headers,
        timeout: 5000,
        withCredentials: true,
    });

    client.interceptors.request.use((config: any) => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        config.headers = config.headers || {};
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    client.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            try {
                const { response } = error;
                if (response?.status === 401) {
                    localStorage.removeItem("ACCESS_TOKEN");
                }
            } catch (e) {
                console.error(e);
            }
            throw error;
        }
    );

    return client;
};

export default axiosClient;
