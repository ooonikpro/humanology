import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';
import { BlockLink } from '../../../components/BlockLink';

export default function Anton() {
    return (
        <>
            <div className={styles.person}>
                <img src={require('../../../assets/history/anton.png')} alt="Антон Кемпинский" className={styles.userpic} />
                <span className={styles.text}>
                    <Text tag="h2" size="h5" color="accent">Антон Кемпинский</Text>
                    <Text tag="p" size="body" color="grey" className={styles.dates}>1918 — 1972, Краков</Text>
                </span>
            </div>

            <Text tag="p" size="h5" font="additional" color="accent">
                Польский метаболизм
            </Text>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>

            <Text tag="p" size="large">
                Польский психиатр, психолог, философ. Первым начал внедрять в Польше новый гуманистический подход в психиатрии и психотерапии. Был одним из первых исследователей, которого заинтересовали психологические проблемы бывших узников нацистских лагерей смерти.
            </Text>

            <Text tag="p" size="h6" color="accent">
                Получил известность своими работами по теории энергетическо-информационного метаболизма.
            </Text>

            <Text tag="p" size="large">
                Ряд положений концепции информационного метаболизма были использованы в психиатрической аксиологии.
            </Text>

            <Text tag="p" size="large">
                Аутизм Кемпинский рассматривал как фактор, приводящий к прекращению обмена информации с внешним миром у страдающего шизофренией, и, соответственно, прекращению информационного метаболизма.
            </Text>

            <Text tag="p" size="large">
                При аутизме происходит прекращение информационного обмена с миром, что в итоге приводит к заточению в мире личных переживаний, «психологической бесплодности» и «шизофренической пустоте».
            </Text>

            <hr />

            <Text tag="p" size="large">
                Цитата из книги «Экзистенциальная психиатрия»:
            </Text>

            <Text tag="p" size="large" color="accent">
                В сигнальном метаболизме, то есть в получении информации из окружения и реагировании на неё (реакция организма, в свою очередь, является сигналом для окружения), существуют законы, аналогичные законам энергетического метаболизма, а именно, закон специфичности структуры и закон равновесия между анаболическими и катаболическими процессами.
            </Text>

            <Text tag="p" size="h6" color="accent">
                Подобно тому, как субстанции, ассимилируемые организмом, разбиваются на основные элементы из которых организм строит собственную структуру, потоки информации, поступающие извне, преобразуются в специфические структуры —отсюда правильность утверждения, что каждый живёт в своем собственном мире.
            </Text>

            <Text tag="p" size="large" color="accent">
                Способность интеграции является одной из самых существенных черт нервной системы.
            </Text>

            <Text tag="p" size="large" color="accent">
                Количество энергии, поступающей в организм благодаря его анаболическим процессам (построение), в общем, уравнивается с количеством энергии, выходящей благодаря процессам катаболическим (распада).
            </Text>

            <Text tag="p" size="large" color="accent">
                Аналогично существует определённое равновесие между информацией, принимаемой из окружения, и высылаемой в него.
            </Text>

            <Text tag="p" size="large" color="accent">
                Аналогии между энергетическим метаболизмом и информационным подтверждает верность известного выражения «психическое несварение»…
            </Text>

            <BlockLink path="/history/aushra" label="Дальше: Аушра Аугустинавичюте" icon="ArrowRightSquare" />
        </>
    );
}
