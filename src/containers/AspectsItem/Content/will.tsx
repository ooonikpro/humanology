import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';

export default function Will() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectWill' back>Воля</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Черная сенсорика</Text>
                <Icon name='AspectWillMini' size={24} />
            </div>

            <Icon name="AspectWill" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Воля
            </Text>

            <Text tag="p" size="h5" color="accent">
                Волевая сенсорика
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Характер
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сопротивление
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сила
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Физическая сила
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Власть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Управление
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Территория
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Пространство
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Конкуренция
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Захват
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Союз
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Соратник
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Охрана границ
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Несет информацию относительно территории, пространства, власти, лидерства, воли человека.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Умение управлять и вести за собой, следить за границами личного пространства и охранять чужие границы — это все относится к черной сенсорике.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Способность концентрировать внимание на предметах, легко схватывая их внешние качества и отмечая детали.
                </Text>
                <Text tag="li">
                    Восприятие внешних форм, оценка эстетики объекта и наслаждение его красотой.
                </Text>
                <Text tag="li">
                    Умение искать и ставить цели в отношении объектов.
                </Text>
                <Text tag="li">
                    Манипуляция объектами, управление ими посредством силового (иногда физического) давления. Проявление агрессивности.
                </Text>
                <Text tag="li">
                    Ощущение власти над объектами, умение подчинить их своим целям.
                </Text>
                <Text tag="li">
                    Состояние мобилизованности, умение мобилизовать других людей, сила воли.
                </Text>
                <Text tag="li">
                    Физическая сила, активность, настойчивость и упорство в преодолении препятствий, иногда упрямство.
                </Text>
            </Text>

            <hr />

            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Удержание власти, неподчинение, защита, оборона, ответный удар, контратака, твёрдость, отстаивание своих интересов, волевое давление снизу вверх, сила, воля, обладание.
                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Захват власти, подчинение, нападение, агрессия, атака, инициатива, настойчивость, требовательность, волевое давление сверху вниз, утверждение своих интересов за счёт других, свержение, слабость, безволие, овладение.
                </Text>
            </div>


            <PageBreak>Эксперты волевой сенсорики</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <EndPoint />
        </div>
    );
}
