import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

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

interface ExtendedSession {
  accessToken?: string;
}

export function useApi(): UseApiResponse {
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  console.log(session);

  const axiosInstance = axios.create({
    baseURL: process.env.NEXTAUTH_URL,
  });

  const fetchData = async ({ url, method, data, params }: FetchDataOptions) => {
    setLoading(true);
    try {
      const token = (session as ExtendedSession)?.accessToken;
      console.log("Using token: ", token);

      const result = await axiosInstance({
        url,
        method,
        data: method.toLowerCase() === "get" ? undefined : data,
        params: method.toLowerCase() === "get" ? data : params,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      return result.data;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchData };
}
