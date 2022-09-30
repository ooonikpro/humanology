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
            <PageTitle back iconName='Help'>Что это?</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>äлёша</AuthorLine>

            <Text tag="p" size="large">
                Здесь будет ликбез-статья.
            </Text>

            <EndPoint />
        </WhiteCard>
    );
}