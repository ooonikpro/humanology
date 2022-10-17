import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Objective() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Objective' back>Объективные</PageTitle>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" className={styles.text}>
                Другое название — Серьезные.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Считают собственные понятия и суждения верными только в том случае, если они не противоречат общедоступным и общепринятым знаниям.
            </Text>

            <Text tag="p" className={styles.text}>
                Опора в суждениях на объективные закономерности, общепринятые концепции. Любят подтверждать слова объективными знаниями, чаще ссылаются на авторитетные источники.
            </Text>

            <Text tag="p" className={styles.text}>
                Очень любят поговорить об отношениях и выяснять их. Чаще можно услышать откровенные разговоры о чувствах любви или ненависти. Здесь легче и чаще признаются в любви.
            </Text>

            <Text tag="p" className={styles.text}>
                Эмоции стараются проявлять «к месту», то есть на работе они серьезные и не отвлекаются на шутки, а во время корпоратива веселятся «на полную катушку».
            </Text>

            <Text tag="p" className={styles.text}>
                При коммуникации партнеры пользуются общепринятой системой понятий и оценок.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Для интенсивного общения требуется поэтапное сближение.
            </Text>

            <Text tag="p" className={styles.text}>
                Представлены восходящим спиральным потоком «из реальности» — <mark className={styles.water}>водной</mark> и <mark className={styles.earth}>земной</mark> квадрой.
            </Text>

            <PageBreak iconName='Objective'>Объективные</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}