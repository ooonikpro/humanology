import React, { Component } from 'react';

import styles from './Line.module.scss';

export interface Props {
	type?: 'solid' | 'dashed';
	color?: 'white' | 'black' | 'accent' | 'quadra' | 'role';
	opacity?: 'o05' | 'o10' | 'o25' | 'o50' | 'o75' | 'o100';
	className?: string;
}

export const Line: React.FC<Props> = ({ type, color, opacity, className }) => {
	const classes = [styles[type || 'solid'], styles[color || 'black'], styles[opacity || 'o25'], className].join(' ');

	return <hr className={classes} />;
}