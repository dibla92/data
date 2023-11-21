import PropTypes from 'prop-types'
import React, { Component } from 'react'

import theme from '../theme'

import { Typeface, TypefaceInterface } from './index'

const baseConfig = {
  color: 'unset',
  fontFamily: theme.fontset.primary,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 'unset',
  fontSize: 16,
}

const types = {
  h1: {
    ...baseConfig,
    color: theme.colors.primary.black,
    fontSize: 21,
    fontWeight: 500,
  },
  h2: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 18,
    fontWeight: 500,
  },
  h3: {
    ...baseConfig,
    color: theme.colors.primary.textGrey,
    fontSize: 16,
    fontWeight: 500,
  },
  h4: {
    ...baseConfig,
    color: theme.colors.primary.textGrey,
    fontSize: 14,
    fontWeight: 500,
  },
  pageTitle: {
    ...baseConfig,
    color: theme.colors.primary.black,
    fontWeight: 700,
    fontSize: 45,
  },
  body: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  bodyBlue: {
    ...baseConfig,
    color: theme.colors.graph.blue,
    fontSize: 14,
    fontWeight: 400,
  },
  button: {
    ...baseConfig,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  buttonLowerCase: {
    ...baseConfig,
    fontSize: 12,
    fontWeight: 700,
  },
  buttonRectangular: {
    ...baseConfig,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    color: theme.colors.primary.purple,
    letterSpacing: 'normal',
  },
  labelInput: {
    ...baseConfig,
    fontSize: 12,
    lineHeight: 1,
    color: theme.colors.primary.linch,
    letterSpacing: 'normal',
  },
  buttonSlim: {
    ...baseConfig,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
  },
  bodyBold: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 14,
    fontWeight: 700,
  },
  groupAttributeNoBreak: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    size: 14,
    fontWeight: 500,
  },
  groupAttribute: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    size: 14,
    fontWeight: 500,
    wordBreak: 'break-word',
  },
  groupAttributeChecked: {
    ...baseConfig,
    color: theme.colors.primary.white,
    size: 14,
    fontWeight: 500,
    wordBreak: 'break-word',
  },
  emphasis: {
    ...baseConfig,
    color: theme.colors.primary.black,
    fontSize: 21,
    fontWeight: 500,
  },
  secondaryText: {
    ...baseConfig,
    color: theme.colors.primary.textGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  kpiHeadline: {
    // not used
    ...baseConfig,
    color: theme.colors.primary.black,
    fontSize: 36,
    fontWeight: 700,
  },
  labelBold: {
    ...baseConfig,
    color: theme.colors.primary.darkNavyBlue,
    fontSize: 32,
    fontWeight: 700,
  },
  legendLabel: {
    ...baseConfig,
    fontSize: 14,
    lineHeight: 1.82,
    color: theme.colors.custom.darkNavyBlue,
    wordBreak: 'break-word',
  },
  tooltipsNormal: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 12,
    fontWeight: 400,
  },
  tooltipsBold: {
    // not used
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 12,
    fontWeight: 700,
  },
  labels: {
    ...baseConfig,
    color: theme.colors.primary.textGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  customLabels: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  cardTitle: {
    ...baseConfig,
    color: theme.colors.custom.darkGrey,
    fontSize: 20,
    fontWeight: 700,
    wordBreak: 'break-word',
  },
  cardDetails: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    size: 14,
    wordBreak: 'break-word',
  },
  cardDetails2: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    size: 14,
  },
  attributeText: {
    ...baseConfig,
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '1px',
  },
  tabText: {
    ...baseConfig,
    fontSize: 16,
    fontWeight: 500,
  },
  footerText: {
    ...baseConfig,
    fontSize: 14,
    letterSpacing: '0.1px',
  },
  subHeaderText: {
    ...baseConfig,
    fontSize: 16,
    lineHeight: 1.34,
    letterSpacing: 'normal',
  },
  sideBarItem: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  sideBarItemTitle: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 700,
  },
  sideTitle: {
    ...baseConfig,
    fontSize: 24,
    size: 16,
    color: theme.colors.custom.darkNavyBlue,
    fontWeight: 700,
    letterHeight: 1.56,
  },
  subtitle: {
    ...baseConfig,
    fontSize: 18,
    lineHeight: 1.67,
    letterSpacing: 'normal',
    color: theme.colors.custom.darkGrey,
  },
  lfLabelHeading: {
    ...baseConfig,
    fontSize: 14,
    color: theme.colors.custom.lighterGrey,
  },
  lfLabelText: {
    ...baseConfig,
    fontSize: 15,
    color: theme.colors.custom.darkGrey,
  },
  sideListHeading: {
    ...baseConfig,
    fontSize: 14,
    color: theme.colors.custom.lighterGrey,
  },
  sideListText: {
    ...baseConfig,
    fontSize: 14,
    color: theme.colors.custom.darkGrey,
  },
  groupAttributeAsset: {
    ...baseConfig,
    fontSize: 14,
    color: theme.colors.custom.darkGrey,
    fontWeight: 500,
  },
  notificationText: {
    ...baseConfig,
    fontSize: 11,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  radioLabel: {
    ...baseConfig,
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: 'normal',
  },
  backButtonText: {
    ...baseConfig,
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.57,
    letterSpacing: 'normal',
  },
  sideBarAccordion: {
    ...baseConfig,
    fontSize: 16,
    lineHeight: '24px',
  },
  sideBarIconName: {
    ...baseConfig,
    fontSize: 16,
    fontWeight: 700,
  },
  sideBarUserName: {
    ...baseConfig,
    fontSize: 16,
    lineHeight: '18px',
    fontWeight: 500,
    color: theme.colors.primary.textDarkGrey,
  },
  sideBarUserRole: {
    ...baseConfig,
    fontSize: 14,
    lineHeight: 1,
    color: theme.colors.primary.textGrey,
  },
  sideBarUserEdit: {
    ...baseConfig,
    fontSize: 14,
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1,
    color: theme.colors.primary.purple,
  },
  appTypeTitle: {
    ...baseConfig,
    size: 21,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.colors.primary.purple,
  },
  modalTitle: {
    ...baseConfig,
    size: 18,
    fontWeight: 500,
    color: theme.colors.primary.purple,
  },
  centeredText: {
    ...baseConfig,
    size: 14,
    lineHeight: 1,
    color: theme.colors.primary.textGrey,
    textAlign: 'center',
  },
  areaDetailPlanimetryErase: {
    ...baseConfig,
    size: 12,
    fontSize: 12,
    lineHeight: 'normal',
    fontWeight: 700,
    color: theme.colors.primary.pinkishRed,
    letterSpacing: 'normal',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  date: {
    ...baseConfig,
    size: 12,
    color: theme.colors.custom.lighterGrey,
    ontStyle: 'oblique',
  },
  calendarHeader: {
    ...baseConfig,
    size: 10,
    color: theme.colors.custom.textDarkGrey,
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: 'normal',
    textTransform: 'uppercase',
  },
  customInputLabel: {
    ...baseConfig,
    size: 16,
    color: theme.colors.custom.darkNavyBlue,
    fontWeight: 700,
    letterHeight: 1.56,
  },
  customCardTitle: {
    ...baseConfig,
    size: 18,
    fontWeight: 500,
    color: theme.colors.primary.purple,
  },
  modalAlgorithmInputLabel: {
    ...baseConfig,
    size: 14,
    fontWeight: 500,
    color: theme.colors.primary.middleGrey,
  },
  algorithm_detail_label: {
    ...baseConfig,
    size: 14,
    lineHeight: 1.82,
    color: theme.colors.custom.darkNavyBlue,
    wordBreak: 'break-word',
  },
  algorithm_detail_value: {
    ...baseConfig,
    size: 14,
    fontWeight: 700,
    lineHeight: 1.57,
    color: theme.colors.custom.darkNavyBlue,
    wordBreak: 'break-word',
  },
  variableDetailLastRead: {
    ...baseConfig,
    color: theme.colors.primary.textDarkGrey,
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'right',
  },
  variableDetailLastValue: {
    ...baseConfig,
    color: theme.colors.primary.purple,
    fontSize: 42,
    fontWeight: 700,
    textAlign: 'right',
  },
  lastUpdatedLabel: {
    ...baseConfig,
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    color: theme.colors.custom.grey2,
  },
  instanceControlLabel: {
    ...baseConfig,
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    color: theme.colors.primary.pinkishRed,
  },
  notes: {
    fontWeight: 'normal',
    fontSize: 14,
    fontStyle: 'italic',
    color: theme.colors.primary.textGrey,
  },
  userName: {},
}

export default class Text extends Component {
  static propTypes = {
    htmlAttribute: TypefaceInterface.htmlAttribute,
    children: TypefaceInterface.children,
    type: PropTypes.oneOf(Object.keys(types)),
    configuration: TypefaceInterface.configuration,
    ellipsis: PropTypes.bool,
  }

  static defaultProps = {
    type: 'labels',
  }

  render() {
    const { type, configuration, children, htmlAttribute, ellipsis } = this.props

    return (
      <Typeface
        htmlAttribute={htmlAttribute}
        configuration={{ ...types[type], ...configuration }}
        ellipsis={ellipsis}
      >
        {children}
      </Typeface>
    )
  }
}
