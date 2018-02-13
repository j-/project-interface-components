import React from 'react';
import { App as AppComponent } from '../src';

const paddedStyle = {
	padding: '1em',
	width: '100%',
	height: '100%',
	boxSizing: 'border-box',
};

export const Padded = (storyFn) => (
	<div style={paddedStyle}>
		{storyFn()}
	</div>
);

export const App = (storyFn) => (
	<AppComponent>
		{storyFn()}
	</AppComponent>
);
