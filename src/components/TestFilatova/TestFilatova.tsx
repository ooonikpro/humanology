import React from 'react';
import styles from './TestFilatova.module.scss';
import { Text } from '../Text';

export const TestFilatova = () => {
    return (
        <div className={styles.test}>
            <hr />
            <Text tag="p" size="large" color="accent">
                Здесь будет тест Филатовой…
            </Text>
            <Text tag="p" size="h6" color="accept">
                Еще пока не готово…
            </Text>
        </div>
    );
};