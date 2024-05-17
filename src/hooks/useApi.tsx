import { useState, useEffect } from "react";
import axios from "axios";
// import { useSession } from "next-auth/react";

interface FetchDataOptions {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  data?: any;
  params?: any;
}

interface UseApiResponse {
  loading: boolean;
  fetchData: (options: FetchDataOptions) => Promise<any>;
}

export function useApi(): UseApiResponse {
  const [loading, setLoading] = useState<boolean>(false);

  const axiosInstance = axios.create({
    httpAgent: false,
    baseURL: "https://nestjs-backend-livid.vercel.app/",
    // baseURL: "http://localhost:3000/",
  });

  useEffect(() => {
    const source = axios.CancelToken.source();

    // axiosInstance.interceptors.request.use(
    //   (config) => {
    //     if (token) {
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   },
    // );

    return () => {
      source.cancel("Componente desmontado: Requisição cancelada.");
    };
  }, []);
  // }, [token]);

  const fetchData = async ({ url, method, data }: FetchDataOptions) => {
    setLoading(true);
    try {
      const result = await axiosInstance({
        url,
        method,
        data: method.toLowerCase() === "get" ? undefined : data,
        params: method.toLowerCase() === "get" ? data : undefined,
        cancelToken: axios.CancelToken.source().token,
      });
      return result;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchData };
}
