import React from 'react';
import styles from './Aspects.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { Icon } from '../../components/Icon';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { DETAIL_CARD_ASPECTS } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';
import { PageTitle } from '../../components/PageTitle';
import { PageBreak } from '../../components/PageBreak';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function Aspects() {

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Square4'>Аспекты</PageTitle>
                <AuthorLine text='Читать 6 минут' iconName='Time'>Виктор Гуленко</AuthorLine>

                <Text tag="p" color="accent" size="h6" className={styles.text}>
                    Одна из восьми составляющих информационного потока, на которые его разделяет психика индивида для ориентации в коммуникативном пространстве.
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    Необходимость восьмеричного деления информации вытекает из фундаментальной коммуникативной константы — <a href="https://ru.wikipedia.org/wiki/Магическое_число_семь_плюс-минус_два" target="_blank" rel="noreferrer">числа Миллера</a> — именно столько единиц информации способна удерживать оперативная память человека одновременно.
                </Text>

                <Text tag="p" size="large" className={styles.text}>
                    Аспекты принимаются и обрабатываются соционическими функциями. Поэтому эти термины иногда употребляются как синонимы. Упорядоченный набор соционических функций образует соционический тип личности.
                </Text>

                <hr />

                <Text tag="p" size="large" className={styles.text}>
                    Спектр информационных аспектов представляет собой универсальную сетку понятий, при помощи которой поддаются анализу любые интеллектуальные, психологические и социальные явления.
                </Text>

                <Text tag="p" size="large" className={styles.text}>
                    Система соционических функций является логическим завершением учения К. Г. Юнга о четырех не сводимых друг к другу способах отражения окружающего мира человеком — ощущения (сенсорика), мышление (логика), чувства (этика) и интуиция.
                </Text>

                <Text tag="p" size="large" className={styles.text}>
                    Каждая из четырех психологических функций Юнга может проявляться своей экстравертной (активной) и интровертной (пассивной) сторонами. Таким образом, число функций удваивается и мы получаем восемь базовых понятий.
                </Text>

                <hr />

                <div className={styles.blackwhite}>
                    <div className={styles.grower}>
                        <Icon name="Extravertniy" size={40} />
                        <span>
                            <Text tag="b" className={styles.text}>
                                Экстравертный, «черный», объективный
                            </Text>
                            <Text tag="p" size="body" className={styles.text}>
                                Сущность аспекта, его свойства
                            </Text>
                        </span>
                    </div>

                    <div className={styles.grower}>
                        <Icon name="Introvertniy" size={40} />
                        <span>
                            <Text tag="b" className={styles.text}>
                                Интровертный, «белый», cубъективный
                            </Text>
                            <Text tag="p" size="body" className={styles.text}>
                                Отношения сущностей, сопоставление.
                            </Text>
                        </span>
                    </div>
                </div>

                <hr />

                <PageBreak>Аспекты</PageBreak>

                {
                    DETAIL_CARD_ASPECTS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
