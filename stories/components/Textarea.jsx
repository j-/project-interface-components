import React from 'react';
import { storiesOf } from '@storybook/react';
import { Padded } from '../decorators';
import { Textarea } from '../../src';

storiesOf('Textarea', module)
	.addDecorator(Padded)
	.add('default', () => (
		<Textarea type="text" placeholder="Default textarea" />
	))
	.add('primary', () => (
		<Textarea type="text" intent="primary" placeholder="Primary textarea" />
	))
	.add('disabled', () => (
		<Textarea type="text" disabled={true} placeholder="Disabled textarea" />
	));
