import React from 'react';
import { storiesOf } from '@storybook/react';
import { Padded } from '../decorators';
import { Button } from '../../src';

storiesOf('Button', module)
	.addDecorator(Padded)
	.add('default', () => (
		<Button type="button">Default button</Button>
	))
	.add('primary', () => (
		<Button type="button" intent="primary">Primary button</Button>
	))
	.add('disabled', () => (
		<Button type="button" disabled={true}>Disabled button</Button>
	));
