import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import * as React from 'react';
import theme from '../theme';

export const Container = theme.div`
	width: 72em;
	margin: 0 auto;
`;
