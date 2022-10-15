import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Lady() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Lady' back>Дамы</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Lady" color="earth" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" className={styles.earthText}>
                        Дамы
                    </Text>
                    <Text tag="p" size="h6" className={styles.earthText}>
                        Благосостояние
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Интроверты
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Сенсорики
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Беспечные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.earthText}>
                Важными стимулами являются хорошее материальное положение, комфортные условия работы.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом в работе для них важно постоянство — неизменный круг общения, постоянные, привычные обязанности.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                От своей работы они ждут стабильной заработной платы, уверенности в завтрашнем дне.
            </Text>

            <Text tag="p" className={styles.text}>
                За счет этих социотипов формируется так называемый «средний класс».
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Еще Аристотель писал, что средний класс — основа стабильности любого общества.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Если средний класс достаточно многочисленный и доволен своим материальным положением и жизнью в целом, такому обществу удается избежать конфликтов и социальных потрясений.
            </Text>

            <Text tag="p" className={styles.text}>
                Предпочитают отвечать за порядок в конкретном, но ограниченном пространстве — во дворце, на отдельном хуторе. Причем, такого порядка, как они его понимает.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не стремятся распространить свою власть до бесконечности, стремятся удержать то, что у них есть.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Очень внимательны к качеству ощущений.
                </Text>
                <Text tag="li">
                    Ценят стабильность, комфорт.
                </Text>
                <Text tag="li">
                    Стремятся к уверенности в завтрашнем дне.
                </Text>
                <Text tag="li">
                    Обустраивают свою территорию.
                </Text>
                <Text tag="li">
                    Воспитывают и перевоспитывают.
                </Text>
                <Text tag="li">
                    Проявляют заботу о тех, кто рядом.
                </Text>
            </Text>

            <PageBreak iconName="Lady">Дамы</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
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