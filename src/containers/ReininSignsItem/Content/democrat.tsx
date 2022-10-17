import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Democrat() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Democrat' back>Демократы</PageTitle>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" className={styles.text}>
                Воспринимают людей скорее с точки зрения их индивидуальных качеств, чем с точки зрения их принадлежности некоторой группе.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Могут нарушать субординацию, иногда специально, чтобы показать, что главное — личные качества человека.
            </Text>

            <Text tag="p" className={styles.text}>
                Предпочитают неформальные, неофициальные отношения.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Строят отношения с людьми независимо от их социального положения. Важнее личные качества человека.
            </Text>

            <Text tag="p" className={styles.text}>
                Считают, что люди изначально равны между собой. Если «лестница» присутствует, то она не одна, их несколько, и один и тот же человек может быть поставлен выше или ниже, в зависимости от контекста.
            </Text>

            <Text tag="p" className={styles.text}>
                Могут и руководителя «воспитывать», «открывать дверь ногой» в кабинет к начальству.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Индивидуалисты. Свободная конкуренция. «Свобода, равенство, братство», «Кошка гуляет сама по себе», «Не трогайте меня, дайте спокойно заниматься своим делом».
            </Text>

            <Text tag="p" className={styles.text}>
                Принцип горизонтальной коммуникации, то есть общения на равных. Партнёр по коммуникации как бы ставится рядом, а не сверху или снизу.
            </Text>

            <Text tag="p" className={styles.text}>
                Соответственно отсутствуют и характерные для аристократов атрибуты субординации. Вместо власти вышестоящего, демократы организуют координацию между субъектами одного уровня.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                В научных дискуссиях демократичны, открыты. Уровень интеллекта — вот критерий, которым они пользуются, когда дают свои оценки человеку.
            </Text>

            <PageBreak iconName='Water'>Водная квадра</PageBreak>

            <Text tag="p" className={styles.text}>
                В <mark className={styles.water}>водной</mark> квадре межличностные контакты максимально неформальны, титулы и звания имеют очень малый вес.
            </Text>

            <Text tag="p" className={styles.text}>
                Ориентированы на текущий момент. Традиции прошлого для них малозначимы, а будущее их волнует только самое ближайшее.
            </Text>

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

            <hr />

            <PageBreak iconName='Air'>Воздушная квадра</PageBreak>

            <Text tag="p" className={styles.text}>
                В <mark className={styles.air}>воздушной</mark> квадре горизонтальное общение также является делом само собой разумеющимся, но порой переходящая границы фамильярность <mark className={styles.water}>водной</mark> квадры её шокирует.
            </Text>

            <Text tag="p" className={styles.text}>
                Здесь нет такого индивидуализма, демократия не используется в ней для выпячивания своих отклонений от общественной нормы.
            </Text>

            <Text tag="p" className={styles.text}>
                Нет борьбы ущемленных меньшинств за свои права по той простой причине, что их никто не ущемляет,  да они и не образуются при гармоничном образе жизни.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Демократия понимается как разумное следование законам природы.
            </Text>

            <Text tag="p" className={styles.text}>
                <mark className={styles.air}>Воздушная</mark> квадра существует вне времени как одна большая семья. Находится в таком «коконе» очень комфортно, но и в то же время опасно: агрессия извне его может разрушить.
            </Text>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}