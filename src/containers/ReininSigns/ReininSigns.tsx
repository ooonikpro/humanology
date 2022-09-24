import React from 'react';
import styles from './ReininSigns.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function ReininSigns() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square12'>Признаки Рейнина</PageTitle>
            <AuthorLine text='Пока нечего читать' iconName='Unknown'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Здесь будет все про признаки Рейнина
            </Text>
            <EndPoint />
        </WhiteCard>
    );
}