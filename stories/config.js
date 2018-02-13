import { configure, addDecorator } from '@storybook/react';
import { decorator as storybookStyledComponents } from './styled-components';

import './styles.css';

addDecorator(
	storybookStyledComponents({
		'Blue': { primaryColor: '#09c' },
		'Green': { primaryColor: '#9c3' },
		'Red': { primaryColor: 'hsl(0, 80%, 60%)' },
	}),
);

configure(() => {
	// Require all stories dynamically
	// See https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
	const req = require.context('./components', true, /\.jsx$/);
	req.keys().forEach(req);
}, module);
