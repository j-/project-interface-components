import { configure } from '@storybook/react';
import '../src/index.css';
import './styles.css';

configure(() => {
	// Require all stories dynamically
	// See https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
	const req = require.context('./components', true, /\.jsx$/);
	req.keys().forEach(req);
}, module);
