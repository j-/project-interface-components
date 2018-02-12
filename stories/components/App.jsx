import React from 'react';
import { storiesOf } from '@storybook/react';
import { App, NavBar, Container } from '../../src';

storiesOf('App', module)
	.add('blue', () => (
		<App primaryColor="#09c">
			<NavBar>
				<Container>
					Logo, buttons and links
				</Container>
			</NavBar>
			<Container>
				<h1>Application demo</h1>
				<p>Some content would go here</p>
			</Container>
		</App>
	));
