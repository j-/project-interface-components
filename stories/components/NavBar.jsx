import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavBar, Container, FlexContainer, FlexItem } from '../../src';

storiesOf('NavBar', module)
	.add('basic', () => (
		<NavBar>
			<Container>
				<FlexContainer>
					<FlexItem flexGrow={1}>
						Hello
					</FlexItem>
					<FlexItem>
						World
					</FlexItem>
				</FlexContainer>
			</Container>
		</NavBar>
	));
