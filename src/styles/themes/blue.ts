export default {
  title: 'blue',
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    family_secondary:
      "'Bebas Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    primary: '#0A68F2',
    secondary: '#EC1D24',
    mainBg: '#06092B',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42'
  },
  gradients: {
    grayGradient:
      'linear-gradient(50deg, rgb(31 31 33) 0%, rgb(70 71 79) 100%)',
    blackMainDesktopGradient:
      'linear-gradient(45deg, rgba(10, 104, 242,1) 0%, rgba(10, 104, 242,1) 30%, rgba(10, 104, 242,0) 100%)',
    blackSecondaryDesktopGradient:
      'linear-gradient(90deg, rgba(10, 104, 242,1) 0%, rgba(10, 104, 242,1) 70%, rgba(10, 104, 242,0) 100%)',
    blackMobileGradient:
      'linear-gradient(8deg, rgba(10, 104, 242,1) 0%, rgba(10, 104, 242,1) 82%, rgba(10, 104, 242,0) 100%)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
}
