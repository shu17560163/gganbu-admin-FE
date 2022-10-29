import instance from "./axios"

export const getProducts = (data?: object) => {
  return instance.get("/products/getProducts", { params: data })
}
export const createProduct = (data: object) => {
  return instance.post("/products/createProduct", data)
}
export const updateProduct = (id: string, data?: object) => {
  return instance.post("/products/updateProduct", { productId: id, ...data })
}
export const deleteProduct = (id: string) => {
  return instance.post("/products/deleteProduct", { productId: id })
}
