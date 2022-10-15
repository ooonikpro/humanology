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

export default function Cups() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Cups' back>Кубки</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Боевая соционика</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Cups" color="accent" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Кубки
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Утешение
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Иррационалы
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Этики
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Эмотивисты
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.earthText}>
                Вдохновение, мотивация, энергетическое подкрепление и дружеское участие
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Создают общение. Как вино разливается в чаше, так и они заполняют любую ситуацию потоком эмоций.
            </Text>

            <Text tag="p" className={styles.text}>
                Оживляют собой любую социальную среду, привнося туда стихию эмоционального веселья или скандала.
            </Text>

            <Text tag="p" className={styles.text}>
                Главное чтобы эмоции переливались.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Своим присутствием они постоянно раскачивают любую среду вокруг себя.
            </Text>

            <Text tag="p" className={styles.text}>
                Переливая эмоции из чаши в чашу, они окрыляют сердца других своими сказками и мечтами, вдохновляя на свершения и движуху.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Или играя эмоциональными окрасками сплетают сети интриг между людьми.
            </Text>

            <Text tag="p" className={styles.text}>
                Творческая этика (вторая функция) позволяет им эмоционально и очень чувственно рассказывать любые сказки (третья функция).
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Вливая эти сказки в уши других людей и наполняя их сердца потоком разнообразных чувств и эмоций.
            </Text>

            <PageBreak iconName="Cups">Кубки</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}