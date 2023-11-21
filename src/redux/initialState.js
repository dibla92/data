import querystring from 'querystring'
import { STORAGE_KEYS } from '../utils/storage'

//import no from 'not-defined'

// import environment from '../environment.js'

const at_key = localStorage.getItem(STORAGE_KEYS.LOGIN.ACCESS_TOKEN)

let accessToken = null

const {
  //language: queryStringLanguage,
  token: queryStringToken,
} = querystring.parse(window.location.search.substring(1))

//const language = queryStringLanguage || 'it'

accessToken = queryStringToken || at_key?.accessToken

export default {
}
