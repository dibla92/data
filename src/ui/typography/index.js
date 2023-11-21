import PropTypes from 'prop-types'
import React, { Component } from 'react'

import theme from '../../ui/theme'

const TypefaceConfigurationInterface = PropTypes.shape({
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  textAlign: PropTypes.string,
  minHeight: PropTypes.string,
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  fontWeight: PropTypes.oneOf(['normal', 300, 400, 500, 600, 700, 900]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  maxWidth: PropTypes.string,
  wordBreak: PropTypes.string,
  //width: PropTypes.string,
})

export const TypefaceInterface = {
  children: PropTypes.node,
  configuration: TypefaceConfigurationInterface,
  htmlAttribute: PropTypes.oneOf(['div', 'span']),
}

const defaultConfig = {
  color: 'unset',
  fontFamily: theme.fontset.family,
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 1,
  letterSpacing: 'unset',
  fontSize: 12,
  textAlign: 'unset',
  textTransform: 'unset',
  wordBreak: 'unset',
  //width: 'auto',
}

export class Typeface extends Component {
  static propTypes = {
    children: TypefaceInterface.children,
    configuration: TypefaceInterface.configuration,
    htmlAttribute: TypefaceInterface.htmlAttribute,
  }

  static defaultProps = {
    htmlAttribute: 'div',
  }

  render() {
    const { configuration, children, htmlAttribute, ellipsis } = this.props

    const config = { ...defaultConfig, ...configuration }

    if (htmlAttribute === 'div') {
      return (
        <div className={ellipsis ? 'typeface__div__ellipsis' : 'typeface__div'} style={config}>
          {children}
        </div>
      )
    }

    return (
      <span className={ellipsis ? 'typeface__span__ellipsis' : 'typeface__span'} style={config}>
        {children}
      </span>
    )
  }
}
