export function createAsyncActionType(section = '', type = '') {
  const action = {
    _REQUEST: `@@${section.toLowerCase()}/${type.toUpperCase()}_REQUEST`,
    _SUCCESS: `@@${section.toLowerCase()}/${type.toUpperCase()}_SUCCESS`,
    _ERROR: `@@${section.toLowerCase()}/${type.toUpperCase()}_ERROR`,
  }

  return action
}

// app
export const LOADER_OPEN = '@@global/LOADER_OPEN'
export const LOADER_CLOSE = '@@global/LOADER_CLOSE'
export const APP_MENU_TOGGLE = '@@global/APP_MENU_TOGGLE'
export const APP_PAGE_HEIGHT_SET = '@@global/APP_PAGE_HEIGHT_SET'
export const APP_MAIN_SIDEBAR_TOGGLE = '@@global/APP_MAIN_SIDEBAR_TOGGLE'
export const APP_SITE_SIDEBAR_TOGGLE = '@@global/APP_SITE_SIDEBAR_TOGGLE'
export const APP_GLOBAL_OVERLAY_TOGGLE = '@@global/APP_GLOBAL_OVERLAY_TOGGLE'
export const APP_GLOBAL_OVERLAY_CLOSE = '@@global/APP_GLOBAL_OVERLAY_CLOSE'
export const APP_LOGOUT_SIDEBAR = '@@global/APP_LOGOUT_SIDEBAR'
export const APP_MENU_SIDEBAR = '@@global/APP_MENU_SIDEBAR'
export const APP_CLOSE_SIDEBARS = '@@global/APP_CLOSE_SIDEBARS'

// auth
export const AUTH_LOGIN = createAsyncActionType('auth', 'AUTH_LOGIN')
export const AUTH_LOGOUT = createAsyncActionType('auth', 'AUTH_LOGOUT')
export const AUTH_ACCESS_TOKEN_SET = '@@auth/AUTH_ACCESS_TOKEN_SET'

// user
export const USER_INFO_GET = createAsyncActionType('user', 'USER_INFO_GET')

// modal
export const MODAL_OPEN = '@@global/MODAL_OPEN'
export const MODAL_CLOSE = '@@global/MODAL_CLOSE'

// Areas by site
export const SEARCH_VARIABLE = createAsyncActionType('area_by_site', 'AREA_BY_SITE_SEARCH')
export const UPDATE_VARIABLE = createAsyncActionType(
  'area_by_site',
  'AREA_BY_SITE_UPDATE_VARIABLES',
)
export const GET_VARIABLE = createAsyncActionType('area_by_site', 'AREA_BY_SITE_GET_VARIABLES')

export const GET_AREA_DETAILS = createAsyncActionType(
  'area_by_site',
  'AREA_BY_SITE_GET_AREA_DETAILS',
)

export const CREATE_AREA = createAsyncActionType('area_by_site', 'AREA_BY_SITE_CREATE_AREA')

export const EDIT_AREA = createAsyncActionType('area_by_site', 'AREA_BY_SITE_EDIT_AREA')
// Image Upload
export const IMAGE_UPLOAD = createAsyncActionType('image_upload', 'IMAGE_UPLOAD')
// Image Upload
export const IMAGE_UPLOAD_ASSET = createAsyncActionType('image_upload', 'IMAGE_UPLOAD_ASSET')

export const SEARCH_VARIABLE_QUERY = '@@area_by_site/SEARCH_VARIABLE_QUERY'
export const ADD_VARIABLE_FAILURE = '@@area_by_site/ADD_VARIABLE_FAILURE'
