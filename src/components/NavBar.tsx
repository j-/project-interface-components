import * as React from 'react';
import theme from '../theme';

export const NavBar = theme.div`
	width: 100%;
	min-height: 3em;
	line-height: 1em;
	padding: 1em;
	box-sizing: border-box;
	background-color: ${props => props.theme.primaryColor};
`;
