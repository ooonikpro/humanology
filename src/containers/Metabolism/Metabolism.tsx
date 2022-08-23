import React from 'react';
import styles from './Metabolism.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function Metabolism() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Информационный метаболизм</Text>

            </WhiteCard>
        </div>
    );
}