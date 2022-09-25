import React from 'react';
import styles from './Functions.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';
import { DetailCard } from 'src/components/DetailCard';
import { DETAIL_CARD_FUNCTIONS } from 'src/constants/detailCard';
import { PageTitle } from '../../components/PageTitle';
import { PageBreak } from '../../components/PageBreak';

export default function Functions() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square5'>Функции</PageTitle>
            <AuthorLine text='Читать 6 минут' iconName='Time'>Психологос</AuthorLine>

            <Text tag="p" className={styles.text}>
                Психическая функция — это инструмент психики, с помощью которого она взаимодействует с реальностью. Представляют собой способности человека воспринимать и обрабатывать информацию по различным информационным аспектам.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Каждая функция работает с определенным аспектом жизни.
                Всего существует восемь соционических функций.
            </Text>

            <Text tag="p" className={styles.text}>
                Они ограничены своим кругом деятельности, взаимодействует с определённым аспектом реальности, воспринимает, обрабатывает и выдает информацию, связанную с одним из аспектов информационного метаболизма.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Лучше рассматривать функции вместе с пониманием блоков, колец, мерностей и признаков.</i>
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/blocks" label="Блоки и кольца" icon="Square6" />
                <BlockLink path="/functions/tags" label="Бинарные признаки" icon="Document" />
                <BlockLink path="/functions/signs" label="Мерности и направленность" icon="Document" />
            </div>

            <PageBreak>Функции</PageBreak>

            {
                DETAIL_CARD_FUNCTIONS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </WhiteCard>
    );
}
