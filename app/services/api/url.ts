import { DEFAULT_API_CONFIG } from "./api-config"
export const ROOT = DEFAULT_API_CONFIG.url_prod
const URL_LOGIN = {
  // GET_OTP: "pin/getOtp",
  // VERIFY_OTP: "pin/verifyOtp",
  // LOGIN_SOCIAL: "session/createSessionWithOAuth2",
}

const URL = {
  ...URL_LOGIN,
  // LOGIN: `account/login`,
  // CREATE_SESSION: "session/createSession",
  // REFRESH_SESSION: "session/refreshSession",
  // CREATE_SESSION_STRINGEE: "stringee/createClientSession",
}
export default URL
