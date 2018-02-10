import * as React from 'react';
import { ThemeProvider } from '../theme';

export interface AppProps {
	primaryColor: string;
}

const App: React.StatelessComponent<AppProps> = ({ primaryColor, children }) => (
	<ThemeProvider theme={{ primaryColor }}>
		<div>{children}</div>
	</ThemeProvider>
);

export { App };
