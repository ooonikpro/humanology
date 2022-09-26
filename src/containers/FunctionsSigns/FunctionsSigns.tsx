import React from 'react';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import styles from './FunctionsSigns.module.scss';
import { PageTitle } from '../../components/PageTitle';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { Icon } from '../../components/Icon';
import { PageBreak } from '../../components/PageBreak';

export default function FunctionSigns() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Document' back>Мерности и направленность</PageTitle>
            <AuthorLine iconName='Time' text='Читать 3 минуты'>Викизнание</AuthorLine>
            <PageBreak>
                Мерность функций
            </PageBreak>
            <Text tag="p" size="large" className={styles.text}>
                Понятие мерности функций ввёл Букалов в 1989 году по аналогии с размерностью (параметрической зависимостью от измерений) функций в математике. Согласно ему, проявления функций могут быть адекватны опыту, нормам, ситуации и времени.
            </Text>
            <br />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Одномерная
            </Text>
            <Text tag="p" className={styles.text}>
                <i>Ex (англ. Expirience)</i> — опыт. <br />
                Все функции могут накапливать и использовать собственный жизненный опыт. Функции владеющие только опытом (болевая, суггестивная) часто действуют неадекватно ситуации, если ситуация им не знакома по опыту. Вера Новикова ввела понятие режима восприятия информации. Восприятие информации по этим функциям происходит в режиме прошлого. Реакция по функции часто неадекватна существующей ситуации, понимание ситуации приходит через некоторое, нередко продолжительное время, когда актуальность уже теряется.
            </Text>
            <hr />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Двумерная
            </Text>
            <Text tag="p" className={styles.text}>
                <i>Nr (англ. Norm)</i> — норма. <br />
                Нормами владеют все функции, кроме болевой, и суггестивной. К нормам относятся социальные нормы (этикет), правила, законы, чужой опыт. Мера нормы определяет восприимчивость функций к тому, как действуют в ситуации другие. Режим восприятия — статичное настоящее. Реакция по текущей ситуации, без расчёта возможных последствий.
            </Text>
            <hr />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Трехмерная
            </Text>
            <Text tag="p" className={styles.text}>
                <i>St (англ. Situation)</i> — ситуация. <br />
                Ситуацией владеют все сильные функции. Они способны вырабатывать новые решения, эффективно использовать исключения из правил, обобщать закономерности — генерировать новый опыт и знания. По Новиковой режим восприятия — динамичное настоящее. Действия по ситуации с учётом тенденций и возможного развития ситуации.
            </Text>
            <hr />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Четырехмерная
            </Text>
            <Text tag="p" className={styles.text}>
                <i>Tm (англ. Time)</i> — время. <br />
                Временем владеют только программная и фоновая функции. Реакция привязана ко времени: реакция на подобную ситуацию в другой момент времени может быть уже иной, оценки изменяются. По Новиковой режим восприятия — будущее. Прогнозирование ситуации, действия на опережение, на перспективу, способность к мышлению в виртуальном масштабе времени.
            </Text>

            <PageBreak>
                Знаки функций
            </PageBreak>

            <Text tag="p" size="large" className={styles.text}>
                Ввел их Виктор Гуленко. Знаки функций определяют следующие 4 свойства функций:
            </Text>
            <br />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Качество
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquarePlus" color="accent" size={24} className={styles.iconbullet} />
                Максимизация позитива. Компетентность только в области позитивных свойств. Избегание, опасение негатива.
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquareMinus" color="accent" size={24} className={styles.iconbullet} />
                Приоритет на уход от негатива. Компетентность как в области позитива, так и негатива.
            </Text>
            <hr />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Масштабность
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquarePlus" color="accent" size={24} className={styles.iconbullet} />
                Крупный план, локальность, детальность в ограниченной области компетенции.
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquareMinus" color="accent" size={24} className={styles.iconbullet} />
                Общий план, глобальность, всеобщность.
            </Text>
            <hr />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Направленность
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquarePlus" color="accent" size={24} className={styles.iconbullet} />
                Внутрь, в область отвественности. Защита своего.
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquareMinus" color="accent" size={24} className={styles.iconbullet} />
                Наружу, захват нового, влияние.
            </Text>
            <hr />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Дистанция
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquarePlus" color="accent" size={24} className={styles.iconbullet} />
                Близкая психологическая дистанция.
            </Text>
            <Text tag="p" className={styles.pair}>
                <Icon name="SquareMinus" color="accent" size={24} className={styles.iconbullet} />
                Далёкая психологическая дистанция.
            </Text>
            <EndPoint />
        </WhiteCard>
    );
}