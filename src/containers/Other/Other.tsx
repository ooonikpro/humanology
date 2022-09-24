import React from 'react';
import styles from './Other.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function Other() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='SquareDots'>Прочее</PageTitle>
            <AuthorLine text='Пока нечего читать' iconName='Time'>Разные</AuthorLine>
            <Text tag="p" className={styles.text}>
                Здесь будут всякие интересные статьи
            </Text>
            <EndPoint />
        </WhiteCard>
    );
}