import * as React from 'react';
import theme, { ThemeProvider } from '../theme';

export interface AppProps {
	primaryColor: string;
}

const H1_FONT_SIZE = 4;
const H1_MARGIN = (1 / H1_FONT_SIZE);
const H1_LINE_HEIGHT = (5 / H1_FONT_SIZE);

const H2_FONT_SIZE = 3;
const H2_MARGIN = (1 / H2_FONT_SIZE);
const H2_LINE_HEIGHT = (4 / H2_FONT_SIZE);

const H3_FONT_SIZE = 2.5;
const H3_MARGIN = (1 / H3_FONT_SIZE);
const H3_LINE_HEIGHT = (4 / H3_FONT_SIZE);

const H4_FONT_SIZE = 2;
const H4_MARGIN = (1 / H4_FONT_SIZE);
const H4_LINE_HEIGHT = (3 / H4_FONT_SIZE);

const H5_FONT_SIZE = 1.5;
const H5_MARGIN = (1 / H5_FONT_SIZE);
const H5_LINE_HEIGHT = (3 / H5_FONT_SIZE);

const H6_FONT_SIZE = 1;
const H6_MARGIN = (1 / H6_FONT_SIZE);
const H6_LINE_HEIGHT = (2 / H6_FONT_SIZE);

const AppInner = theme.div`
	font-size: 16px;
	font-family: Arial, sans-serif;

	p {
		margin-top: 1em;
		margin-bottom: 1em;
		line-height: 2em;
	}

	h1 {
		font-size: ${H1_FONT_SIZE}em;
		line-height: ${H1_LINE_HEIGHT}em;
		margin-top: ${H1_MARGIN}em;
		margin-bottom: ${H1_MARGIN}em;
	}

	h2 {
		font-size: ${H2_FONT_SIZE}em;
		line-height: ${H2_LINE_HEIGHT}em;
		margin-top: ${H2_MARGIN}em;
		margin-bottom: ${H2_MARGIN}em;
	}

	h3 {
		font-size: ${H3_FONT_SIZE}em;
		line-height: ${H3_LINE_HEIGHT}em;
		margin-top: ${H3_MARGIN}em;
		margin-bottom: ${H3_MARGIN}em;
	}

	h4 {
		font-size: ${H4_FONT_SIZE}em;
		line-height: ${H4_LINE_HEIGHT}em;
		margin-top: ${H4_MARGIN}em;
		margin-bottom: ${H4_MARGIN}em;
	}

	h5 {
		font-size: ${H5_FONT_SIZE}em;
		line-height: ${H5_LINE_HEIGHT}em;
		margin-top: ${H5_MARGIN}em;
		margin-bottom: ${H5_MARGIN}em;
	}

	h6 {
		font-size: ${H6_FONT_SIZE}em;
		line-height: ${H6_LINE_HEIGHT}em;
		margin-top: ${H6_MARGIN}em;
		margin-bottom: ${H6_MARGIN}em;
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
