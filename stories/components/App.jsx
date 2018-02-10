import React from 'react';
import { storiesOf } from '@storybook/react';
import { App, NavBar, Container } from '../../src';

storiesOf('App', module)
	.add('blue', () => (
		<App primaryColor="#09c">
			<NavBar>
				<Container>
					Header
				</Container>
			</NavBar>
			<Container>
				Body
			</Container>
		</App>
	))
	.add('red', () => (
		<App primaryColor="#800">
			<NavBar>
				<Container>
					Header
				</Container>
			</NavBar>
			<Container>
				Body
			</Container>
		</App>
	));
