import React from 'react';
import styles from './ReininSigns.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';

export default function ReininSigns() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Признаки Рейнина</Text>
                <AuthorLine text='Пока нечего читать' iconName='Unknown'>Неизвестен</AuthorLine>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}