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
import { PageBreak } from '../../components/PageBreak';

export default function ReininSigns() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Square12'>Признаки Рейнина</PageTitle>
                <AuthorLine text='Читать 8 минут' iconName='Time'>Интернет</AuthorLine>
                <Text tag="p" className={styles.text}>
                    В свое время еще на начальном этапе работы Аушры Аугустинавичюте по формулированию и исследованию основных соционических положений она заметила проявление некоторых соционических признаков, не входящих в базис Юнга.
                </Text>
                <Text tag="p" className={styles.text}>
                    И уже в ее первоначальных работах встречались признаки «статика · динамика», «аристократия · демократия», что натолкнуло Григория Романовича Рейнина на мысль исследовать этот вопрос и подсчитать математически возможность существования еще каких-либо признаков, разделяющих социон на группы и описывающих психологические свойства индивида.
                </Text>
                <Text tag="p" className={styles.text}>
                    Г. Р. Рейнин доказал теорему, что 16 объектов можно поделить на две группы пополам пятнадцатью различными способами, и это будут те группы, которые описывают свойства личности.
                </Text>

                <PageBreak>Статика · Динамика</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(0, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Позитивист · Негативист</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(2, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Квестим · Деклатим</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(4, 6).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Тактик · Стратег</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(6, 8).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Эмотивист · Конструктивист</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(8, 10).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Процесс · Результат</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(10, 12).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Уступчивый · Упрямый</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(12, 14).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Беспечный · Предусмотрительный</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(14, 16).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Рассудительный · Решительный</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(16, 18).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Субьективный · Объективный</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(18, 20).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Аристократ · Демократ</PageBreak>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_REININ.slice(20, 22).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}