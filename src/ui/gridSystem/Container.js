import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ContainerS = styled.div``

const Container = ({ children, className }) => (
  <ContainerS className={`container container-fluid ${className}`}>{children}</ContainerS>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}

export default Container
