import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../../src';

storiesOf('Input', module)
	.add('default', () => (
		<Input type="text" placeholder="Default input" />
	))
	.add('primary', () => (
		<Input type="text" intent="primary" placeholder="Primary input" />
	))
	.add('disabled', () => (
		<Input type="text" disabled={true} placeholder="Disabled input" />
	));
