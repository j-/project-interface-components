import React from 'react';

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
