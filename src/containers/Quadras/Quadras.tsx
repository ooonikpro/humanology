import React from 'react';
import styles from './Quadras.module.scss';
import { Text } from '../../components/Text';
import { WhiteCard } from '../../components/WhiteCard';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { DETAIL_CARD_QUADRAS } from 'src/constants/detailCard';
import { DetailCard } from '../../components/DetailCard';
import { PageBreak } from '../../components/PageBreak';

export default function Quadras() {

    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square7'>Квадры</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Виталий Воробьёв</AuthorLine>

            <Text tag="p" className={styles.text}>
                Квадра — это группа из четырех типов, которые связаны дуальными, активационными и зеркальными отношениями.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Это наиболее хорошо изученная малая группа.</i>
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Всего существует четыре квадры — <br /> Воздух <i>Альфа</i>, Огонь <i>Бета</i>, <br />Вода <i>Гамма</i> и Земля <i>Дельта</i>.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Квадра выполняет определенную социальную миссию в обществе.
                Внутри такой группы действуют установки и ценности, объединяющие людей общей для них программой действий.
            </Text>

            <Text tag="p" className={styles.text}>
                В квадре существует некий общий язык, изначальное фоновое взаимопонимание. В этом смысле квадра сильно отличается от обычной компании.
            </Text>

            <Text tag="p" className={styles.text}>
                Это люди, которые могут вместе работать и вместе отдыхать.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                В этой группе у людей разные способности и они поддерживают и дополняют друг друга.
            </Text>


            <Text tag="p" className={styles.text}>
                В квадре находятся четыре разных социотипа, их объединяют
                признаки:
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">Язык квадры</Text>
                <Text tag="li">Взгляды на мир и принципы ценностей</Text>
                <Text tag="li">Способ принятия решений</Text>
                <Text tag="li">
                    Сексуальная программа — техника секса, соблазнение,
                    прелюдия и т.д.
                </Text>
                <Text tag="li">Комплекс квадры</Text>
            </Text>

            <PageBreak>О конфликтах в квадре</PageBreak>

            <Text tag="p" className={styles.text}>
                Следует понимать, что бесконфликтных групп не существует: конфликты могут возникнуть везде: и между дуалами, и в квадре.
            </Text>

            <Text tag="p" className={styles.text}>
                Но здесь, в отличие от других групп, существует язык, на котором люди всегда могут договориться: они понимают смысл претензий друг к другу.
            </Text>

            <div className={styles.row}>
                <Text size="body" color="grey">Решительный</Text>
                <Text size="body" color="grey">Рассудительный</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Аристократ</Text>
                <Text size="body" color="grey">Демократ</Text>
            </div>

            <PageBreak>Квадры</PageBreak>
            {
                DETAIL_CARD_QUADRAS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            {/* {QUADRAS_DATA.map((item, $i) => {
                return <QuadraCard {...item} onClick={() => goTo(item.element)} key={$i} />;
            })} */}
            <EndPoint />

        </WhiteCard>

    );
}