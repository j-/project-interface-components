import { ButtonHTMLAttributes, ClassAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
import { ButtonProps } from './Button';
// Above imports resolve TS4023

import { AnchorHTMLAttributes } from 'react';
import { Button } from './Button';

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLTextAreaElement> {

}

export const LinkButton = Button.withComponent('a');

LinkButton.displayName = 'LinkButton';
