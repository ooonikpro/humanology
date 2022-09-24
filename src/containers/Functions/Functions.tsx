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

export default function Functions() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square5'>Функции</PageTitle>
            <AuthorLine text='Читать 9 минут' iconName='Time'>Неизвестен</AuthorLine>

            <Text tag="p" className={styles.text}>
                Целостное психологическое образование, которое также содержит: некоторое целостное внутренние
                пространство, внутреннюю сферу, память, составные части.
            </Text>

            <Text tag="p" size="h5" color="accent" className={styles.text}>
                Каждая функция работает с определенным аспектом жизни.
            </Text>

            <Text tag="p" className={styles.text}>
                Также влияет на его поведение, обозначает определенные признаки характера и побуждает принимать соответствующее только ему решение.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Лучше рассматривать функции вместе с пониманием блоков, колец, мерностей и признаков.</i>
            </Text>

            <div className={styles.linkblock}>

                <BlockLink path="/blocks" label="Блоки и кольца" icon="Square6" />
                <BlockLink path="/functions/tags" label="Бинарные признаки" icon="Document" />
                <BlockLink path="/functions/signs" label="Мерности и направленность" icon="Document" />
            </div>

            {
                DETAIL_CARD_FUNCTIONS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </WhiteCard>
    );
}
