import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

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

            <Text tag="b" size="h6" color="accent" className={styles.text}>
                Эксперты этики эмоций
            </Text>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <EndPoint />
        </div>
    );
}
