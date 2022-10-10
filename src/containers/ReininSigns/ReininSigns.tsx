import React from 'react';
import styles from './ReininSigns.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { DETAIL_CARD_REININ } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function ReininSigns() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Square12'>Признаки Рейнина</PageTitle>
                <AuthorLine text='Пока нечего читать' iconName='Unknown'>Неизвестен</AuthorLine>
                <Text tag="p" className={styles.text}>
                    Здесь будет все про признаки Рейнина
                </Text>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}