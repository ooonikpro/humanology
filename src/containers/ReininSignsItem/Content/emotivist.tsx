import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Emotivist() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Emotivist' back>Эмотивисты</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Регулирует свое эмоциональное состояние путем поиска новых переживаний, поскольку не обладает способностью точно и в течение длительного времени воспроизводить ранее пережитые эмоции.
            </Text>

            <Text tag="p" className={styles.text}>
                Как чужие, так и давние свои переживания воспринимаются более отстраненно.
            </Text>

            <Text tag="p" className={styles.text}>
                Больше внимания уделяют установлению и поддержанию контакта с собеседником. Сразу пытаются установить контакт глазами. Сначала устанавливают эмоциональный контакт улыбкой или словами.
            </Text>

            <Text tag="p" className={styles.text}>
                В той или иной степени, сначала считают нужным наладить контакт, а потом переходить к делу. Они улыбаются, могут спросить, как дела, могут предложить просто пообщаться, а дело перенести на некоторое время, если есть такая возможность.
            </Text>

            <Text tag="p" className={styles.text}>
                При общении с каким-либо человеком эмотивисты стараются привести его в нужное эмоциональное состояние, или подстроиться самому. Обсуждая какое-либо дело, может «забыть» о нем и «сбиться» на эмоциональный обмен.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неуравновешенность логики
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Готовность спорить и идти на принцип, достигнуть цели, не выбирая средства, догматизм, логическая чрезмерность.
            </Text>

            <Text tag="p" className={styles.text}>
                Готовность упорно спорить и идти на принцип в логических вопросах, в вопросах «правильной» структуры, системы, эффективности и последовательности действий. В этом они склонны быть диктаторами или, по крайней мере, склонны к ригидности и упрямству.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Крайне болезненно реагируют на чьи-либо попытки вмешаться в процесс их личной работы и в их логические решения.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом бывают небрежными в логических деталях.
            </Text>

            <Text tag="p" className={styles.text}>
                Они в групповой тенденции избегают корректуры и мелкой ручной работы. Имеют «расхристанный» почерк, в отличие от конструктивистов. Почерк графологически не выдержан коряв, малоразборчив, нередко имеет значительный наклон вправо.
            </Text>

            <Text tag="p" className={styles.text}>
                В логической сфере имеют некоторое тяготение к «крупноблочной» логике, к масштабным идеалам и проектам (от крупного открытия с получением Нобелевской премии до установления всемирного нового порядка), что связано с логической неуправляемостью и идеализацией, с оторванностью подобных проектов от реальных задач практики.
            </Text>

            <Text tag="p" className={styles.text}>
                Догматизм, логическая чрезмерность, косность привычек, нетерпимость к чужому (иному) мнению. В логической сфере не всегда выдержаны. Корректируемы, в частности, стремятся к достижению цели любыми средствами — «цель оправдывает все».
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Уравновешенность этики
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Этическая гибкость и терпимость, малая ранимость, отсутствие назойливых воспоминаний, уверенное поведение среди людей, тревожность не характерна.
            </Text>

            <Text tag="p" className={styles.text}>
                Эмоциональная уравновешенность, хорошее эмоциональное вытеснение, равнодушие к философскому «самокопанию». Этическая гибкость и терпимость. Положительное отношение к себе. Практическое отсутствие вспышек гнева и злости. Крепкие нервы.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Более оптимистический и мажорный фон настроения, нежели у конструктивистов, они не склонны к затяжным дисфориям. Отсутствие назойливых неприятных воспоминаний, переживаний, мук совести. Малая ранимость.
            </Text>

            <Text tag="p" className={styles.text}>
                Уверенное поведение среди людей. Отсутствие комплексов. Заинтересованное отношение к гармонизации отношений в коллективе, улучшении его эмоционального фона. Тревожность не характерна. Донор позитивных эмоций и акцептор — отрицательных.
            </Text>

            <Text tag="p" className={styles.text}>
                Уступчивость в дискуссиях об искусстве, не слишком требовательны к морали, снисходительность к этическим проступкам.
            </Text>

            <Text tag="p" className={styles.text}>
                Нередко предпочитают убеждение или иное этическое воздействие («поглаживание») вместо использования логических аргументов.
            </Text>

            <Text tag="p" className={styles.text}>
                Так, даже для <mark className={styles.air}>Аналитика</mark> и <mark className={styles.earth}>Инспектора</mark> вслух логически обосновывать свои действия порою оказывается «лень», а «погладить по голове» — им проще.
            </Text>

            <PageBreak iconName='Emotivist'>Эмотивисты</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
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