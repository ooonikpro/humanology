import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';
import { BlockLink } from '../../../components/BlockLink';

export default function Carl() {
    return (
        <>
            <div className={styles.person}>
                <img src={require('../../../assets/history/carl.png')} alt="Карл Густав Юнг" className={styles.userpic} />
                <span className={styles.text}>
                    <Text tag="h2" size="h5" color="accent" className={styles.name}>Карл Густав <br />Юнг</Text>
                    <Text tag="p" size="body" color="grey" className={styles.date}>1875 — 1961, Цюрих</Text>
                </span>
            </div>
            <Text tag="p" size="h5" font="additional" color="accent">
                Психические функции, Карл
            </Text>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>

            <Text tag="p" size="large">
                Ввёл в психологию понятия «психических функций», характеристики индивидуальных психических процессов
                которые в комбинации с его же «психическими установками» позволяют описать различные «типы личности».
            </Text>

            <Text tag="p" size="h6" color="accent">
                Описал четыре психические функции — мышление, чувство, ощущение, интуиция.и две психические установки —
                интроверсия и экстраверсия.
            </Text>

            <Text tag="p" size="large">
                Полагая, что «чистых» экстравертов и интровертов не бывает, считал, что у каждого человека одна из этих
                установок преобладает.
            </Text>

            <Text tag="p" size="h6" color="accent">
                Четыре психологических типа и две психологические установки дают восемь наглядных психологических типов.
            </Text>

            <Text tag="p" size="large">
                Интуиция передаёт субъекту восприятие бессознательным путём. Предметом такого восприятия может быть всё
                — и внешние, и внутренние объекты или их сочетания.
            </Text>

            <Text tag="p" size="large">
                Мышление следует своим собственным законам, приводит данные содержания представлений в понятийную связь.
            </Text>

            <Text tag="p" size="large">
                Ощущение — восприятие, совершающееся посредством органов чувств.
            </Text>

            <Text tag="p" size="large">
                Чувства придает содержанию известную ценность в смысле принятия или отвержения его. Чувство основано на
                оценочных суждениях: хорошо — плохо, красиво — некрасиво.
            </Text>

            <hr />

            <Text tag="p" size="large">
                Цитата из книги «Психологические типы»:
            </Text>

            <Text tag="p" size="large" color="accent">
                Сознательное психическое есть средство для адаптации и ориентации и состоит из ряда различных
                психических функций. Среди них можно выделить четыре основных: ощущение, мышление, чувство, интуиция.
            </Text>

            <Text tag="p" size="large" color="accent">
                В ощущение я включаю всё восприятие с помощью чувственных органов; под мышлением я имею в виду функцию
                интеллектуального познания и формирования логических заключений; чувство — функция субъективной оценки;
                интуицию я понимаю как восприятие с помощью бессознательного или восприятие бессознательных содержаний.
            </Text>

            <Text tag="p" size="h6" color="accent">
                Настолько, насколько позволяет мой опыт, эти четыре базовые функции кажутся мне достаточными, чтобы
                выразить и представить все многочисленные виды сознательной ориентации.
            </Text>

            <Text tag="p" size="large" color="accent">
                Мышление должно тщательно исключать чувство, если только оно желает быть настоящим, верным своему
                принципу мышлением.
            </Text>

            <Text tag="p" size="large" color="accent">
                Но в таком случае речь идёт не о дифференцированном типе, а о сравнительно неразвитом мышлении и
                чувстве.
            </Text>

            <Text tag="p" size="large" color="accent">
                Равномерная сознательность и бессознательность функций есть, следовательно, признак примитивного
                состояния духа.
            </Text>

            <BlockLink path="/history/katrin" label="Дальше: Кэтрин и Изабель Бриггс" icon="ArrowRightSquare" />
        </>
    );
}
