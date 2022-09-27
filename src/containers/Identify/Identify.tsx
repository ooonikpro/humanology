import React from 'react';
import styles from './Identify.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function Identify() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Mug'>Как определять социотип?</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Неизвестно</AuthorLine>

            <Text tag="p" size="large">
                Статья про то, как опознать тот или иной социотип в своем окружении.
            </Text>
            <EndPoint />
        </WhiteCard>
    );
}