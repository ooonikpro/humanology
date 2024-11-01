import React from 'react';
import styles from './Suits.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { DetailCard } from '../../components/DetailCard';
import { DETAIL_CARD_SUITS, DETAIL_CARD_ROLES } from '../../constants/detailCard';
import { PageTitle } from '../../components/PageTitle';
import { PageBreak } from '../../components/PageBreak';
import { AppScrollbar } from '../../components/AppScrollbar';


export default function Suits() {

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Square8'>Карты и масти</PageTitle>
                <AuthorLine text="Читать 5 минут" iconName="Time">Сергей Савченко</AuthorLine>

                <Text tag="p" className={styles.text}>
                    Авторы этой идеи, Сергей и Ирина Савченко обратили внимание
                    на определенную близость описаний соционических типов и
                    персонажей квадрата придворных карт колоды Таро.
                </Text>

                <PageBreak>Карты</PageBreak>

                <Text tag="p" className={styles.text}>
                    Группы стимулов к деятельности. У каждой группы типов,
                    составленной таким образом, свои движущие мотивы, которые
                    кажутся достойными внимания, заставляют проявлять
                    активность.
                </Text>

                <div className={styles.row}>
                    <Text size="body" color="grey">Сенсорик</Text>
                    <Text size="body" color="grey">Интуит</Text>
                </div>

                <div className={styles.row}>
                    <Text size="body" color="grey">Интроверт</Text>
                    <Text size="body" color="grey">Экстраверт</Text>
                </div>

                <div className={styles.row}>
                    <Text size="body" color="grey">Предусмотрительный</Text>
                    <Text size="body" color="grey">Беспечный</Text>
                </div>

                {
                    DETAIL_CARD_ROLES.slice(1, 5).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <PageBreak>Масти</PageBreak>

                <Text tag="p" className={styles.text}>
                    Это не только образ мышления, но и в какой-то мере — образ, стиль жизни. Иногда какая-то особая ситуация может соотноситься с какой-то мастью и требовать своего рассмотрения именно с определенной позиции.
                </Text>

                <Text tag="p" className={styles.text}>
                    Каждая масть имеет свой набор ключевых слов, в которые она укладывается и которыми предпочитают пользоваться представители данной масти, т.е. «мечи» видят одно, а «посохи» — другое.
                </Text>
                <Text tag="p" className={styles.text}>
                    Масти — это то, что людей объединяет...
                </Text>

                <div className={styles.row}>
                    <Text size="body" color="grey">Рационал</Text>
                    <Text size="body" color="grey">Иррационал</Text>
                </div>

                <div className={styles.row}>
                    <Text size="body" color="grey">Этик</Text>
                    <Text size="body" color="grey">Логик</Text>
                </div>

                <div className={styles.row}>
                    <Text size="body" color="grey">Эмотивист</Text>
                    <Text size="body" color="grey">Конструктивист</Text>
                </div>

                {
                    DETAIL_CARD_SUITS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
