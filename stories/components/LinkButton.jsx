import React from 'react';
import { storiesOf } from '@storybook/react';
import { Padded } from '../decorators';
import { LinkButton } from '../../src';

const cancel = (e) => e.preventDefault();

storiesOf('LinkButton', module)
	.addDecorator(Padded)
	.add('default', () => (
		<LinkButton onClick={cancel} href="#">Default link button</LinkButton>
	))
	.add('primary', () => (
		<LinkButton onClick={cancel} href="#" intent="primary">Primary link button</LinkButton>
	))
	.add('disabled', () => (
		<LinkButton onClick={cancel} href="#" disabled={true}>Disabled link button</LinkButton>
	));
