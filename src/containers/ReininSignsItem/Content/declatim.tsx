import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';


export default function Declamtim() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Declatim' back>Деклатимы</PageTitle>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Деклатим – это человек склонный говорить утвердительно, для него обратная связь с собеседником имеет второстепенное значение, общаться проще в форме монолога.
            </Text>

            <Text tag="p" className={styles.text}>
                В новой ситуации прежде всего осознают свое отношение к остальным, поэтому изначально ведет себя, как наблюдатель.
            </Text>

            <Text tag="p" className={styles.text}>
                Коммуникация имеет монологовую форму. Информация излагается крупными блоками, «вопросы потом». Вопросы риторические, цель которых – подвести собеседника к нужному выводу. Чаще использует утвердительную форму речи. Стремится высказать сформулированную мысль до конца, а затем выслушать собеседника.
            </Text>

            <Text tag="p" className={styles.text}>
                Редко задает вопросы. Если вопрос звучит в речи, то он уже подразумевает тот ответ, которого он ожидал. Это наводящий вопрос. Может постоянно разговаривать, даже если его никто не слушает.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Побуждает квестима к беседе.
            </Text>

            <Text tag="p" className={styles.text}>
                Задумывается какого содержание информацию передать окружающим. Оценивает целостность аудитории чтобы начать работу или начинать разговор.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Чувствует готовность окружающих, когда наступил подходящий момент, чтобы выразить своих мысли.
            </Text>

            <Text tag="p" className={styles.text}>
                В процессе обмена информации свободно регулирует темп, но редко ощущает потребность привлекать других.
            </Text>

            <PageBreak iconName='Declatim'>Деклатимы</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
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
        </div>
    );
}