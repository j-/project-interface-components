import * as React from 'react';
import theme from '../theme';
import { FlexContainer } from './FlexContainer';
import * as color from 'tinycolor2';

const darken = (input: string, amount: number) => color(input).darken(amount).toString();

export const NavBar = theme(FlexContainer)`
	width: 100%;
	min-height: 3em;
	line-height: 1em;
	padding: 1em;
	box-sizing: border-box;
	color: #fff;
	background-color: ${props => darken(props.theme.primaryColor, 5)};
`;
