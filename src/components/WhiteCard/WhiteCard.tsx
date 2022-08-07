import React from 'react'
import styles from './WhiteCard.module.scss';

interface Props {
	small?: boolean;
	backslide?: boolean;
	children?: React.ReactNode | React.ReactNode[];
	className?: string;
	color?: 'white' | 'beige';
	style?: React.CSSProperties;
	onClick?: () => void;
}

export const WhiteCard = React.forwardRef<HTMLDivElement, Props>(
	function WhiteCard({ small, color = 'white', backslide, children, className, style, onClick }, ref) {
			const classes = [
					styles.whitecard,
					styles[color],
					small ? styles.small : '',
					backslide ? styles.backslide : '',
					className,
			].join(' ');

			return (
					<div ref={ref} className={classes} style={style} onClick={onClick}>
							{children}
					</div>
			);
	}
);