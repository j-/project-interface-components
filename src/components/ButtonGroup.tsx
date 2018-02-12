import * as React from 'react';
import theme, { ThemeProps, css } from '../theme';
import { Button } from './Button';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, ThemeProps {
	vertical?: boolean;
}

const ButtonGroupInner = theme.div`
	display: flex;
`;

const ButtonGroupOuter = theme.div`
	display: inline-block;

	${ButtonGroupInner} {
		width: 100%;
		height: 100%;
	}

	${ButtonGroupInner} ${Button}:disabled {
		z-index: 0;
	}

	${ButtonGroupInner} ${Button} {
		position: relative;
		z-index: 1;
		flex: 1;
	}

	${ButtonGroupInner} ${Button}:hover {
		z-index: 2;
	}

	${ButtonGroupInner} ${Button}:focus {
		z-index: 3;
	}

	${(props: ButtonGroupProps) => props.vertical ? css`

		/* Vertical */

		${ButtonGroupInner} {
			flex-direction: column;
		}

		${ButtonGroupInner} ${Button}:not(:last-child) {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		${ButtonGroupInner} ${Button}:not(:first-child) {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}

	` : css`

		/* Horizontal */

		${ButtonGroupInner} {
			flex-direction: row;
		}

		${ButtonGroupInner} ${Button}:not(:last-child) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			border-right-width: 1px;
		}

		${ButtonGroupInner} ${Button}:not(:first-child) {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

	`}
`;

export const ButtonGroup: React.StatelessComponent<ButtonGroupProps> = ({ children, ...props }) => (
	<ButtonGroupOuter {...props}>
		<ButtonGroupInner>
			{children}
		</ButtonGroupInner>
	</ButtonGroupOuter>
);
