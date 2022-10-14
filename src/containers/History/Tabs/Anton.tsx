import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';
import { BlockLink } from '../../../components/BlockLink';

export default function Anton() {
    return (
        <>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>

            <div className={styles.person}>
                <img src={require('../../../assets/history/anton.png')} alt="Антон Кемпинский" className={styles.userpic} />
                <span>
                    <Text tag="h2" size="h5" color="accent" className={styles.name}>Антон <br />Кемпинский</Text>
                    <Text tag="p" size="body" color="grey" className={styles.date}>1918 — 1972, Краков</Text>
                </span>
            </div>

            <Text tag="p" size="h4" font="additional" color="accent">
                Польский метаболизм
            </Text>

            <Text tag="p" className={styles.text}>
                Польский психиатр, психолог, философ. Первым начал внедрять в Польше новый гуманистический подход в психиатрии и психотерапии. Был одним из первых исследователей, которого заинтересовали психологические проблемы бывших узников нацистских лагерей смерти.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Получил известность своими работами по теории энергетическо-информационного метаболизма.
            </Text>

            <Text tag="p" className={styles.text}>
                Ряд положений концепции информационного метаболизма были использованы в психиатрической аксиологии.
            </Text>

            <Text tag="p" className={styles.text}>
                Аутизм Кемпинский рассматривал как фактор, приводящий к прекращению обмена информации с внешним миром у страдающего шизофренией, и, соответственно, прекращению информационного метаболизма.
            </Text>

            <Text tag="p" className={styles.text}>
                При аутизме происходит прекращение информационного обмена с миром, что в итоге приводит к заточению в мире личных переживаний, «психологической бесплодности» и «шизофренической пустоте».
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Цитата из книги «Экзистенциальная психиатрия»:
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                В сигнальном метаболизме, то есть в получении информации из окружения и реагировании на неё (реакция организма, в свою очередь, является сигналом для окружения), существуют законы, аналогичные законам энергетического метаболизма, а именно, закон специфичности структуры и закон равновесия между анаболическими и катаболическими процессами.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Подобно тому, как субстанции, ассимилируемые организмом, разбиваются на основные элементы из которых организм строит собственную структуру, потоки информации, поступающие извне, преобразуются в специфические структуры —отсюда правильность утверждения, что каждый живёт в своем собственном мире.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Способность интеграции является одной из самых существенных черт нервной системы.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Количество энергии, поступающей в организм благодаря его анаболическим процессам (построение), в общем, уравнивается с количеством энергии, выходящей благодаря процессам катаболическим (распада).
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Аналогично существует определённое равновесие между информацией, принимаемой из окружения, и высылаемой в него.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Аналогии между энергетическим метаболизмом и информационным подтверждает верность известного выражения «психическое несварение»…
            </Text>

            <hr />

            <div className={styles.linkblock}>
                <BlockLink path="/history/aushra" label="Дальше: Аушра Аугустинавичюте" icon="ArrowRightSquare" />
            </div>
        </>
    );
}
