import React from 'react';
import styles from './Blocks.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';
import { PageTitle } from '../../components/PageTitle';
import { DETAIL_CARD_BLOCKS, DETAIL_CARD_RINGS } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';

export default function Blocks() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square6'>Блоки и кольца функций</PageTitle>

            <AuthorLine text='Читать 3 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <Text tag="p" className={styles.text}>
                Аспекты всегда используются в блоке, состоящем из пары аспектов, что обеспечивает возможность согласовывать процессы непосредственного восприятия и оценки полученной информации.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                В блоке могут находиться только соседние аспекты из одного и того же кольца.
            </Text>



            <Text tag="p" color="accent" className={styles.text}>
                <i>Лучше рассматривать блоки и кольца вместе с пониманием функций, мерностей и признаков.</i>
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/functions" label="Функции" icon="Square5" />
                <BlockLink path="/functions/tags" label="Бинарные признаки" icon="Document" />
                <BlockLink path="/functions/signs" label="Мерности и направленность" icon="Document" />
            </div>

            {
                DETAIL_CARD_RINGS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <br />
            <br />

            {
                DETAIL_CARD_BLOCKS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }
            <EndPoint />
        </WhiteCard>
    );
}