import React from 'react';
import styles from './TextInline.module.scss';

export interface Props {
    className?: string;
    children: React.ReactNode[];
    align?: 'center' | 'start' | 'stretch' | 'baseline';
    justify?: 'start' | 'between';
}

export const TextInline: React.FC<Props> = ({ children, align = 'center', justify = 'start', className }) => {
    return (
        <div className={[
            styles.root,
            styles[`align-${align}`],
            styles[`justify-${justify}`],
            className
        ].join(' ')}>
            {children}
        </div>
    );
};
