import React from 'react'

import styles from './IllustrationQuadraCircle.module.scss';
import * as quadraCircles from './quadraCircles';

export interface Props {
	name: keyof typeof quadraCircles;
	color?: 'white' | 'black' | 'accent' | 'quadra';
	size: number | { width: number; height: number }
	className?: string;
}

export const Illustration: React.FC<Props> = ({ name, color, size, className}) => {
	const Component = quadraCircles[name];
	const width = typeof size === 'object' ? size.width : size;
	const height = typeof size === 'object' ? size.height : size;
	const illustrationSize = {
		width: `${width / 10}rem`,
		height: `${height / 10}rem`,
	};
	const classes = [
		styles.illustrationCircle,
		styles[color || 'black'],
		className
	].join(' ');

	return <Component { ...illustrationSize } className={classes} />
}