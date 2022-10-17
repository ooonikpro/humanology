import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Result() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Result' back>Результаторы</PageTitle>

            <AuthorLine text='Читать 3 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Больше внимания уделяют результатам.
            </Text>

            <Text tag="p" className={styles.text}>
                Им крайне важно, чтобы дело было доведено до логического конца, после чего без передышки начинается новое дело, которое также необходимо довести до конца.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Резче и увереннее начинают дело. Четкое завершение — не в том, что хорошо сделано, а в том, что четко и ясно виден конец.
            </Text>

            <Text tag="p" className={styles.text}>
                Часто стремятся «поставить точку». Стараются не заниматься длительными доделками – переделками.
            </Text>

            <Text tag="p" className={styles.text}>
                Жизнь скорее дискретна, со своеобразными «отчетными периодами». Часто говорят, что процесс для них – это цепочка промежуточных результатов. В игре важнее победа.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Скачкообразное развитие. Важен факт, что изменение произошло и «еще одно дело сделано».
            </Text>

            <Text tag="p" className={styles.text}>
                Страдают некачественной с точки зрения процессора работой — они скачут по верхам, ошибаясь в мелких деталях.
            </Text>

            <Text tag="p" className={styles.text}>
                Важно переключаться между проектами, менять стиль работы.
            </Text>

            <Text tag="p" className={styles.text}>
                Предложения короткие, законченные, с подведением итогов, чёткие окончания фраз.
            </Text>

            <PageBreak iconName='Result'>Результаторы</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
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