import React from 'react';
import styles from './Functions.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';
import { DetailCard } from 'src/components/DetailCard';
import { DETAIL_CARD_FUNCTIONS } from 'src/constants/detailCard';

export default function Functions() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Функции</Text>
                <AuthorLine text='Читать 5 минут' iconName='Time'>Неизвестен</AuthorLine>

                <Text tag="p" className={styles.text}>
                    Целостное психологическое образование, которое также содержит: некоторое целостное внутренние
                    пространство, внутреннюю сферу, память, составные части.
                </Text>

                <Text tag="p" size="h5" color="accent" className={styles.text}>
                    Каждая функция работает с определенным аспектом жизни.
                </Text>

                <Text tag="p" className={styles.text}>
                    Каждая функция психики человека влияет на его поведение, обозначает определенные признаки характера и побуждает принимать соответствующее только ему решение.
                </Text>

                <Text tag="p" className={styles.text}>
                    Невозможно рассматривать функции, отдельно от колец и блоков.
                </Text>

                <BlockLink path="/blocks" label="Блоки и кольца функций" icon="Square6" />

                <hr />

                {
                    DETAIL_CARD_FUNCTIONS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey}/>)
                }
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
