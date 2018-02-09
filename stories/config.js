import { configure, addDecorator } from '@storybook/react';
import { decorator as storybookStyledComponents } from './styled-components';

import '../src/index.css';
import './styles.css';

addDecorator(
	storybookStyledComponents({
		'Blue': { primaryColor: '#09c' },
		'Red': { primaryColor: '#800' },
	}),
);

configure(() => {
	// Require all stories dynamically
	// See https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
	const req = require.context('./components', true, /\.jsx$/);
	req.keys().forEach(req);
}, module);
