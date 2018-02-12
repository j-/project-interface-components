import { StyledComponentClass, Styles, InterpolationFunction, ThemeProps } from 'styled-components';
import { Theme } from './interface';
// Above imports resolve TS4023

import { css } from './';
import * as color from 'tinycolor2';

const BORDER_RADIUS = '0.25rem';

const darken = (value: string, amount: number) => color(value).darken(amount).toString();

export const roundTopLeft = () => css`
	border-top-left-radius: ${BORDER_RADIUS};
`;

export const roundTopRight = () => css`
	border-top-right-radius: ${BORDER_RADIUS};
`;

export const roundBottomLeft = () => css`
	border-bottom-left-radius: ${BORDER_RADIUS};
`;

export const roundBottomRight = () => css`
	border-bottom-right-radius: ${BORDER_RADIUS};
`;

export const roundLeft = () => css`
	${roundTopLeft}
	${roundBottomLeft}
`;

export const roundRight = () => css`
	${roundTopRight}
	${roundBottomRight}
`;

export const roundTop = () => css`
	${roundTopLeft}
	${roundTopRight}
`;

export const roundBottom = () => css`
	${roundBottomLeft}
	${roundBottomRight}
`;

export const round = () => css`
	${roundTopLeft}
	${roundTopRight}
	${roundBottomLeft}
	${roundBottomRight}
`;

export const focusShadowDefault = () => css`
	outline: none;
	box-shadow:
		0 0 0 1px #888,
		0 0 5px #aaa;
`;

export const focusShadowPrimary = () => css`
	outline: none;
	box-shadow:
		0 0 0 1px ${props => darken(props.theme.primaryColor, 20)},
		0 0 5px ${props => props.theme.primaryColor};
`;
