import styles from '../ClubsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Scientific() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Scientific' back>Исследователи</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Настоящая соционика</AuthorLine>
            <div className={styles.clubBlock}>
                <div>
                    <Icon name="Scientific" color="accent" size={96} />
                </div>
                <div className={styles.clubTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Исследователи
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Интуиты
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Логики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Демократы
                </Text>
            </div>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Наука
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Инновационный бизнес
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Предпринимательство
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Современные производства
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Компьютеры
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Техника
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Развитое абстрактное мышление.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Моделируют мир, хорошо видят его грани и возможности, явные и неявные, генерируют идеи и объективно их оценивают.
            </Text>

            <Text tag="p" className={styles.text}>
                «Место под солнцем» завоевывают работой ума.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Отлично умеют произвести расчеты, поставить эксперимент, обосновать закономерности.
            </Text>

            <Text tag="p" className={styles.text}>
                Подчеркивают свою беспристрастность, верность делу, увлеченность, эффективность действий и нестандартность подхода.
            </Text>

            <Text tag="p" className={styles.text}>
                Специалисты по разъяснению сложной информации и генерации идей. Незаменимы, когда требуются точные расчеты, новые методики, обобщение опыта, находчивость, изобретательность и непредвзятость суждений.
            </Text>

            <Text tag="p" className={styles.text}>
                Находят себя в науке, неконсервативном бизнесе, частной предпринимательской деятельности, современном производстве. Многие увлекаются техникой, компьютерами, любят интеллектуальные игры, развивают кругозор, очень любознательны.
            </Text>

            <hr />

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}