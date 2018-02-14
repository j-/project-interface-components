import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import * as React from 'react';
import theme, { ThemeProps } from '../theme';

export interface FlexItemProps extends ThemeProps {
	order?: number;
	flexGrow?: number;
	flexShrink?: number;
	flexBasis?: number | 'auto';
	alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const FlexItem = theme<FlexItemProps, 'div'>('div')`
	order: ${props => props.order || 0};
	flex-grow: ${props => props.flexGrow || 0};
	flex-shrink: ${props => props.flexShrink || 1};
	flex-basis: ${props => props.flexBasis || 'auto'};
	align-self: ${props => props.alignSelf || 'stretch'};
`;

FlexItem.displayName = 'FlexItem';
