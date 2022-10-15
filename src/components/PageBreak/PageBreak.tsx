import React from 'react';
import styles from './PageBreak.module.scss';
import { Text } from '../Text';
import { Icon } from '../Icon';
import * as Icons from '../Icon/icons';

interface Props {
    className?: string;
    children?: React.ReactNode
    iconName?: keyof typeof Icons;
}


export const PageBreak: React.FC<Props> = ({ className, children, iconName }) => {

    const classes = [
        className,
        styles.root,
    ].join(' ');

    return (
        <div className={classes}>
            <Icon name={iconName ? iconName : 'Paragraph'} color="accent" size={24} className={styles.icon} />
            <Text tag="h2" color="accent" size="h6">
                {children}
            </Text>
        </div>
    );
};