import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '../../src';
import { ThemeProvider } from '../../src/theme';

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
	))
	.add('rainbow', () => (
		<ButtonGroup>
			<ThemeProvider theme={{ primaryColor: 'hsl(0, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(30, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(60, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(90, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(120, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(150, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(180, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(210, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(240, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(270, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(300, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
			<ThemeProvider theme={{ primaryColor: 'hsl(330, 80%, 60%)' }}>
				<Button type="button" intent="primary">Button</Button>
			</ThemeProvider>
		</ButtonGroup>
	));
