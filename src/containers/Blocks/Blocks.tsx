import React from 'react';
import styles from './Blocks.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function Blocks() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h3" size="h3" className={styles.title}>Блоки Функций</Text>

                <Text tag="p" size="h6" className={styles.text}>
                    Каждая функция работает с определенным аспектом жизни.
                </Text>

                <Text tag="p" className={styles.text}>
                    Каждая функция психики человека влияет
                    на его поведение, обозначает определенные признаки характера и побуждает принимать соответствующее
                    только ему решение.
                </Text>
            </WhiteCard>
        </div>
    );
}