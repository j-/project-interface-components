import * as React from 'react';
import theme, { ThemeProps, css } from '../theme';
import { Intent } from '../types';
import * as color from 'tinycolor2';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ThemeProps {
	intent?: Intent;
}

const darken = (input: string, amount: number) => color(input).darken(amount).toString();
const lighten = (input: string, amount: number) => color(input).lighten(amount).toString();

export const Button = theme.button`
	cursor: pointer;
	color: #444;
	background-color: #eee;
	border-style: solid;
	border-color: #ddd;
	border-width: 0 0 2px;
	line-height: 1em;
	padding: 0.5em 1em;
	font-size: inherit;
	border-radius: 0.25rem;

	&:hover {
		background-color: ${props => lighten('#eee', 2.5)};
		border-color: ${props => lighten('#ddd', 5)};
	}

	${(props: ButtonProps) => props.intent === 'primary' && css`
		color: #fff;
		background-color: ${props => props.theme.primaryColor};
		border-color: ${props => darken(props.theme.primaryColor, 10)};

		&:hover {
			background-color: ${props => lighten(props.theme.primaryColor, 5)};
			border-color: ${props => darken(props.theme.primaryColor, 5)};
		}
	`}

	${(props: ButtonProps) => props.disabled && css`
		cursor: default;
		color: #888;
		background-color: #ddd;
		border-color: #ddd;
		pointer-events: none;
	`}
`;
