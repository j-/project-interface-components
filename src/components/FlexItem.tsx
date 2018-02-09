import * as React from 'react';
import theme, { ThemeProps } from '../theme';

export interface FlexItemProps extends ThemeProps {
	order?: number;
	flexGrow?: number;
	flexShrink?: number;
	flexBasis?: number | 'auto';
	alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const FlexItem = theme.div`
	order: ${(props: FlexItemProps) => props.order || 0};
	flex-grow: ${(props: FlexItemProps) => props.flexGrow || 0};
	flex-shrink: ${(props: FlexItemProps) => props.flexShrink || 1};
	flex-basis: ${(props: FlexItemProps) => props.flexBasis || 'auto'};
	align-self: ${(props: FlexItemProps) => props.alignSelf || 'stretch'};
`;
