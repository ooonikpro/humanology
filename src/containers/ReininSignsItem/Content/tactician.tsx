import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Tactician() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Tactician' back>Тактики</PageTitle>
            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Имеют склонность к немедленной помощи в виде советов.
            </Text>

            <Text tag="p" className={styles.text}>
                Фиксируют своё внимание на текущей ситуации, ближайших действиях, актуальном выборе, настроены в большей степени на путь, последовательность действий, а не на цель, которой он мог бы привести.
            </Text>

            <Text tag="p" className={styles.text}>
                Цель ограничивает их со всех сторон. Но по ходу направления, в котором они движутся, может изменяться.
            </Text>
            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неуравновешенность интуиции
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Избыточность и масштабность интуитивных образов, тенденция выдавать желаемое за действительное, собственная жизнь мыслей, их неуправляемость.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Чрезмерная избыточность, масштабность и размах интуитивных образов. Мечты и фантазии чаще — негативного свойства, а также напряженные неприятные ожидания и предвидения. Избыток абстрактных обобщений в объяснениях, тенденция выдавать желаемое за действительное, склонность о своих предположениях говорить как о состоявшихся фактах.
            </Text>

            <Text tag="p" className={styles.text}>
                Трудность актуализации воображения «заданных» образов, приверженность эзотерике. Масштабность
                идей и фантазий с готовностью все детали и частности доверять другим исполнителям. Тут и готовность заниматься чем-либо из одного любопытства, не получая от этого никакого результата.
            </Text>

            <Text tag="p" className={styles.text}>
                Трудность последовательного и направленного интуитивного мышления («собственная жизнь» мыслей,
                их неуправляемость, скачки мыслей, идей, «мысли как блохи скачут»). Тревожно-озабоченная интуиция
                при рабской послушности и узкой направленности взглядов на мир приводит их порой в ряды религиозных и политических фанатиков.
            </Text>

            <Text tag="p" className={styles.text}>
                Высокое качество апперцепции, согласие с утверждениями «Обычно я мгновенно, на автомате понимаю смысл и значение ситуации, в которой оказываюсь», либо «человек еще ничего не сказал, а я уже догадываюсь, какие у него мысли в голове».
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Уравновешенность сенсорики
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Хороший контроль и торможение; влечений и физических желаний, управляемость и подчиненность сенсорного внимания.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Хороший контроль и торможение влечений и физических желаний: сексуальных, пищевых, жажды, а также отсутствие вообще каких-то явно выделяющихся, навязчивых и подавляющих, неадекватно доминантных потребностей.
            </Text>

            <Text tag="p" className={styles.text}>
                В сенсорной области они не бывают «невоздержными» и непреклонно-целеустремленным и, упрямыми, ригидными — их сенсорика слишком гибкая для этого.
            </Text>

            <Text tag="p" className={styles.text}>
                Управляемость и подчиненность сенсорного внимания. Взгляд у тактиков не прыгает по сторонам, он
                внимательный, сосредоточенный, порой пристальный. По этой причине тактики лучше запоминают
                лица людей.
            </Text>

            <Text tag="p" className={styles.text}>
                В случае неподвижных объектов тактики легко и устойчиво фокусируют внимание на чем-то одном.
                Сенсорное внимание послушно, в частности тактики просто любят удить рыбу на лодке или на бережку,
                мечтая о налиме и напряженно взирая на поплавок.
            </Text>

            <Text tag="p" className={styles.text}>
                Тактикам нравится ощущать свою управляемую власть над жизнью, судьбой и здоровьем людей, в этом — проявление уравновешенной черной сенсорики. Склонны и умеют соблюдать в сенсорной сфере общепринятый протокол.
            </Text>
            <Text tag="p" className={styles.text}>
                На пикнике спокойно сидят возле машины, моют ее, сами купаются или жарят шашлык. Огонь их не притягивает, живописать его они вряд ли станут — ни в мыслях, ни на бумаге.
            </Text>

            <PageBreak iconName='Tactician'>Тактики</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}