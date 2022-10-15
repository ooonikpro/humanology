import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Rational() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Rational' back>Рационалы</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Воспринимают мир через установку разума.
            </Text>

            <Text tag="p" className={styles.text}>
                Любой рациональный тип, прежде чем отреагировать, оценивает поступившую информацию, сравнивая её с предыдущим опытом, и затем уже решает, как он отреагирует.
            </Text>

            <Text tag="p" className={styles.text}>
                У одних это происходит быстрее, у других — медленнее, но мы всегда можем заметить эту точку «переключения» со старой информацией на новую.
            </Text>

            <Text tag="p" className={styles.text}>
                Именно поэтому не очень хорошо воспринимают сюрпризы — им сложно сразу перестроиться и получить удовольствие от чего-то неожиданного. Это сопровождается дискомфортом, требует определенных усилий.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Для рационалов лучше, если их жизнь стабильна, организована и продумана заранее.
            </Text>

            <Text tag="p" className={styles.text}>
                Они могут планировать какие-то события на много лет вперед, и настойчиво идти к своей цели. Конечно, рационалы меняют планы в зависимости от обстоятельств, но для них это неудобно.
            </Text>

            <Text tag="p" className={styles.text}>
                И в целом они предпочитают все продумать так, чтобы потом не было необходимости вносить кардинальные коррективы.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не склонны отвлекаться на посторонние факторы и поэтому довольно быстро достигают целей.
            </Text>

            <Text tag="p" className={styles.text}>
                Хранители традиций. В этом они тоже видят стабильность и надежность. Им приятно думать о том, что есть в этом мире что-то вечное и незыблемое, что и через время останется таким же, к чему они смогут вернуться независимо ни от чего.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Они уважают правила и законы, в том числе и из тех соображений, что соблюдение этих законов гарантирует им отсутствие неожиданных ситуаций.
            </Text>

            <Text tag="p" className={styles.text}>
                В индивидуальном психологическом консультировании рационалам лучше подходят методики, направленные на осознание своих чувств и мыслей на каждом этапе, анализ полученного опыта и обдумывание дальнейших шагов.
            </Text>

            <Text tag="p" className={styles.text}>
                Им нелегко даются техники, предполагающие «присутствие в потоке», когда от человека требуется ослабить тонусное состояние и получать непосредственный опыт из окружающего мира, не обдумывая и не анализируя его.
            </Text>

            <Text tag="p" className={styles.text}>
                И хотя такие техники можно использовать разово, для того, чтобы расширить опыт клиента, тем не менее, они не должны браться за основу.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Один рационал как-то заметил: «Мне требуется сильно напрячься, чтобы суметь расслабиться», имея в виду, что для него это сопровождается определенными усилиями, а потому уже само по себе не может использоваться для расслабления.</i>
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Сравнивают вновь поступающий опыт с предыдущим.
                </Text>
                <Text tag="li">
                    Сначала оценивают информацию, затем принимают решение.
                </Text>
                <Text tag="li">
                    Для того, чтобы переключиться на новое, требуется усилие, а иногда и время.
                </Text>
                <Text tag="li">
                    Не любят сюрпризы.
                </Text>
                <Text tag="li">
                    Ценят стабильность и организованность.
                </Text>
                <Text tag="li">
                    Относительно быстро достигают своих целей.
                </Text>
                <Text tag="li">
                    Не очень гибкие, не всегда могут приспособиться к новой ситуации.
                </Text>
                <Text tag="li">
                    Уважают традиции.
                </Text>
                <Text tag="li">
                    Выступают за долгие и стабильные отношения.
                </Text>
                <Text tag="li">
                    Чтобы избежать неожиданностей, соблюдают правила.
                </Text>
                <Text tag="li">
                    Внешне выглядят подтянутыми, как будто внутри — металлический стержень.
                </Text>
            </Text>

            <PageBreak iconName='Rational'>Рационалы</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
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

            <EndPoint />
        </div>
    );
}