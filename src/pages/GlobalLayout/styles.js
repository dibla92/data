import styled from 'styled-components'

import { NavBarHeight, FooterOffsetHeight, LeftMainSideBarWdith } from '../../const'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
`

export const PageContent = styled.div`
  transition: all 325ms ease-in;
  background-color: ${(props) => props.theme.colors.primary.background};
  min-height: calc(100vh - ${NavBarHeight + FooterOffsetHeight}px);
  margin-top: ${NavBarHeight}px;
  padding-bottom: 20px;
  overflow: hidden;
  position: relative;
  padding-left: ${(props) =>
    props.maintenancePage ? 0 : props.isOpen ? LeftMainSideBarWdith + 1 : 0}px;
  flex-grow: 1;
  width: calc(100% - ${(props) => (props.isOpen ? LeftMainSideBarWdith + 40 : 0)}px);
  @media ${(props) => props.theme.device.laptop} {
    margin-top: ${NavBarHeight}px;
    padding-left: 0px;
  }

  .search-bar {
    padding: 0 20px;
    height: 40px;
    border-radius: 25px;
    border: solid 1px ${(props) => props.theme.colors.primary.grey};

    .search-bar__input {
      font-family: ${(props) => props.theme.fontset.primary};
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: ${(props) => props.theme.colors.primary.textDarkGrey};
      margin-top: 2px;

      ::placeholder {
        font-style: oblique;
        font-weight: normal;
        color: ${(props) => props.theme.colors.custom.lighterGrey};
      }
      ::-webkit-input-placeholder {
        font-style: oblique;
        font-weight: normal;
        color: ${(props) => props.theme.colors.custom.lighterGrey};
      }
      :-ms-input-placeholder {
        font-style: oblique;
        font-weight: normal;
        color: ${(props) => props.theme.colors.custom.lighterGrey};
      }
    }

    .icon-search-5 {
      font-size: 12px !important;
      margin-right: 0 !important;

      &:before {
        color: ${(props) => props.theme.colors.primary.purple};
      }
    }
  }
`
