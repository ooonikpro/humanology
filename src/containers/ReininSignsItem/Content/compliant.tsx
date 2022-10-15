import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Compliant() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Compliant' back>Уступчивые</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Низкосигнальная этика
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Слишком высокая чувствительность, предпочтение далекой дистанции общения, тенденция «делать из мухи слона», романтизм, склонность к идеализации.
            </Text>

            <Text tag="p" className={styles.text}>
                Они стремятся к эмоциональному общению на дальней дистанции, избегают короткой дистанции, при которой интенсивность эмоциональных сигналов возрастает, следят, чтобы при разговоре .к ним не приближались слишком близко. Часто делают, что называется, «из мухи — слона».
            </Text>

            <Text tag="p" className={styles.text}>
                Избегают любых эмоциональных «переборов»: болезненно реагируют на лесть, неважно себя чувствуют в эмоционально-шумном обществе.
            </Text>

            <Text tag="p" className={styles.text}>
                Крайне редко громко смеются или хохочут, равно для них нетипичны рыдания и истерика.
            </Text>

            <Text tag="p" className={styles.text}>
                Романтичны в чувствах, склонны к идеализации людей. Неадекватное усиление объективно слабых, эмоциональных признаков объектов.
            </Text>

            <Text tag="p" className={styles.text}>
                В любой ситуации эмоционального общения или оценки предпочитают лучше малое, чем большое. Лучше часть, чем целое. Лучше отдельного человека, чем толпу.
            </Text>

            <Text tag="p" className={styles.text}>
                Легко находят «общий язык» с людьми любой культуры. Есть тенденция повышенного влечения к болезненным ощущениям, к самоуничижительным переживаниям, легко возникающим чувством вины.
            </Text>

            <Text tag="p" className={styles.text}>
                Не любят, когда им заглядывают с в книгу через плечо, не переносят, когда их берут за пуговицу.
            </Text>

            <Text tag="p" className={styles.text}>
                Частое тревожно-двигательное беспокойство. Склонность выдавать сильные ответы о (возбуждение, тревога, паника) на эмоционально слабые внутренние стимулы.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Высокосигнальная логика
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Ставка на подавление и игнорирование деталей, предпочтение крупных проектов и масштабных задач стремление принимать ответственные решения.
            </Text>

            <Text tag="p" className={styles.text}>
                Стремятся упростить, прояснить и обобщить логическую ситуацию, охотно принимают на себя главную логическую ответственность, упрямы, конфликтны и бескомпромиссны в спорах на принципиальные темы, но обычно уступчивы в логических деталях.
            </Text>

            <Text tag="p" className={styles.text}>
                Делает ставку на подавление и игнорирование всех деталей, на одномоментное «рентгеновское» видение обобщенного контура основной закономерности, предпочитает сам принимать ответственное решение.
            </Text>

            <Text tag="p" className={styles.text}>
                Имея сильную логическую возбудимость, «уступчивые» порой начинают произносить вслух фразу, еще не зная, чем ее закончат — «упрямые» всегда заранее знают ее предстоящее окончание.
            </Text>

            <Text tag="p" className={styles.text}>
                В деловом отношении «уступчивому» нравится руководить масштабной стройкой века, в групповой тенденции предпочитают власть открытую и ответственную.
            </Text>

            <Text tag="p" className={styles.text}>
                Специалисты по сильным, интенсивным моторно-логическим сигналам, охотно берутся за задачи глобальной бюрократической организации, организуют документооборот на большом предприятии, способны ухватиться сразу за много логических задач.
            </Text>

            <Text tag="p" className={styles.text}>
                Предпочитают среду интенсивных, масштабных структурно-логических стимулов: мечтают сразу о наивысших ступеньках своей будущей карьеры.
            </Text>

            <PageBreak iconName='Compliant'>Уступчивые</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}