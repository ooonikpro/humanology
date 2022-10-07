import React from 'react';
import styles from './Tests.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { TestVorobiev } from 'src/components/TestVorobiev';

export default function Tests() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='PresentationChart'>Тесты</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Разные</AuthorLine>

            <Text tag="p" size="large">
                Короткий тест Игоря Вайсбанда — 4 вопроса.
            </Text>

            <Text tag="p" size="large">
                Длинный тест Екатерины Филатовой — 40 вопросов.
            </Text>

            <TestVorobiev />

            <EndPoint />
        </WhiteCard>
    );
}
