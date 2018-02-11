import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '../../src';

storiesOf('ButtonGroup', module)
	.add('default', () => (
		<ButtonGroup>
			<Button type="button">Foo</Button>
			<Button type="button">Bar</Button>
			<Button type="button" disabled={true}>Qux</Button>
			<Button type="button">Baz</Button>
		</ButtonGroup>
	))
	.add('primary', () => (
		<ButtonGroup>
			<Button type="button" intent="primary">Foo</Button>
			<Button type="button" intent="primary">Bar</Button>
			<Button type="button" intent="primary" disabled={true}>Qux</Button>
			<Button type="button" intent="primary">Baz</Button>
		</ButtonGroup>
	));
