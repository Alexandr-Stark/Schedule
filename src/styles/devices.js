/* eslint-disable import/no-anonymous-default-export */
const size = {
  mobile: '375px',
  mobileL: '480px',
  tablet: '768px',
  tabletL: '857px',
  desktop: '1024px',
  desktopL: '1440px',
};

export default {
  mobile: `(min-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};