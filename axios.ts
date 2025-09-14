// assets/axios.ts
import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: { Accept: 'application/json' },
})

let onUnauthorized: (() => Promise<void> | void) | null = null
export function registerUnauthorizedHandler(fn: typeof onUnauthorized) {
    onUnauthorized = fn
}

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            try { await onUnauthorized?.() } catch (e) { console.error('Auto-logout failed:', e) }
        }
        return Promise.reject(error)
    }
)

export default api
