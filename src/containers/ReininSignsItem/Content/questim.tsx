import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';


export default function Questim() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Questim' back>Квестимы</PageTitle>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Квестим — это человек склонный задавать вопросы, для него важна обратная связь с собеседником, ему проще общаться с собеседником в форме диалога.
            </Text>

            <Text tag="p" className={styles.text}>
                В новой ситуации сначала концентрирует свои мысли на то, чтобы достичь как можно больше информации.
                Коммуникация имеет диалоговую форму.
            </Text>

            <Text tag="p" className={styles.text}>
                Информация излагается в виде вопросов и ответов. Короткие ответы на поставленные вопросы. Задает вопросы, чтобы получить на них ответ. Легко перебить. Вопрошающий взгляд, ориентированный на получение обратной связи.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Выбирает наиболее подходящий способ как окружающим разглашать свое мнение.
            </Text>

            <Text tag="p" className={styles.text}>
                Оценивает настроение аудитории, окружающих людей. Хорошо чувствует момент, когда настало время для диалога с окружающими.
            </Text>

            <Text tag="p" className={styles.text}>
                В процессе обмена информации с окружающими свободно регулирует дистанцию, чувствуют, когда их можно вовлечь.
            </Text>

            <PageBreak iconName='Questim'>Квестимы</PageBreak>

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