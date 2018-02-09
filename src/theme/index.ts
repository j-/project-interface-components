import * as sc from 'styled-components';

import { Theme } from './interface';
export { Theme };

export default sc.default as sc.ThemedStyledInterface<Theme>;
export const css = sc.css as sc.ThemedCssFunction<Theme>;
export const injectGlobal = sc.injectGlobal;
export const keyframes = sc.keyframes;
export const withTheme = sc.withTheme;
export const ThemeProvider = sc.ThemeProvider as sc.ThemeProviderComponent<Theme>;
export type ThemeProps = sc.ThemeProps<Theme>;
