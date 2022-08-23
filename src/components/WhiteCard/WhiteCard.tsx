import React from 'react';
import styles from './WhiteCard.module.scss';

interface Props {
    small?: boolean;
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    color?: 'white' | 'beige' | 'beige-title';
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const WhiteCard = React.forwardRef<HTMLDivElement, Props>(
    function WhiteCard({ small, color = 'white', children, className, style, onClick }, ref) {
        const classes = [
            styles.root,
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