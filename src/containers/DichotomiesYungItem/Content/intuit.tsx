import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Intuit() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Intuit' back>Интуиты</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Мыслят «глобально», у них абстрактное мышление, направленное от общего к частному. Быстро схватывают суть, мало внимания уделяют деталям.
            </Text>

            <Text tag="p" className={styles.text}>
                Теоретики. В их голове постоянно возникают различные идеи, которые, однако, совсем не обязательно будут реализованы. Для них важнее генерация идей, чем воплощение задумок непосредственно в жизнь.
            </Text>

            <Text tag="p" className={styles.text}>
                Часто такие люди в своем сознании опережают настоящее время, и их задумки осуществляются уже позже их потомками. Многое из того, что нас окружает, первоначально было идеей интуитов.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Хорошо видят возможности окружающего мира. Для них естественно продумывать многочисленные варианты и способы, совершая выбор.
            </Text>

            <Text tag="p" className={styles.text}>
                В той или иной мере обладают способностью к предвидению. Они чувствуют, какие подводные камни может таить в себе ситуация, и способны предупредить окружающих о грозящей опасности.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                По-особенному ощущают время. Часы для них – это элемент, искусственно созданный людьми, а время как таковое может не иметь к часам никакого отношения.
            </Text>

            <Text tag="p" className={styles.text}>
                Ощущение времени у интуитов одновременно субъективно и глобально. Они тонко чувствуют подходящий момент, постоянно пребывают в потоке времени, и даже умеют им управлять.
            </Text>

            <Text tag="p" className={styles.text}>
                Обладают хорошо развитым воображением, в мечтах он постоянно «перемещается» то в прошлое, то в будущее.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Находиться «здесь и сейчас» для него сложнее. Поэтому все интуиты немного рассеяны.
            </Text>

            <Text tag="p" className={styles.text}>
                Из-за своей рассеянности интуиты могут быть забывчивы, нерасторопны в быту, невнимательны к своим физическим потребностям.
            </Text>

            <Text tag="p" className={styles.text}>
                Внешний вид их бывает небрежен, а на рабочем месте и дома обычно присутствует «творческий беспорядок».
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Интуиту требуется партнер, который взял бы на себя вопросы, связанные с организацией комфорта и уюта.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Обладают абстрактным мышлением и хорошо развитым воображением.
                </Text>
                <Text tag="li">
                    Успешны в генерации идей.
                </Text>
                <Text tag="li">
                    Прекрасно чувствуют возможности, суть, потенциал.
                </Text>
                <Text tag="li">
                    Исследуют возможные, в том числе и непроверенные методы.
                </Text>
                <Text tag="li">
                    Хорошо чувствуют время, умеют «вписаться в поток».
                </Text>
                <Text tag="li">
                    «Перемещаются» из прошлого в будущее.
                </Text>
                <Text tag="li">
                    Не очень практичны, часто рассеяны и забывчивы.
                </Text>
                <Text tag="li">
                    Бывают невнимательны к своему внешнему виду и своим физическим потребностям.
                </Text>
            </Text>

            <PageBreak iconName='Intuit'>Интуиты</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
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

            <EndPoint />
        </div>
    );
}