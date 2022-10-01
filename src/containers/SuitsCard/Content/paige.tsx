import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Paige() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Paige' back>Пажи</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Paige" color="air" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" className={styles.airText}>
                        Пажи
                    </Text>
                    <Text tag="p" size="h6" className={styles.airText}>
                        Самодостаточность
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Интроверты
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Интуиты
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Предусмотрительные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.airText}>
                Как бы замкнуты на себя, зачастую — самодостаточны. Они постоянно в учении. Их роли обычно пассивны — активные действия в больших дозах лишают их сил.
            </Text>

            <Text tag="p" className={styles.text}>
                Неосознанно предпочитают, чтобы ими кто-то руководил.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Самое важное для них — заниматься тем, что интересно и значимо лично для них, в привычном для них ритме, чтобы их никто не торопил.
            </Text>

            <Text tag="p" className={styles.text}>
                У этих социотипов очень богатый внутренний мир, для них важно постоянная работа над собой, ради этого они готовы тратить свои силы.
            </Text>

            <Text tag="p" className={styles.text}>
                Их работа обязательно должна быть связана с интересующими их идеями, проблемами, задачами, тогда они будут работать с интересом и хорошими результатами.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Конкуренция на работе их не интересует, это как правило скромные труженики, но надо признать, что представители именно этой группы разрабатывают самые глубокие теории и идеи.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Внимательны к глубинным вопросам.
                </Text>
                <Text tag="li">
                    Стремятся к совершенствованию своих знаний и компетенции.
                </Text>
                <Text tag="li">
                    Увлеченно ищут, собирают ценную информацию в интересующей их области.
                </Text>
                <Text tag="li">
                    Сводят знания в единое целое.
                </Text>
                <Text tag="li">
                    «Вечные ученики».
                </Text>
                <Text tag="li">
                    Готовы делиться знаниями.
                </Text>
            </Text>

            <hr />

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}