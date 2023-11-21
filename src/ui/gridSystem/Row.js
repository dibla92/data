import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const RowS = styled.div``

const Row = ({ children, className }) => <RowS className={`row ${className}`}>{children}</RowS>

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Row.defaultProps = {
  className: '',
}

export default Row
