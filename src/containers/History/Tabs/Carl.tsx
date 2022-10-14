import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';
import { BlockLink } from '../../../components/BlockLink';

export default function Carl() {
    return (
        <>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>
            <div className={styles.person}>
                <img src={require('../../../assets/history/carl.png')} alt="Карл Густав Юнг" className={styles.userpic} />
                <span className={styles.text}>
                    <Text tag="h2" size="h5" color="accent" className={styles.name}>Карл Густав <br />Юнг</Text>
                    <Text tag="p" size="body" color="grey" className={styles.date}>1875 — 1961, Цюрих</Text>
                </span>
            </div>
            <Text tag="p" size="h4" font="additional" color="accent" className={styles.text}>
                Психические функции, Карл
            </Text>
            <Text tag="p" className={styles.text}>
                Ввёл в психологию понятия «психических функций», характеристики индивидуальных психических процессов
                которые в комбинации с его же «психическими установками» позволяют описать различные «типы личности».
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Описал четыре психические функции — мышление, чувство, ощущение, интуиция и две психические установки —
                интроверсия и экстраверсия.
            </Text>

            <Text tag="p" className={styles.text}>
                Полагая, что «чистых» экстравертов и интровертов не бывает, считал, что у каждого человека одна из этих
                установок преобладает.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Четыре психологических типа и две психологические установки дают восемь наглядных психологических типов.
            </Text>

            <Text tag="p" className={styles.text}>
                Интуиция передаёт субъекту восприятие бессознательным путём. Предметом такого восприятия может быть всё
                — и внешние, и внутренние объекты или их сочетания.
            </Text>

            <Text tag="p" className={styles.text}>
                Мышление следует своим собственным законам, приводит данные содержания представлений в понятийную связь.
            </Text>

            <Text tag="p" className={styles.text}>
                Ощущение — восприятие, совершающееся посредством органов чувств.
            </Text>

            <Text tag="p" className={styles.text}>
                Чувства придает содержанию известную ценность в смысле принятия или отвержения его. Чувство основано на
                оценочных суждениях: хорошо — плохо, красиво — некрасиво.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Цитата из книги «Психологические типы»:
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Сознательное психическое есть средство для адаптации и ориентации и состоит из ряда различных
                психических функций. Среди них можно выделить четыре основных: ощущение, мышление, чувство, интуиция.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                В ощущение я включаю всё восприятие с помощью чувственных органов; под мышлением я имею в виду функцию
                интеллектуального познания и формирования логических заключений; чувство — функция субъективной оценки;
                интуицию я понимаю как восприятие с помощью бессознательного или восприятие бессознательных содержаний.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Настолько, насколько позволяет мой опыт, эти четыре базовые функции кажутся мне достаточными, чтобы
                выразить и представить все многочисленные виды сознательной ориентации.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Мышление должно тщательно исключать чувство, если только оно желает быть настоящим, верным своему
                принципу мышлением.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Но в таком случае речь идёт не о дифференцированном типе, а о сравнительно неразвитом мышлении и
                чувстве.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Равномерная сознательность и бессознательность функций есть, следовательно, признак примитивного
                состояния духа.
            </Text>

            <hr />

            <div className={styles.linkblock}>
                <BlockLink path="/history/katrin" label="Дальше: Кэтрин и Изабель Бриггс" icon="ArrowRightSquare" />
            </div>
        </>
    );
}
