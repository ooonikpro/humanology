import React from 'react';
import styles from './History.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function History() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h4" size="h4" font="additional" className={styles.title}>История</Text>

            </WhiteCard>
        </div>
    );
}