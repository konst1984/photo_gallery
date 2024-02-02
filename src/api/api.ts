import axios from 'axios'
import { ImageGalleryProps } from '../data'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const getImages = async () => {
    return (await axiosInstance.get<ImageGalleryProps[]>('images')).data
}

export const deleteImages = async (id: string | number) => {
    return await axiosInstance.delete(`images/${id}`)
}

export const addImage = async (image: ImageGalleryProps) => {
    return await axiosInstance.post('images', image)
}
