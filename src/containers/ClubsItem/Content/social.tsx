import styles from '../ClubsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Social() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Social' back>Социалы</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Настоящая соционика</AuthorLine>
            <div className={styles.clubBlock}>
                <div>
                    <Icon name="Social" color="accent" size={96} />
                </div>
                <div className={styles.clubTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Социалы
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Сенсорики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Этики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Демократы
                </Text>
            </div>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Дизайн
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Медицина
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Торговля
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Реклама
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    PR
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Сфера услуг
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Политика
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Экономика
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Право
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Развитое конкретное мышление.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Хорошо видят материальную и социальную реальность, умеют как управлять людьми, так и договариваться с ними, хорошо понимают и генерируют эмоции, ориентированы на всё конкретное, материальное и осязаемое.
            </Text>

            <Text tag="p" className={styles.text}>
                Опираются на коллективное взаимодействие, на общение. По возможности переводят производственные проблемы в сферу неформальных взаимодействий и отношений.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Стараются любую работу сделать приятной, легкой, а окружающее пространство — удобным и комфортным.
            </Text>

            <Text tag="p" className={styles.text}>
                Добиваются бонусов на службе, устраивая для коллектива праздники, занимаясь общественной работой и выполняя неформальные поручения начальства; очень чутки к повседневным нуждам людей.
            </Text>

            <Text tag="p" className={styles.text}>
                Незаменимы, когда требуется обустройство и оформление быта, информация о покупках, ценах, притирка к окружению, умиротворение, предотвращение конфликтов.
            </Text>

            <Text tag="p" className={styles.text}>
                Обычно «подкованы» в медицине, кулинарии, уходе за животными.
            </Text>

            <hr />

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}