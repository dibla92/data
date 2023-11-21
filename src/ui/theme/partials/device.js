export const breakpoint = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  tabletL: 950,
  laptop: 1024,
  desktop: 1220,
}

const size = {
  mobileS: `${breakpoint.mobileS}px`,
  mobileM: `${breakpoint.mobileM}px`,
  mobileL: `${breakpoint.mobileL}px`,
  tablet: `${breakpoint.tablet}px`,
  tabletL: `${breakpoint.tabletL}px`,
  laptop: `${breakpoint.laptop}px`,
  desktop: `${breakpoint.desktop}px`,
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}

export default device
