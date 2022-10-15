import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Logic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Logic' back>Логики</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Прекрасно разбираются в фактах и причинно-следственных связях. Для них важно, чтобы действия имели цель, иначе эти действия бессмысленны.
            </Text>

            <Text tag="p" size="h5" className={styles.text}>
                Около 70% мужчин — логики. Воспринимаются более «мужским» характером личности.
            </Text>

            <Text tag="p" className={styles.text}>
                Разбираются в вопросах организации труда, они могут организовать людей на продуктивную деятельность. Могут неплохо разбираться в вопросах бизнеса, знают, как заработать деньги.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Пользуются правилами, структурами, системами, графиками и таблицами. Считают это удобным способом оформления информации.
            </Text>

            <Text tag="p" className={styles.text}>
                В споре не склонны уступать, если оппонент, по их мнению, не прав. Оперируют фактами, статистикой, чтобы убедить собеседника.
            </Text>

            <Text tag="p" className={styles.text}>
                Считают, что существует объективная истина и стараются донести ее до людей. Хвалят и говорят комплименты тогда, когда люди этого действительно заслуживают.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                В целом логики воспринимают мир через логические соотношения. Они доказывают, убеждают, анализируют, просчитывают.
            </Text>

            <Text tag="p" className={styles.text}>
                Для логиков важны законы и их исполнение. Считают, что в мире должна быть справедливость, и готовы за нее бороться.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Хорошо оперируют фактами и причинно-следственными связями.
                </Text>
                <Text tag="li">
                    Умеют управляться с техникой, разбираются в ее устройстве.
                </Text>
                <Text tag="li">
                    Воспринимают мир через логические соотношения.
                </Text>
                <Text tag="li">
                    Знают, как заработать деньги.
                </Text>
                <Text tag="li">
                    Доказывают, убеждают, анализируют.
                </Text>
                <Text tag="li">
                    Не очень гибкие в вопросах морали, оценивают поступки с точки зрения «правильно-неправильно».
                </Text>
                <Text tag="li">
                    Оценивают профессионализм, интеллект и деловые качества людей.
                </Text>
                <Text tag="li">
                    Не очень сильны в разрешении конфликтов и эмоциональном воздействии на людей.
                </Text>
            </Text>

            <PageBreak iconName='Logic'>Логики</PageBreak>

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

            <EndPoint />
        </div>
    );
}