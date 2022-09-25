import React from 'react';
import styles from './Suits.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { useNavigate } from 'react-router-dom';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { DetailCard } from '../../components/DetailCard';
import { DETAIL_CARD_SUITS, DETAIL_CARD_ROLES } from '../../constants/detailCard';
import { PageTitle } from '../../components/PageTitle';
import { PageBreak } from '../../components/PageBreak';


export default function Suits() {
    const navigate = useNavigate();

    return (
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
                <Text size="body" color="grey">Интроверт</Text>
                <Text size="body" color="grey">Экстраверт</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Интуит</Text>
                <Text size="body" color="grey">Сенсорик</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Предусмотрительный</Text>
                <Text size="body" color="grey">Беспечный</Text>
            </div>

            {
                DETAIL_CARD_ROLES.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
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
                <Text size="body" color="grey">Логик</Text>
                <Text size="body" color="grey">Этик</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Иррационал</Text>
                <Text size="body" color="grey">Рационал</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Эмотивист</Text>
                <Text size="body" color="grey">Конструктивист</Text>
            </div>

            {
                DETAIL_CARD_SUITS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </WhiteCard>
    );
}
