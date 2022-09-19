import React from 'react';
import styles from './AspectItem.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { EndPoint } from '../../components/EndPoint';

export default function AspectItem() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>
                    Какой-то аспект
                </Text>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}