import React from 'react';

import styles from './Attribute.module.scss';

import { Quadras } from '../../constants/quadras'

import { Text } from '../Text';
import { Icon } from '../Icon';

export interface Props {
	attribute?: 'quadra' | 'role' | 'tarot' | 'mbti' | 'club' | 'alias';
	className?: string;
}