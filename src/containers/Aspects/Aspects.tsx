import React from 'react';
import styles from './Aspects.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { TextInline } from '../../components/TextInline';
import { getIconName, Icon } from '../../components/Icon';
import { Socionics } from '../../types';
import { ASPECTS, ASPECTS_GROUPS, ASPECTS_LABEL } from '../../constants/aspects';
import { useNavigate } from 'react-router-dom';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';

const AspectCard: React.FC<{ aspect: Socionics.Aspect; onClick: () => void; }> = ({ aspect, onClick }) => {
    const aspectIconMini = getIconName(`aspect-${aspect}-mini`);
    const aspectIcon = getIconName(`aspect-${aspect}`);
    const aspectTitle = ASPECTS[aspect];
    const aspectSubtitle = ASPECTS_LABEL[aspect];

    return (
        <div className={styles.card} onClick={onClick}>
            <Icon name={aspectIconMini} size={24} className={styles['mini-icon']} />
            <Icon color="accent" name={aspectIcon} className={styles['aspect-icon']} size={108} />
            <Text tag="p" size="h4" font="additional" color="accent" className={styles['aspect-title']}>{aspectTitle}</Text>
            <Text color="accent" className={styles.subtitle}>{aspectSubtitle}</Text>
        </div>
    );
};

export default function Aspects() {
    const goTo = useNavigate();

    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>
                    Аспекты
                </Text>
                <AuthorLine text='Читать 3 минуты' iconName='Time'>Виктор Гуленко</AuthorLine>

                <Text tag="p" color="accent" size="h6" className={styles.text}>
                    Одна из восьми составляющих информационного потока, на которые его разделяет психика индивида для ориентации в коммуникативном пространстве.
                </Text>
                <Text tag="p" size="base" className={styles.text}>
                    Необходимость восьмеричного деления информации вытекает из фундаментальной коммуникативной константы — <a href="https://ru.wikipedia.org/wiki/Магическое_число_семь_плюс-минус_два" target="_blank" rel="noreferrer">числа Миллера</a> — именно столько единиц информации способна удерживать оперативная память человека одновременно.
                </Text>

                <Text tag="p" size="base" className={styles.text}>
                    Аспекты принимаются и обрабатываются соционическими функциями. Поэтому эти термины иногда употребляются как синонимы. Упорядоченный набор соционических функций образует соционический тип личности.
                </Text>

                <hr />

                <Text tag="p" size="base" className={styles.text}>
                    Спектр информационных аспектов представляет собой универсальную сетку понятий, при помощи которой поддаются анализу любые интеллектуальные, психологические и социальные явления.
                </Text>

                <Text tag="p" size="base" className={styles.text}>
                    Система соционических функций является логическим завершением учения К. Г. Юнга о четырех не сводимых друг к другу способах отражения окружающего мира человеком — ощущения (сенсорика), мышление (логика), чувства (этика) и интуиция.
                </Text>

                <Text tag="p" size="base" className={styles.text}>
                    Каждая из четырех психологических функций Юнга может проявляться своей экстравертной (активной) и интровертной (пассивной) сторонами. Таким образом, число функций удваивается и мы получаем восемь базовых понятий.
                </Text>

                <hr />

                <div className={styles.blackwhite}>
                    <div className={styles.grower}>
                        <Icon name="Extravertniy" size={48} />
                        <Text tag="p" className={styles.text}>
                            <b>Экстравертный</b>, <br />«черный», <br />объективный
                        </Text>
                        <Text tag="p" size="smaller" className={styles.text}>
                            Сущность аспекта, <br />его свойства
                        </Text>
                    </div>

                    <div className={styles.grower}>
                        <Icon name="Introvertniy" size={48} />
                        <Text tag="p" className={styles.text}>
                            <b>Интровертный</b>, <br />«белый», <br />cубъективный
                        </Text>
                        <Text tag="p" size="smaller" className={styles.text}>
                            Отношения сущностей, <br />сопоставление.
                        </Text>
                    </div>
                </div>

                {
                    ASPECTS_GROUPS.map((item, $a) => {
                        return (
                            <div key={$a} className={styles['aspect-pair']}>
                                <TextInline justify="between" align="baseline" className={styles['macroaspect-title']}>
                                    <Text tag="p" size="h5" font="additional">{item.title}</Text>
                                    <Text>{item.subtitle}</Text>
                                </TextInline>

                                <TextInline align="stretch">
                                    <AspectCard aspect={item.aspects[0]} onClick={() => goTo(item.aspects[0])} />
                                    <AspectCard aspect={item.aspects[1]} onClick={() => goTo(item.aspects[1])} />
                                </TextInline>

                                <hr />
                            </div>
                        );
                    })
                }
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
