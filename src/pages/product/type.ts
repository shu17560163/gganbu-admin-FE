export interface IProduct {
  _id: string
  name: string
  category: string
  status: "active" | "inactive"
  /** thumbnail image */
  cover: string
  /** detail images */
  images?: [string]
  remark: string
}

export interface IFilter {
  name?: string
  status?: IProduct["status"]
}
