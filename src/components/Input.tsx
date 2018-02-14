import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import * as React from 'react';
import theme, { ThemeProps, css } from '../theme';
import { Intent } from '../types';
import * as color from 'tinycolor2';
import * as mixins from '../theme/mixins';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, ThemeProps {
	intent?: Intent;
}

export const Input = theme.input`
	${mixins.round}
	color: #222;
	background-color: #fff;
	border-style: solid;
	border-color: #ddd;
	border-width: 1px;
	line-height: 1em;
	padding: 0.5em 1em;
	font-size: inherit;

	&:focus {
		${mixins.focusShadowDefault}
	}

	${(props: InputProps) => props.intent === 'primary' && css`
		border-color: ${props => props.theme.primaryColor};

		&:focus {
			${mixins.focusShadowPrimary}
		}
	`}

	${(props: InputProps) => props.disabled && css`
		color: #888;
		background-color: #eee;
		border-color: #ddd;
		pointer-events: none;
	`}
`;

Input.displayName = 'Input';
