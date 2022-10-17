import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Process() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Process' back>Процессоры</PageTitle>

            <AuthorLine text='Читать 3 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Больше внимания уделяют самому процессу.
            </Text>

            <Text tag="p" className={styles.text}>
                Им важно не отвлекаться, быть сконцентрированными, работать над одним делом долгое время, при этом, получив действительно значимый результат. Погружаются в процесс и зависают в нем, негативно реагируя на попытки отвлечь.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Долгий вход в процесс, более длительный процесс и долгий выход из процесса.
            </Text>

            <Text tag="p" className={styles.text}>
                Склонны отшлифовывать, усовершенствовать, доделывать (в отличие от «доделать»). Это не значит, что будет доведено до блеска, им просто сложно расстаться с процессом
            </Text>

            <Text tag="p" className={styles.text}>
                Иногда затягивают время, «вязнут», создается впечатление, что у них «в запасе вечность», т.к. жизнь они воспринимают скорее как непрерывный процесс
            </Text>

            <Text tag="p" className={styles.text}>
                Не любят революций: резких перемен. Жалеют, что книга, которую читали, закончилась. В игре больше нравится сам процесс игры.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Олицетворяют себя со своей деятельностью.
            </Text>

            <Text tag="p" className={styles.text}>
                Нет задачи завершить дело, подвести итоги: они в первую очередь прорабатывают все этапы на пути к цели. Могут работать над одним важным проектом всю свою жизнь.
            </Text>

            <Text tag="p" className={styles.text}>
                Предложения длинные, интонации растянутые.
            </Text>

            <PageBreak iconName='Process'>Процессоры</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
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

        </div>
    );
}