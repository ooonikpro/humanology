import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Emotions() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectEmotions' back>Эмоции</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Черная этика</Text>
                <Icon name='AspectEmotionsMini' size={24} />
            </div>

            <Icon name="AspectEmotions" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Эмоции
            </Text>

            <Text tag="p" size="h5" color="accent">
                Этика эмоций
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Страсть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Эмоция
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Восторг
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ликование
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Агрессия
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Атмосфера
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Страсть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Настроение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Печаль
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Депрессия
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Вдохновение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Страдание
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Влюбленность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Обожание
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Показывает энергетические состояния человека, весь спектр эмоций. Черная этика обрабатывает информацию относительно энергетических процессов в объектах.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Эмоциональное состояние, восприятие и оценка — все это относится к этике эмоций.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Существование в мире эмоций.
                </Text>
                <Text tag="li">
                    Восприятие и оценка окружающего мира через эмоции.
                </Text>
                <Text tag="li">
                    Умение различать положительные и отрицательные эмоции, их оттенки, стремление к положительным эмоциям, хорошему настроению.
                </Text>
                <Text tag="li">
                    Пребывание в эмоциональных состояниях, переживания, радость или печаль, драматизм или комизм.
                </Text>
                <Text tag="li">
                    Энтузиазм, впечатлительность, эмоциональный комфорт.
                </Text>
                <Text tag="li">
                    Восприятие звуков как характеристики различных эмоциональных состояний и интенсивности процессов.
                </Text>
            </Text>

            <hr />

            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Положительные эмоции, радость, веселье, эмоциональный подъём, воодушевление, улыбка, смех, энтузиазм, оптимизм, хорошее настроение, переживание счастья.
                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Отрицательные эмоции, горе, печаль, грусть, эмоциональный спад, депрессия, плач, слезы, недовольство, пессимизм, плохое настроение, переживание несчастья.
                </Text>
            </div>


            <PageBreak>Эксперты этики эмоций</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}
