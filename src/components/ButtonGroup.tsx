import * as React from 'react';
import theme, { ThemeProps, css } from '../theme';
import { Button } from './Button';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, ThemeProps {

}

export const ButtonGroup = theme.div`
	display: flex;

	${Button}:disabled {
		z-index: 0;
	}

	${Button} {
		position: relative;
		z-index: 1;
	}

	${Button}:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right-width: 1px;
	}

	${Button}:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	${Button}:hover {
		z-index: 2;
	}

	${Button}:focus {
		z-index: 3;
	}
`;
