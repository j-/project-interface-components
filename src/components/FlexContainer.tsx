import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import * as React from 'react';
import theme, { ThemeProps } from '../theme';

export interface FlexContainerProps extends ThemeProps {
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
}

export const FlexContainer = theme.div`
	display: flex;
	flex-direction: ${(props: FlexContainerProps) => props.flexDirection || 'row'}
	flex-wrap: ${(props: FlexContainerProps) => props.flexWrap || 'nowrap'}
	justify-content: ${(props: FlexContainerProps) => props.justifyContent || 'flex-start'}
	align-items: ${(props: FlexContainerProps) => props.alignItems || 'stretch'}
`;
