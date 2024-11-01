import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';
import { BlockLink } from '../../../components/BlockLink';

export default function Katrin() {
    return (
        <>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>

            <div className={styles.person}>
                <img src={require('../../../assets/history/katrin.png')} alt="Кэтрин и Изабель Бриггс" className={styles.userpic} />
                <span className={styles.text}>
                    <Text tag="h2" size="h5" color="accent" className={styles.name}>Кэтрин<br />и Изабель Бриггс</Text>
                    <Text tag="p" size="body" color="grey" className={styles.date}>1875 — 1968, США</Text>
                </span>
            </div>

            <Text tag="p" size="h4" font="additional" color="accent" className={styles.text}>
                Дочки-матери типологии
            </Text>

            <Text tag="p" className={styles.text}>
                Бриггс училась дома у своего отца. Утверждала, что она не помнит, кто научил её писать, но он или
                она сделали это плохо.
            </Text>

            <Text tag="p" className={styles.text}>
                Она никогда не посещала формальную школу, пока не уехала в колледж в возрасте четырнадцати лет.
            </Text>

            <Text tag="p" className={styles.text}>
                Бриггс получила степень в сельском хозяйстве и стала известным ученым в то время, когда считалось, что слишком много образования для женщин вредит их репродуктивным способностям.
            </Text>

            <Text tag="p" className={styles.text}>
                После колледжа она работала учителем. На протяжении всей своей жизни она была преданным читателем и писателем.
            </Text>

            <Text tag="p" className={styles.text}>
                Бриггс изучила данные исследований современных детских теорий образования и социального развития.
            </Text>

            <Text tag="p" className={styles.text}>
                Она создала для детей тест по призванию. Она видела в этом ключ к будущему счастью и благополучию
                ребенка.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Ее ранние исследования привели к тому, что в 1917 году она идентифицировала 4 основных типа личности: медитативные типы, спонтанные типы, исполнительные типы и коммуникативные типы, которые позже превратились в термины MBTI.
            </Text>

            <Text tag="p" className={styles.text}>
                Однако, исследуя работы различных философов, ученых и психологов, она не смогла выделить одну окончательную теорию типа, охватывающую все аспекты.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Из-за недостатка открытий она решила выделить свою собственную теорию типа.
            </Text>

            <Text tag="p" className={styles.text}>
                В 1923 году Бриггс прочла работу Карла Юнга и представил его своей дочери. Его теория сосредоточена на врожденных различиях между людьми в том, что касается принятия ими решений и получения информации.
            </Text>

            <Text tag="p" className={styles.text}>
                Она была вдохновлена на написание эротической фантастики о Юнге. Прочитав «Психологические типы» Юнга , Бриггс отказалась от собственного создания теории личности и начала более глубоко фокусироваться на идеях Юнга.
            </Text>

            <Text tag="p" className={styles.text}>
                Изабель, изначально не интересовавшаяся типологическими исследованиями, изменила своё мнение, когда она столкнулась с работой, в которой пытались определить тип работы людей, соответствующий их характеру.
            </Text>

            <Text tag="p" className={styles.text}>
                Она решила объединить усилия с мамой. Кэтрин и Изабель находились под сильным влиянием Юнга и решили, что его идеи могут помочь людям сделать лучший жизненный выбор и представить индивидуальные различия в позитивном свете.
            </Text>

            <Text tag="p" className={styles.text}>
                С этого момента они начали двадцатилетний период наблюдений. В 1945 году Кэтрин и Изабель с помощью Лаймана Бриггса провели первое обследование студентов медицинской школы Джорджа Вашингтона. Помня о ранней работе своей матери во время Второй мировой войны, Изабель создала тест, который поможет определить подходящую для человека работу, связанную с войной.
            </Text>

            <hr />

            <Text tag="p" color="accent" className={styles.text}>
                Бриггс и её ранние исследования типов личности сыграли важную роль в создание одного из самых известных и широко используемых инструментов личности, индикатора типа Майерс-Бриггс — MBTI.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Сегодня он используется в таких широких областях, как развитие руководителей и семейное консультирование.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Поскольку в 1962 году он был официально добавлен к коллекции тестов Службы образовательного тестирования, по оценкам, 50 миллионов человек прошли MBTI.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                MBTI классифицирует типы личности по четырем парам категорий. Кэтрин и Изабель утверждали, что каждый вписывается в одну из 16 возможных комбинаций типов личности с преобладающим предпочтением в каждой из четырех пар.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Структура теста практически не изменилась с тех пор, как Бриггс впервые её разработала.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                MBTI подвергается критике со стороны некоторых, кто утверждает, что Бриггс разработала оценку у себя дома до проведения каких-либо обширных научных исследований, а не наоборот.
            </Text>

            <hr />

            <div className={styles.linkblock}>
                <BlockLink path="/history/anton" label="Дальше: Антон Кемпинский" icon="ArrowRightSquare" />
            </div>
        </>
    );
}
