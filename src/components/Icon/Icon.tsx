import React from 'react'

import styles from './Icon.module.scss';
import * as Icons from './icons';

export interface Props {
	name: keyof typeof Icons;
	color?: 'white' | 'black' | 'accent' | 'quadra' | 'role';
	size: number | { width: number; height: number }
	className?: string;
}

export const Icon: React.FC<Props> = ({ name, color, size, className}) => {
	const Component = Icons[name];
	const width = typeof size === 'object' ? size.width : size;
	const height = typeof size === 'object' ? size.height : size;
	const iconSize = {
		width: `${width / 10}rem`,
		height: `${height / 10}rem`,
	};
	const classes = [
		styles.root,
		styles[color || 'black'],
		className
	].join(' ');

	return <Component {...iconSize} className={classes} />;	
}