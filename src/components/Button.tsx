import * as React from 'react';
import theme, { ThemeProps, css } from '../theme';
import { Intent } from '../types';
import * as color from 'tinycolor2';
import * as mixins from '../theme/mixins';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ThemeProps {
	intent?: Intent;
}

const darken = (input: string, amount: number) => color(input).darken(amount).toString();
const lighten = (input: string, amount: number) => color(input).lighten(amount).toString();

export const Button = theme.button`
	${mixins.round}
	display: inline-block;
	cursor: pointer;
	color: #444;
	background-color: #eee;
	border-style: solid;
	border-color: #ddd;
	border-width: 0 0 2px;
	line-height: 1em;
	padding: 0.5em 1em;
	font-size: inherit;
	text-align: center;
	text-decoration: none;
	vertical-align: baseline;
	box-sizing: border-box;

	&:hover {
		background-color: ${props => lighten('#eee', 2.5)};
		border-bottom-color: ${props => lighten('#ddd', 5)};
	}

	&:focus {
		${mixins.focusShadowDefault}
	}

	${(props: ButtonProps) => props.intent === 'primary' && css`
		color: #fff;
		background-color: ${props => props.theme.primaryColor};
		border-color: ${props => darken(props.theme.primaryColor, 10)};

		&:hover {
			background-color: ${props => lighten(props.theme.primaryColor, 5)};
			border-bottom-color: ${props => darken(props.theme.primaryColor, 5)};
		}

		&:focus {
			${mixins.focusShadowPrimary}
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
