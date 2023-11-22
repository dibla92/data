import React from 'react'
import { ContainerMenu, FooterContainer, HeaderContainer, ItemMenu, ItemMenuSmall, Logo, MySiteContainer } from './styles'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from '../../routes'
import { connect } from 'react-redux'
import Home from '../Home'
import Text from '../../ui/typography/text'


function MySite() {

  const RedirectDefault = () => <Redirect to={routes.emptyPage.path} />


  return (
    <>
      <HeaderContainer>
        <Logo>
          <Text type="h1">
            Studio Data
          </Text>
        </Logo>
        <ContainerMenu>
          <ItemMenu>
            <Text type="h1">
              Home
            </Text>
          </ItemMenu>
          <ItemMenu>
            <Text type="h1">
              Servizi
            </Text>
          </ItemMenu>
          <ItemMenu>
            <Text type="h1">
              Contatti
            </Text>
          </ItemMenu>
        </ContainerMenu>
      </HeaderContainer>
      <MySiteContainer>
        <Switch>
          <Route
            path={`${routes.mySite.path}`}
            render={() => <Home />}
          />
          {/* <Route path={routes.emptyPage.path} exact render={() => <EmptyPage />} /> */}
          {RedirectDefault()}
        </Switch>
      </MySiteContainer>
      <FooterContainer>
        <Text type="body">
          xxx Srl
        </Text>
        <ContainerMenu>
          <ItemMenuSmall>
            <Text type="body">
              Home
            </Text>
          </ItemMenuSmall>
          |
          <ItemMenuSmall>
            <Text type="body">
              Servizi
            </Text>
          </ItemMenuSmall>
          |
          <ItemMenuSmall>
            <Text type="body">
              Contatti
            </Text>
          </ItemMenuSmall>
        </ContainerMenu>
      </FooterContainer>
    </>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, (dispatch) => ({}))(MySite)
