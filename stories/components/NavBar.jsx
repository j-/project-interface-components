import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavBar } from 'pic';

storiesOf('NavBar', module)
	.add('basic', () => (
		<NavBar />
	));
