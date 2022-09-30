import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';

export default function People() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectPeople' back>Люди</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Белая этика</Text>
                <Icon name='AspectPeopleMini' size={24} />
            </div>

            <Icon name="AspectPeople" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Люди
            </Text>

            <Text tag="p" size="h5" color="accent">
                Этика отношений
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Отношения
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Любовь
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ненависть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Симпатия
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Антипатия
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Душевность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сочувствие
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Привязанность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Дружба
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Вражда
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Открытость
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Уважение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Родина
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Показывает связи между объектами. Отношения между людьми, симпатии, антипатии, любовь и ненависть — все это относится к белой этике.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Способность устанавливать и поддерживать отношения, оценивать их и видеть отношения других людей.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Существование в среде чувств, отношений, симпатий и антипатий.
                </Text>
                <Text tag="li">
                    Восприятие окружающего через те чувства которые оно вызывает.
                </Text>
                <Text tag="li">
                    Способность различать отношения и улавливать их оттенки.
                </Text>
                <Text tag="li">
                    Переживание различных отношений любовь-ненависть, симпатия-антипатия, расположение-неприязнь, восхищение.
                </Text>
            </Text>

            <hr />

            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Хорошие отношения, любовь, дружба, симпатия, притяжение, теплота отношений, общительность, близкая психологическая дистанция, добро, жалость.
                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Плохие отношения, ненависть, вражда, антипатия, отталкивание, холодность отношений, отчужденность, необщительность, далекая психологическая дистанция, зло, безжалостность.
                </Text>
            </div>


            <PageBreak>Эксперты этики отношений</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <EndPoint />
        </div>
    );
}
