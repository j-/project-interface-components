import { InputHTMLAttributes, ClassAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
import { InputProps } from './Input';
// Above imports resolve TS4023

import { TextareaHTMLAttributes } from 'react';
import { Input } from './Input';
import { Intent } from '../types';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	intent?: Intent;
}

export const Textarea = Input.withComponent('textarea');

Textarea.displayName = 'Textarea';
