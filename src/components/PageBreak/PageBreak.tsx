import React from 'react';
import styles from './PageBreak.module.scss';
import { Text } from '../Text';
import { Icon } from '../Icon';

interface Props {
    className?: string;
    children?: React.ReactNode
}


export const PageBreak: React.FC<Props> = ({ className, children }) => {

    const classes = [
        className,
        styles.root,
    ].join(' ');

    return (
        <div className={classes}>
            <Icon name="Paragraph" color="accent" size={24} className={styles.icon} />
            <Text tag="h2" color="accent" size="h6">
                {children}
            </Text>
        </div>
    );
};