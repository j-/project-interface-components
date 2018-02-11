import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../src';

storiesOf('Button', module)
	.add('default', () => (
		<Button type="button">Default button</Button>
	))
	.add('primary', () => (
		<Button type="button" intent="primary">Primary button</Button>
	));
