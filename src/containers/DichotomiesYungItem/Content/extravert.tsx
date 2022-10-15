import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Extravert() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Extravert' back>Экстраверт</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Видит себя как часть этого мира. Мир — огромный и разнообразный, а экстраверт в нем — одна из многочисленных маленьких частичек.
            </Text>

            <Text tag="p" size="h5" className={styles.text}>
                Внимание экстраверта обращено вовне — на людей, вещи, факты и события.
            </Text>

            <Text tag="p" className={styles.text}>
                Ему интересно все, что происходит во внешнем мире. Интересны объекты этого мира, как таковые, даже если они не имеют к экстраверту непосредственного отношения.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Он всегда в курсе внешней ситуации и обычно приносит самые свежие новости. Ориентирован на мнение окружающих. Это не значит, что он не имеет собственного, однако общественное мнение для него важно.
            </Text>

            <Text tag="p" className={styles.text}>
                Восстанавливает энергию, когда общается, взаимодействует с внешним миром. Он гораздо лучше разбирается в других людях, чем в себе самом.
            </Text>

            <Text tag="p" className={styles.text}>
                Собственные чувства или потребности понимает хуже, чем потребности окружающих его людей.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ему не сложно встать на чужую точку зрения, посмотреть на ситуацию и на себя со стороны.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Любопытны, интересуются всем, что происходит в мире.
                </Text>
                <Text tag="li">
                    Не склонны углубляться в детали, продумывать мелочи.
                </Text>
                <Text tag="li">
                    Более «легки на подъем» в общении с новыми, незнакомыми людьми. Командные игроки.
                </Text>
                <Text tag="li">
                    Для них важно мнение окружающих, с интересом слушают, когда им рассказывают про них самих.
                </Text>
                <Text tag="li">
                    Энергию черпают из внешнего мира.
                </Text>
                <Text tag="li">
                    Им требуется совершить некоторое усилие, чтобы осознать свои внутренние потребности.
                </Text>
                <Text tag="li">
                    Хорошо понимают нужды и потребности окружающих.
                </Text>
                <Text tag="li">
                    Жесты экстравертов более широкие, размашистые, «от плеча». Открытые позы.
                </Text>
                <Text tag="li">
                    Взгляд выдает присутствие во внешнем мире, направлен вовне, переключается с объекта на объект.
                </Text>
            </Text>

            <PageBreak iconName='Extravert'>Экстраверты</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}