// const ENV_BASE_PATH = {
//   DEV: null,
//   PRE_PROD: null,
//   PROD: null,

//   DEFAULT: '/',
// }
// const APP_DEPLOY_ENV = process.env.REACT_APP_DEPLOY_ENV
//   ? process.env.REACT_APP_DEPLOY_ENV.trim()
//   : process.env.REACT_APP_DEPLOY_ENV
const basePath = '/'

const baseRoutes = {
  home: {
    path: '/',
    title: 'Home',
  },
  mySite: {
    path: `${basePath}my-site`,
    title: 'My Site',
  },
  notFound: {
    path: `${basePath}404`,
    title: 'Not Found',
  },
}

const mySiteSection = {
  emptyPage: {
    path: `${baseRoutes.mySite.path}`,
    title: 'Index',
  },
}

const routes = {
  ...baseRoutes,
  ...mySiteSection,
}

export default routes
