import React from 'react';
import styles from './WhatIsSocionics.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function WhatIsSocionics() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle back iconName='Help'>Что такое соционика</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Неизвестно</AuthorLine>

            <Text tag="p" size="large">
                Здесь будет ликбез-статья.
            </Text>

            <EndPoint />
        </WhiteCard>
    );
}