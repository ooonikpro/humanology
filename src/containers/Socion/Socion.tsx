import React from 'react';
import styles from './Socion.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function Socion() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle back iconName='Unknown'>Устройство социона</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Неизвестно</AuthorLine>

            <Text tag="p" size="large">
                Здесь будет статья про устройство социона.
            </Text>

            <EndPoint />
        </WhiteCard>
    );
}