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

export default function Time() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectTime' back>Время</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Белая интуиция</Text>
                <Icon name='AspectTimeMini' size={24} />
            </div>

            <Icon name="AspectTime" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Время
            </Text>

            <Text tag="p" size="h5" color="accent">
                Интуиция времени
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Событие
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Изменение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Перемена
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Опоздание
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Тенденция
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Предсказание
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Цикличность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Прогноз
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Прошлое
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Будущее
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Повторение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Этап
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Несет информацию о времени, об изменениях в мире, о цикличности явлений, о событиях, происходящих во времени.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Белая интуиция показывает отношения между событиями, которое характеризуется временем.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Существование в мире представлений, образов, воспоминаний и фантазий.
                </Text>
                <Text tag="li">
                    Восприятие происходящего через отзвук реальных событий во внутреннем состоянии.
                </Text>
                <Text tag="li">
                    Оценка окружающего мира через соответствие реальных событий внутреннему состоянию по возникающим представлениям и их гармонии.
                </Text>
                <Text tag="li">
                    Способность проникать во внутренний мир других людей, изучение интересов и проблем, которые их занимают.
                </Text>
                <Text tag="li">
                    Способность различать оттенки внутренних состояний.
                </Text>
                <Text tag="li">
                    Ощущение ритма происходящего, темпа событий, ощущение степени созвучности поведения и взглядов окружающих, чувство заполненности своего и чужого времени.
                </Text>
                <Text tag="li">
                    Представление возможных ситуаций (и невозможных тоже), своего места в них, предчувствие.
                </Text>
            </Text>

            <hr />

            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Будущее, изменение ситуации во времени, предсказание, предвидение, постепенное развитие, эволюция, восхождение, динамика перемен, временной поток, воображение, непротиворечивое описание, не завистные перемены, шаг за шагом, схождение, конвергенция.
                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Прошлое, учет ошибок, избегание опасности, тревожность, смутное чувство, предупреждение, назревание кризиса, революция, скачек во времени, умение застраховаться от неприятностей, резкие сдвиги, противоречивость, момент решительных действий, расхождение, дивергенция.
                </Text>
            </div>


            <PageBreak>Эксперты интуиции времени</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}
