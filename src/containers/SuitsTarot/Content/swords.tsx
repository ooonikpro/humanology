import styles from '../SuitsTarot.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Swords() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Swords' back>Мечи</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Боевая соционика</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Swords" color="accent" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Мечи
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Прогресс
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Иррационалы
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Логики
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Конструктивисты
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.earthText}>
                Действия для воплощения идеи в материю.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Занимаются расширением границ социума. Завоеванием новых земель. Отвоевыванием у хаоса новых знаний и технологий.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом они не обременены лишними морально-этическими ограничениями.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Порой в азарте завоевания нового они на корню сжигают старое, опрокидывая устоявшиеся законы и традиции, совершая революционные перевороты в социуме.
            </Text>

            <Text tag="p" className={styles.text}>
                Представлены иррациональными логиками.
            </Text>

            <Text tag="p" className={styles.text}>
                Их меч — это сильная творческая логика (вторая функция), которой они рассекают и разделяют все и вся.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Добывают технологии и знания, чтобы получить признание других людей (третья функция).
            </Text>

            <Text tag="p" className={styles.text}>
                Жесткие технологи, прогрессоры. Прометеи добывающие огонь для других, порой ценой собственной жизни.
            </Text>

            <PageBreak iconName='Swords'>Мечи</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}