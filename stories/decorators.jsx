import React from 'react';

export const Padded = (storyFn) => (
	<div style={{ padding: '1em' }}>
		{storyFn()}
	</div>
);
