import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';


export default function Static() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Static' back>Статики</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Статический подход характерен для анализа явления, для подробного изучения его свойств.
            </Text>

            <Text tag="p" className={styles.text}>
                Опора на постоянные, неизменные характеристики объекта, ситуации.
            </Text>

            <Text tag="p" className={styles.text}>
                В своих проявлениях более статичны, у них меньше движений, жестикуляции. Они более склонны к наблюдению, анализу.
            </Text>

            <Text tag="p" className={styles.text}>
                Обращают внимание на постоянные, длительно присущие людям и их отношениям свойства: их установки на отношения с людьми, на социальный статус, а также врожденные способности, привычки.
            </Text>

            <Text tag="p" className={styles.text}>
                Темп речи — равномерный, с поддержанием стартовой громкости, независимо от уровня в децибелах, с четкими переключениями (и громкости, и темпа) или, наоборот, с плавными медленными, на протяжении нескольких фраз, спадами и подъемами. Описания отдельными разрозненными эпизодами. При вопросе замирают.
            </Text>

            <Text tag="p" className={styles.text}>
                Долго спокойно сидят неподвижно, смена поз чёткая. Движется либо верхняя, либо нижняя часть тела, выражение лица долго не меняется, при ходьбе плечи неподвижны.
            </Text>

            <PageBreak iconName='Static'>Статики</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}