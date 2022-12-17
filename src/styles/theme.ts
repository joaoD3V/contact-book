export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  colors: {
    gray: {
      900: '#121214',
      800: '#202024',
      400: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    cyan: {
      500: '#81D8F7',
      300: '#9BE1FB',
    },
  },
  spacings: {
    '2xs': '0.8rem',
    xs: '1.6rem',
    sm: '1.8rem',
    md: '2.0rem',
    lg: '2.2rem',
    xl: '2.4rem',
    '2xl': '3.2rem',
    '3xl': '4.0rem',
    '4xl': '4.8rem',
    '5xl': '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
