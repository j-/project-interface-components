import { AnchorHTMLAttributes, ButtonHTMLAttributes, ClassAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import { Button } from './Button';

export const LinkButton = Button.withComponent('a');

LinkButton.displayName = 'LinkButton';
