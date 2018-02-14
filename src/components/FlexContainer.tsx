import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import * as React from 'react';
import theme from '../theme';

export interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
}

export const FlexContainer = theme<FlexContainerProps, 'div'>('div')`
	display: flex;
	flex-direction: ${props => props.flexDirection || 'row'}
	flex-wrap: ${props => props.flexWrap || 'nowrap'}
	justify-content: ${props => props.justifyContent || 'flex-start'}
	align-items: ${props => props.alignItems || 'stretch'}
`;

FlexContainer.displayName = 'FlexContainer';
