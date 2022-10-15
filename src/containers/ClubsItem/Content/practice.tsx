import styles from '../ClubsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Practice() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Practice' back>Практики</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Настоящая соционика</AuthorLine>
            <div className={styles.clubBlock}>
                <div>
                    <Icon name="Practice" color="accent" size={96} />
                </div>
                <div className={styles.clubTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Практики
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Сенсорики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Логики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Аристократы
                </Text>
            </div>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Наука
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Бизнес
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Предпринимательство
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Производство
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Техника
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Интеллектуальные игры
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Развитое конвергентное мышление.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Объективны, хорошо понимают причинно-следственные связи, моделируют окружающий мир, управляют им и контролируют его ресурсы.
            </Text>

            <Text tag="p" className={styles.text}>
                Очень организованны, оценивают только реальность.
            </Text>

            <Text tag="p" className={styles.text}>
                Умеют жестко абстрагироваться от всего, что не содействует продвижению к цели прямо или косвенно.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Фантазиям не предаются, принимают во внимание исключительно факты.
            </Text>

            <Text tag="p" className={styles.text}>
                Занимаются делами, которые гарантируют материальную прибыль. Ценят личный опыт, уважают звания и регалии.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Очень хороши, когда требуется физическая сила, здравый смысл или волевой напор.
            </Text>

            <PageBreak iconName="Practice">Практики</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
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