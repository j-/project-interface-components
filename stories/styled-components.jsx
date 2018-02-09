/* https://www.npmjs.com/package/storybook-styled-components */

import React from 'react';
import addonAPI from '@storybook/addons';
import { ThemeProvider } from 'styled-components';

class PanelContainer extends React.Component {
	constructor (props) {
		super();

		this.state = {
			theme: null,
			themes: {},
			initialised: false,
		};

		props.channel.on('storybook-styled-components/init', this.onInit);
	}

	onInit = (themes) => {
		const queryTheme = this.props.api.getQueryParam('currentTheme');

		const theme = queryTheme
			? queryTheme
			: this.state.theme ? this.state.theme : Object.keys(themes)[0];

		this.setTheme(themes, theme);
	}

	updateTheme = (e) => {
		const newTheme = e.target.value;
		this.setTheme(this.state.themes, newTheme);
	}

	setTheme (themes, theme) {
		this.setState({
			themes,
			theme,
		});
		this.props.channel.emit('storybook-styled-components/update', theme);
		this.props.api.setQueryParams({
			currentTheme: theme,
		});
	}

	render () {
		const { theme, themes } = this.state;

		if (!theme) {
			return <div>Addon is initialising</div>;
		}

		return (
			<div style={{ padding: '1em' }}>
				<select value={theme} onChange={this.updateTheme}>
					{Object.keys(themes).map((theme) => (
						<option key={theme} value={theme}>
							{theme}
						</option>
					))}
				</select>
			</div>
		);
	}
}

export const register = () => {
	addonAPI.register('storybook-styled-components', (storybookAPI) => {
		addonAPI.addPanel('storybook-styled-components/panel', {
			title: 'Theme Picker',
			render: () => (
				<PanelContainer
					channel={addonAPI.getChannel()}
					api={storybookAPI}
				/>
			),
		});
	});
};

export const decorator = (themes) => {
	const channel = addonAPI.getChannel();

	class StyledComponentsThemePicker extends React.Component {
		constructor () {
			super();

			this.state = {
				theme: null,
			};

			channel.emit('storybook-styled-components/init', themes);
		}

		componentDidMount () {
			channel.addListener('storybook-styled-components/update', this.onThemeUpdate);
		}

		componentWillUnmount () {
			channel.removeListener('storybook-styled-components/update', this.onThemeUpdate);
		}

		onThemeUpdate = (theme) => {
			this.setState({
				theme,
			});
		}

		render () {
			if (!this.state.theme) {
				return null;
			}
			return (
				<ThemeProvider theme={() => themes[this.state.theme]}>
					{this.props.children}
				</ThemeProvider>
			);
		}
	};

	return (storyFn) => (
		<StyledComponentsThemePicker>
			{storyFn()}
		</StyledComponentsThemePicker>
	);
};
