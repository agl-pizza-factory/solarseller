export interface User {
  id?: string
  name?: string
  firstName?: string
  lastName?: string
  email?: string
  mobile?: string
  nmi?: string
  address1?: string
  address2?: string
  state?: boolean
  postCode?: string
  picture?: string
  authInfo?: AuthInfo
}

export interface AuthInfo {
  accessToken?: string
  expiresAt?: number
  idToken?: string
  refreshToken?: string
  tokenType?: string
  role?: string
}