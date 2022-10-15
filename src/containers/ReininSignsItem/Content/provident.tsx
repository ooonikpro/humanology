import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Provident() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Provident' back>Предусмотрительные</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Низкосигнальная интуиция
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Легкая возбудимость, беспокойство, фантазирование. Не любят риск. Симптомы галлюцинаций, слышат воображаемые звуки, голоса.
            </Text>

            <Text tag="p" className={styles.text}>
                Интуиция высокочувствительна, легко возбудима. Несколько болезненное, с оттенком легко вспыхивающего беспокойства, фантазирование. Часто в голове возникают воображаемые голоса, которые трудно прогнать и заглушить. В шуме падающей воды им нередко слышится иллюзия чьих-то голосов.
            </Text>

            <Text tag="p" className={styles.text}>
                И в игре, и в жизни предпочитают надежные и нерискованные ставки. Занижая планку надежд — им нет нужды стимулировать свою интуицию риском и стрессом. Она в силу высокой чувствительности и в обычном состоянии у них достаточно перевозбуждена и даже перепугана.
            </Text>

            <Text tag="p" className={styles.text}>
                Характерны симптомы иллюзий и псевдогаллюцинаций (зрительных и слуховых), отражающих повышенную чувствительность внутренней интуитивной сферы. Умеют обнаруживать необычное и интересное в самом, на первый взгляд. обыденном. Легко провоцируются воспоминания, тревожные мысли.
            </Text>£

            <Text tag="p" className={styles.text}>
                Мгновенно подмечают любые отклонения в картине мира от «обычности». Сравнение видимого объекта с внутренним эталоном в поиске отличий требует не чувствительности сенсорным деталям, а чувствительности к деталям внутреннего эталона, интуиции.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо чувствуют время, умеют правильно распределять в нем работу, сортировать дела по срочности. уверенно себя ощущают в цейтнотных ситуациях.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Высокосигнальная сенсорика
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Невнимательность к мелким деталям, любят громкие звуки, яркие цвета, устойчивость к боли, слабая переносимость монотонной работы.
            </Text>

            <Text tag="p" className={styles.text}>
                Высокосигнальность сенсорики проявляется, в частности, в сенсорной невнимательности к мелким деталям. Пропускают в письме случайно сделанные описки, ненаблюдательны к деталям окружающего (все дома на улице для них на одно лицо). Из-за той же ненаблюдательности к деталям, могут заплутать в городе или в лесу.
            </Text>

            <Text tag="p" className={styles.text}>
                Любят слушать видео при повышенной громкости. дискомфортной для других присутствующих. Хотя глуховатыми их не назовешь. Любовь к ярким и резким внезапным сдвигам в восприятии. Велика устойчивость к боли, слабая переносимость монотонной в сенсорном отношении работы.
            </Text>

            <Text tag="p" className={styles.text}>
                Умеют фильтровать зрительный поток, игнорируя наибольшую часть поступающей информации, подстерегая только нужные моменты.
            </Text>

            <Text tag="p" className={styles.text}>
                Поэтому их зрительный мир состоит из множества в основном типовых объектов, и по причине люди порой кажутся им манекенами, а все окружающее — обыденным, плоским и нереальным, нередко странно искаженным из-за дефицита зрительной информации о деталях.
            </Text>

            <PageBreak iconName='Provident'>Предусмотрительные</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}