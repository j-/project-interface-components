import { css } from './';

const BORDER_RADIUS = '0.25rem';

export const roundTopLeft = () => css`
	border-top-left-radius: ${BORDER_RADIUS};
`;

export const roundTopRight = () => css`
	border-top-right-radius: ${BORDER_RADIUS};
`;

export const roundBottomLeft = () => css`
	border-bottom-left-radius: ${BORDER_RADIUS};
`;

export const roundBottomRight = () => css`
	border-bottom-right-radius: ${BORDER_RADIUS};
`;

export const roundLeft = () => css`
	${roundTopLeft}
	${roundBottomLeft}
`;

export const roundRight = () => css`
	${roundTopRight}
	${roundBottomRight}
`;

export const roundTop = () => css`
	${roundTopLeft}
	${roundTopRight}
`;

export const roundBottom = () => css`
	${roundBottomLeft}
	${roundBottomRight}
`;

export const round = () => css`
	${roundTopLeft}
	${roundTopRight}
	${roundBottomLeft}
	${roundBottomRight}
`;
