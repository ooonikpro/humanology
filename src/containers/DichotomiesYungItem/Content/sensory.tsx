import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Sensory() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Sensory' back>Сенсорики</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Обладают конкретным мышлением, которое позволяет им хорошо подмечать детали. Им бывает сложно уловить общую суть, если от их внимания ускользают нюансы.
            </Text>

            <Text tag="p" className={styles.text}>
                Чтобы понять, о чем идет речь, сенсорику требуются увидеть подробности ситуации, из которых он выстраивает общую картину.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Находятся «здесь и сейчас», это реалисты, твердо стоящие на ногах. Заглядывать в будущее или «застревать» в прошлом им не свойственно.
            </Text>

            <Text tag="p" className={styles.text}>
                Прекрасно чувствуют настоящее. В отличие от интуита, сенсорик более собран и сосредоточен на текущих событиях.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Это люди-практики. Они сильны в реализации идей и задумок, именно благодаря им идеи обретают конкретное, материальное очертание в мире.
            </Text>

            <Text tag="p" className={styles.text}>
                Многое из того, что нас окружает, создавалось руками сенсориков.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо чувствуют качества предметов, одежды, пищи. Способны различать малейшие оттенки во вкусах и запахах.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Уверенно организовывают пространство, сильны в вопросах комфорта и эргономики. Они могут почувствовать, что для другого человека будет дискомфортно и сказать ему об этом.
            </Text>

            <Text tag="p" className={styles.text}>
                Не очень хорошо чувствуют время, и поэтому предпочитают ориентироваться по часам. Переживают, если опаздывают, и поэтому могут предпочесть выйти намного раньше, чем необходимо, чтобы прийти точно в срок.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Из-за того, что сенсорики постоянно отслеживают текущий момент, им бывает сложно заглянуть в будущее, и почувствовать возможности, которые несет в себе ситуация.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Обладают конкретным мышлением, хорошо подмечают детали.
                </Text>
                <Text tag="li">
                    Реалисты и практики, твердо стоящие на ногах.
                </Text>
                <Text tag="li">
                    Живут здесь и сейчас.
                </Text>
                <Text tag="li">
                    Доверяют конкретным, проверенным методам.
                </Text>
                <Text tag="li">
                    Успешны в организации пространства и наведении уюта.
                </Text>
                <Text tag="li">
                    Не очень хорошо чувствуют время, и не всегда могут им управлять.
                </Text>
                <Text tag="li">
                    Не всегда видят возможности, варианты решения.
                </Text>
                <Text tag="li">
                    Внимательны к вопросам здоровья, комфорта, хорошо чувствуют физические потребности человека.
                </Text>
            </Text>

            <PageBreak iconName='Sensory'>Сенсорики</PageBreak>

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
        </div>
    );
}