import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import * as React from 'react';
import theme from '../theme';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const Container = theme<ContainerProps, 'div'>('div')`
	width: 72em;
	margin: 0 auto;
`;

Container.displayName = 'Container';
