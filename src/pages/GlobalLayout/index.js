import { Footer } from '../Footer'

import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'

import ReactResizeDetector from 'react-resize-detector'
import { ToastContainer } from 'react-toastify'
import { GlobalOverlay } from '../../atoms'
import environment from '../../environment.js'
import translationKeys from '../../i18next/translationKeys'
import {
  APP_GLOBAL_OVERLAY_CLOSE,
  APP_LOGOUT_SIDEBAR,
  APP_MENU_SIDEBAR,
  APP_CLOSE_SIDEBARS,
  APP_SITE_SIDEBAR_TOGGLE,
} from '../../redux/actions'
import { setIsMobile } from '../../redux/reducers/app'
import { checkToken, simulateLogin } from '../../redux/reducers/user.js'
import WarningModal from '../Modals/WarningModal'
import { Loader, MainSidebar, NavBar, SideBarLogout } from '../index'

import { PageContainer, PageContent } from './styles'
import SidebarMenuDx from '../SidebarMenuDx'

const { credentials } = environment

function GlobalLayout({
  accessToken,
  checkToken,
  children,
  isSpinning,
  isOpen,
  simulateLogin,
  tokenIsOk,
  closeGlobalOverlay,
  setIsMobile,
  closeSidebarUser,
  closeSidebarMenu,
  maintenancePage,
  closeSidebars,
}) {
  const { t } = useTranslation()

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= 1024
    setIsMobile(isMobile)
  }, [setIsMobile])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    if (isOpen) {
      handleResize()
    }
  }, [handleResize, isOpen])

  // useEffect(() => {
  //   if (accessToken === null) {
  //     simulateLogin()
  //   }
  // }, [accessToken, simulateLogin])

  useEffect(() => {
    if (tokenIsOk) return
    if (accessToken !== null) {
      checkToken(accessToken)
    }
  }, [accessToken, checkToken, tokenIsOk])

  if (accessToken === null) {
    return <Loader isSpinning />
  }

  return (
    <>
      <NavBar />
      <Loader isSpinning={isSpinning} />
      <ReactResizeDetector handleHeight>
        {({ height }) => (
          <PageContainer>
            <GlobalOverlay
              onClick={() => {
                // clearSiteId() REMOVED DUE TO BUG: clicking on the overlay was deleting all the assets/variables inside the page
                closeSidebars()
                closeGlobalOverlay()
              }}
            />
            {!maintenancePage && <MainSidebar heightListener={height} />}
            <SideBarLogout />
            <SidebarMenuDx />
            <PageContent isOpen={isOpen} maintenancePage={maintenancePage}>
              {children}
            </PageContent>
          </PageContainer>
        )}
      </ReactResizeDetector>
      <WarningModal
        title={t(translationKeys.component.modals.warningModal.featureNotAvailable)}
        text={t(translationKeys.component.modals.warningModal.featureNotAvailableInBeta)}
        width={910}
      />
      <Footer
        title={t(translationKeys.component.footer.title)}
        helpLabel={t(translationKeys.component.footer.helpLabel)}
        mail={t(translationKeys.component.footer.mail)}
        callLabel={t(translationKeys.component.footer.callLabel)}
        phone={t(translationKeys.component.footer.phone)}
      />
      <ToastContainer />
    </>
  )
}

// footer:{
//   title: 'component.footer.title',
//   helpLabel :'component.footer.helpLabel',
//   mail: 'component.footer.mail',
//   callLabel: 'component.footer.callLabel',
//   phone: 'component.footer.phone'
//   },

const mapStateToProps = ({
  app: {
    loader: { isSpinning },
    mainSidebarOpen: isOpen,
  },
  user: { tokenIsOk },
  login: { accessToken },
}) => ({
  accessToken,
  isSpinning,
  isOpen,
  tokenIsOk,
})

const mapDispatchToProps = (dispatch) => ({
  checkToken: (token) => dispatch(checkToken(token)),
  simulateLogin: () => dispatch(simulateLogin(credentials)),
  closeGlobalOverlay: () => dispatch({ type: APP_GLOBAL_OVERLAY_CLOSE }),
  toggleSidebar: () => dispatch({ type: APP_SITE_SIDEBAR_TOGGLE }),
  setIsMobile: (isMobile) => dispatch(setIsMobile(isMobile)),
  closeSidebarUser: () => dispatch({ type: APP_LOGOUT_SIDEBAR }),
  closeSidebarMenu: () => dispatch({ type: APP_MENU_SIDEBAR }),
  closeSidebars: () => dispatch({ type: APP_CLOSE_SIDEBARS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalLayout)
