import React from 'react';
import styles from './AuthorLine.module.scss';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface Props {
	readTime?: string;
	children: React.ReactNode;
}

export const AuthorLine : React.FC<Props> = ({ readTime,  children }) => {
    return (
        <div className={styles.root}>
            <span className={styles.pair}>
                <Icon name="Clock" color="accent" size={16}/>
                <Text size="smaller" color="accent">
					Читать {readTime} минут
                </Text>
            </span>
            <span className={styles.pair}>
                <Text size="smaller" color="accent">
                    {children}
                </Text>
                <Icon name="UserCheck" color="accent" size={16}/>
            </span>
        </div>
    );
};