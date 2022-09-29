export interface IFilterStaff {
  name?: string
  status?: string
}

export interface IStaff {
  _id?: string
  name?: string
  phone?: number
  username?: string
  password?: string
  status?: "active" | "inactive"
  role?: string
}

export interface IRole {
  _id?: string
  roleId?: string
  name?: string
  desc?: string
  routeAuth?: string[]
  contentAuth?: string[]
  otherAuth?: string[]
}

export interface IFilterRole {
  name?: string
}
