import axios, { AxiosInstance, AxiosError } from 'axios'
import { ApiResponse } from '@/types/api'

let apiInstance: AxiosInstance

const getApiInstance = (): AxiosInstance => {
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
      timeout: 10000,
    })
    
    // Add auth token to requests
    apiInstance.interceptors.request.use((config) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('authToken')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    })
  }
  
  return apiInstance
}

export const api = {
  get: async <T>(url: string) => {
    try {
      const { data } = await getApiInstance().get<ApiResponse<T>>(url)
      return data.data
    } catch (error) {
      throw handleError(error as AxiosError)
    }
  },
  
  post: async <T>(url: string, payload: any) => {
    try {
      const { data } = await getApiInstance().post<ApiResponse<T>>(url, payload)
      return data.data
    } catch (error) {
      throw handleError(error as AxiosError)
    }
  },
  
  put: async <T>(url: string, payload: any) => {
    try {
      const { data } = await getApiInstance().put<ApiResponse<T>>(url, payload)
      return data.data
    } catch (error) {
      throw handleError(error as AxiosError)
    }
  },
  
  delete: async <T>(url: string) => {
    try {
      const { data } = await getApiInstance().delete<ApiResponse<T>>(url)
      return data.data
    } catch (error) {
      throw handleError(error as AxiosError)
    }
  },
}

function handleError(error: AxiosError) {
  const response = error.response?.data as any
  return new Error(response?.error?.message || 'Terjadi kesalahan')
}

export default api
