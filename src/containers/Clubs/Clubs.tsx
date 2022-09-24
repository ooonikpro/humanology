import React from 'react';
import styles from './Clubs.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';


export default function Clubs() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square9'>Клубы</PageTitle>
            <AuthorLine text='Пока читать нечего' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Тут будет все про клубы.
            </Text>
            <EndPoint />
        </WhiteCard>
    );
}