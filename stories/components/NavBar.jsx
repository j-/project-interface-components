import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavBar, FlexContainer, FlexItem } from '../../src';

storiesOf('NavBar', module)
	.add('basic', () => (
		<NavBar>
			<FlexItem flexGrow={1}>
				Hello
			</FlexItem>
			<FlexItem flexGrow={1}>
				World
			</FlexItem>
		</NavBar>
	));
