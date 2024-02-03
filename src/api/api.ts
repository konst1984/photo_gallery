import axios from 'axios'
import { ImageGalleryProps } from '../data'

const axiosInstance = axios.create({
    baseURL: 'https://my-json-server-85wu.onrender.com/',
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
