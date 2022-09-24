import React from 'react';
import styles from './Blocks.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';
import { PageTitle } from '../../components/PageTitle';

export default function Blocks() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square6'>Блоки и кольца функций</PageTitle>

            <AuthorLine text='Читать 3 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Каждая функция работает с определенным аспектом жизни.
            </Text>

            <Text tag="p" className={styles.text}>
                Каждая функция психики человека влияет
                на его поведение, обозначает определенные признаки характера и побуждает принимать соответствующее
                только ему решение.
            </Text>

            <BlockLink path="/functions" label="Функции" icon="Square5" />

            <EndPoint />
        </WhiteCard>
    );
}