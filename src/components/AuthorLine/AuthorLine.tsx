import React from 'react';
import styles from './AuthorLine.module.scss';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as Icons from '../Icon/icons';

interface Props {
	text?: string;
    iconName: keyof typeof Icons;
	children: React.ReactNode;
}

export const AuthorLine : React.FC<Props> = ({ text, iconName, children }) => {
    return (
        <div className={styles.root}>
            <span className={styles.pair}>
                <Icon name={iconName} color="accent" size={16}/>
                <Text size="small" color="accent">
                    {text}
                </Text>
            </span>
            <span className={styles.pair}>
                <Text size="small" color="accent">
                    {children}
                </Text>
                <Icon name="UserCheck" color="accent" size={16}/>
            </span>
        </div>
    );
};