import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    error: string;
    success: string;
    background: string;
    onBackground: string;
    textColor: string;
    lightGrey: string;
    fontDefault: string;
  }
}
