import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import { HTMLAttributes } from 'react';
import theme, { ThemeProps } from '../theme';
import { FlexContainer, FlexContainerProps } from './FlexContainer';
import * as color from 'tinycolor2';

const darken = (input: string, amount: number) => color(input).darken(amount).toString();

export interface NavBarProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {

}

export const NavBar = theme<NavBarProps, FlexContainerProps>(FlexContainer)`
	width: 100%;
	min-height: 3em;
	line-height: 1em;
	padding: 1em;
	box-sizing: border-box;
	color: #fff;
	background-color: ${props => darken(props.theme.primaryColor, 5)};
`;

NavBar.displayName = 'NavBar';
