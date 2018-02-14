import { InputHTMLAttributes, TextareaHTMLAttributes, ClassAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import { Theme } from '../theme';
// Above imports resolve TS4023

import { Input } from './Input';

export const Textarea = Input.withComponent('textarea');

Textarea.displayName = 'Textarea';
