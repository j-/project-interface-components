import * as React from 'react';
import theme, { ThemeProvider } from '../theme';

export interface AppProps {
	primaryColor: string;
}

const AppInner = theme.div`
	font-size: 16px;
	font-family: Arial, sans-serif;

	p {
		margin-top: 1em;
		margin-bottom: 1em;
		line-height: 2em;
	}

	h1 {
		font-size: 4em;
		line-height: 1.25em;
		margin-top: 0.25em;
		margin-bottom: 0.25em;
	}

	h2 {
		font-size: 3em;
		line-height: 1.33333em;
		margin-top: 0.33333em;
		margin-bottom: 0.33333em;
	}

	h3 {
		font-size: 2.5em;
		line-height: 1.6em;
		margin-top: 0.4em;
		margin-bottom: 0.4em;
	}

	h4 {
		font-size: 2em;
		line-height: 1.5em;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}

	h5 {
		font-size: 1.5em;
		line-height: 2em;
		margin-top: 0.66666em;
		margin-bottom: 0.66666em;
	}

	h6 {
		font-size: 1em;
		line-height: 2em;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}

	button,
	input,
	textarea {
		font-size: 1em;
		font-family: inherit;
	}
`;

const App: React.StatelessComponent<AppProps> = ({ primaryColor, children }) => (
	<ThemeProvider theme={{ primaryColor }}>
		<AppInner>{children}</AppInner>
	</ThemeProvider>
);

export { App };
