import React from 'react';
import styles from './Disclaimer.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function Disclaimer() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h3" size="h3" className={styles.title}>Дисклеймер</Text>
                
            </WhiteCard>
        </div>
    );
}