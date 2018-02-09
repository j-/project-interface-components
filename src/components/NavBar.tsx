import * as React from 'react';
import theme from '../theme';
import { FlexContainer } from './FlexContainer';

export const NavBar = theme(FlexContainer)`
	width: 100%;
	min-height: 3em;
	line-height: 1em;
	padding: 1em;
	box-sizing: border-box;
	color: #fff;
	background-color: ${props => props.theme.primaryColor};
`;
