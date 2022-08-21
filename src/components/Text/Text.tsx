import React from 'react';
import styles from './Text.module.scss';

export type Props<T extends keyof JSX.IntrinsicElements> = {
    tag?: T;
    size?: 'base' | 'small' | 'smaller' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
    color?: 'black' | 'white' | 'accent' | 'grey' | 'element' | 'role';
    font?: 'base' | 'additional';
    markerColor?: 'element' | 'role';
    className?: string;
    children: React.ReactNode;
} & JSX.IntrinsicElements[T];

// eslint-disable-next-line
export const Text = React.forwardRef<HTMLElement, Props<any>>(function Text(
    {
        tag: TagName = 'span',
        size = 'base',
        color = 'black',
        font = 'base',
        markerColor,
        children,
        className,
        ...otherProps
    },
    ref
) {
    const classNames: string = [
        styles.root,
        styles['size-' + size],
        styles['color-' + color],
        styles['font-' + font],
        TagName === 'ul' && styles[`marker-color-${markerColor}`],
        className,
    ].join(' ');

    return (
        <TagName ref={ref} className={classNames} {...otherProps}>
            {children}
        </TagName>
    );
});
