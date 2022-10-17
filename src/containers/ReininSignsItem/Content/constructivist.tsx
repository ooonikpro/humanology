import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Constructivist() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Constructivist' back>Конструктивисты</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Регулирует своё эмоциональное состояние, точно воспроизводя чужие переживания либо обращаясь к незавершенным переживаниям из своего прошлого опыта.
            </Text>

            <Text tag="p" className={styles.text}>
                Оттенки внутренних эмоциональных состояний осознаются в подробностях и не стираются с течением времени.
            </Text>

            <Text tag="p" className={styles.text}>
                Важны эмоциональные «якоря», связанные с определенным местом, книгой, фильмом, которые «резонируют» с внутренними эмоциональными состояниями. С их помощью он удерживает или усиливает своё эмоциональное состояние.
            </Text>

            <Text tag="p" className={styles.text}>
                Больше внимания уделяют непосредственно делу, а не установлению отношений. Сначала по делу общаются, а потом переходят на эмоции, установление отношений.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неуравновешенность этики
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Конфликтность, раздражительность, дефицит торможения и контроля чувств, этических оценок, дисфория, повышенная тревожность.
            </Text>

            <Text tag="p" className={styles.text}>
                Дефицит торможения и контроля нервных процессов в эмоционально-этической сфере, сфере чувств, эмоций и этических оценок. В ситуациях общения характерно слабомотивированное переключение знака эмоций, конфликтность, нетерпеливость, раздражительность и вспыльчивость, а также завышенная требовательность.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Легко возникают обиды и разочарования с резкими неадекватными эмоциональными реакциями на неожиданности и, особенно, на внезапные неприятности и неудачи.
            </Text>

            <Text tag="p" className={styles.text}>
                Дисфория, повышенная тревожность — отсюда и плохое настроение, негативность оценок, озабоченность, склонность к застойным неловким переживаниям, совестливости, концентрация внимания на недостатках.
            </Text>

            <Text tag="p" className={styles.text}>
                Нередко наличие навязчивых, трудно контролируемых воспоминаний, преимущественно негативного характера, а также с частым обращением мыслей и фантазий к прошлому.
            </Text>

            <Text tag="p" className={styles.text}>
                Предрасположенность к субдепрессивному фону настроения, к фрустрации и недовольству, склонность к реакциям злобы, ярости и совестливости.
            </Text>

            <Text tag="p" className={styles.text}>
                Ввиду эмоциональной неуравновешенности можно сказать, что любой конструктивист в тенденции —
                донор отрицательных и акцептор положительных эмоций.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Поэтому тенденция — каким-либо способом улучшить своё настроение.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Уравновешенность логики
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Хорошо развиты процессы контроля и торможения, спокойное принятие разных точек зрения на одно явление чуждость догматизма.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошая управляемость логической и отчасти моторной сферой. Обладание высокой пластичностью в ходе исполнения рабочих процессов — умением быстро перестраиваться, менять рабочие привычки, умением «по звонку» прерывать работу и останавливаться, расслабляться и отдыхать.
            </Text>

            <Text tag="p" className={styles.text}>
                Владение процессами контроля при выполнении логических заданий: отмечают, что в работе или при решении задач делают мало ошибок, в письме редко пропускают буквы в словах, их логические цепочки в рассуждениях корректны в коротких звеньях и деталях.
            </Text>

            <Text tag="p" className={styles.text}>
                Развита тонкая координация движений с хорошо представленными процессами контроля и торможения.
                Обычен аккуратный разборчивый почерк с умеренным наклоном и четко прописанными буквами.
            </Text>

            <Text tag="p" className={styles.text}>
                Любят и умеют качественно и быстро выполнять корректуру и редактуру рукописей.
            </Text>

            <Text tag="p" className={styles.text}>
                Чужды догматизма — не очень требовательны к униформе для служащих. Вполне терпимы к чужим логическим доводам. Редко являются сторонниками универсального всеохватывающего порядка. Проще соглашаются на изменение правил. Допускают оправданность различных точек зрения на одно явление.
            </Text>

            <PageBreak iconName='Constructivist'>Конструктивисты</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>

        </div>
    );
}