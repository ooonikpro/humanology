import React from 'react';
import styles from './Whitecard.module.scss';

interface Props {
	small?: boolean;
	children?: React.ReactNode | React.ReactNode[] ;
	className?: string;
	color?: 'white' | 'beige';
	style?: React.CSSProperties;
	onClick?: () => void;
}

export const Whitecard = React.forwardRef<HTMLDivElement, Props>(
	function WhiteCard({ small, color, children, className, style, onClick }, ref) {
		const classes = [
			styles.whitecard,
			styles[color],
			small ? styles.small : '',
			className,
		].join(' ');

		return (
			<div ref={ref} className={classes} style={style} onClick={onClick}>
				{children}
			</div>
		);
	}
);