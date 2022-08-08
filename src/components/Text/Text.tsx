import React from 'react';

import styles from './Text.module.scss';
import { capitalizeFirstLetter } from '../../utils/captalizeFirstLetter';

export type Props<T extends keyof JSX.IntrinsicElements> = {
    tag?: T;
    size?: 'caption' | 'small' | 'body' | 'large' | 'h4' | 'h3' | 'h2' | 'h1';
    color?: 'black' | 'white' | 'accent' | 'quadra' | 'role';
    font?: 'primary' | 'secondary';
    markerColor?: 'quadra' | 'role';
    opacity?: 'o05' | 'o10' | 'o25' | 'o50' | 'o75' | 'o100';
    className?: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements[T];

export const Text = React.forwardRef<HTMLElement, Props<any>>(function Text(
    {
        tag: TagName = 'span',
        size = 'body',
        color = 'black',
        font = 'primary',
        opacity = 'o100',
        markerColor,
        children,
        className,
        ...otherProps
    },
    ref
) {
    const classNames: string = [
        styles.text,
        styles['size' + capitalizeFirstLetter(size)], 
        styles['color' + capitalizeFirstLetter(color)],
        styles['font' + capitalizeFirstLetter(font)],
        styles[opacity],
        TagName === 'ul' && styles[`marker-color-${markerColor}`],
        className,
    ].join(' ');

    return (
        <TagName ref={ref} className={classNames} {...otherProps}>
            {children}
        </TagName>
    );
});
