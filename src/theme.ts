import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
export default theme;

// import { ThemeConfig, extendTheme } from '@chakra-ui/react';

// const config: ThemeConfig = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// };

// const theme = extendTheme({ config });

// export default theme;
