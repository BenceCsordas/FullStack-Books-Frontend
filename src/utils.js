import axios from "axios"

const baseURL = "http://localhost:8000/books/"

export const getCategories = async () => {
    const response = await axios.get(baseURL+"categories")
    return response
} 

export const getBooksByCateg = async ({queryKey}) => {
    const response = await axios.get(baseURL+"categoryId/"+queryKey[1])
    return response
}

export const getBooksByTitle = async ({queryKey}) => {
    const response = await axios.get(baseURL+"title/"+queryKey[1])
    return response
}
export const getBooks = async () => {
    const response = await axios.get(baseURL)
    return response
}