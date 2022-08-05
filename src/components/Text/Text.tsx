import React from 'react';
import styles from './Text.module.scss';

export type Props<T extends keyof JSX.IntrinsicAttributes> = {
	tag?: T;
	size?: 'body' | 'large' | 'small' | 'caption' | 'h4' | 'h3' | 'h2' | 'h1';
	color?: 'black' | ' white' | 'accent' | 'grey' | 'quadra' | 'role' | 'quadra-dark' | 'role-dark';
	font?: 'primary' | 'secondary';
	bulletColor?: 'quadra' | 'role';
	className?: string;
	children: React.ReactNode;
} & JSX.Element[T];

export const Text = React.forwardRef<HTMLElement, Props<any>>(
	function Text(
	{
		tag: TagName = 'span',
		size = 'body',
		color = 'black',
		font = 'body',
		bulletColor,
		children,
		className,
		...otherProps
	}, ref
	) {
	const classNames: string =[
		styles.text,
		styles['size-' + size],
		styles['color-' + color],
		styles['font-' + font],
		TagName === 'ul' && styles[`bullet-color-${bulletColor}`],
		className,
	].join(' ');

	return (
		<TagName ref={ref} className={classNames} {...otherProps}>
			{children}
		</TagName>
	);
});