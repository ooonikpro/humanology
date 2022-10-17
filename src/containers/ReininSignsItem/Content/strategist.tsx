import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Strategist() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Strategist' back>Стратеги</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Имеют склонность к немедленной помощи в виде поддержки.
            </Text>

            <Text tag="p" className={styles.text}>
                Долгосрочные потребности, преобразованные в цели, всегда имеют приоритет перед текущими (краткосрочными) потребностями и осознаются лучше них.
            </Text>

            <Text tag="p" className={styles.text}>
                После каждого предпринятого действия происходит сверка результата с конечным желаемым состоянием. Фиксируют свое внимание на точке, в которую они хотят попасть, на цели своих действий, а не на самих действиях, происходящих событиях.
            </Text>

            <Text tag="p" className={styles.text}>
                Свои текущие действия и актуальные выборы оценивают с точки зрения того, насколько они приближают их к конкретному желаемому состоянию. При выборе отвергают те варианты, которые не приближают их к цели.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неуравновешенность сенсорики
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Несдержанность в вопросах биологических потребностей, внимание легко рассеивается, его сложно удерживать, трудности изменения темпа работы.
            </Text>

            <Text tag="p" className={styles.text}>
                «Витальные» потребности порой сильны до навязчивости и нетерпения, требуя обязательного и скорейшего удовлетворения. Несдержанность в вопросах биологических потребностей — еды, питья, секса, курения.
            </Text>

            <Text tag="p" className={styles.text}>
                Зрительное внимание начинает быстро рассеиваться. Взгляд значительную часть времени случайно бегает по сторонам, скачет или плавает, находится в свободном автоматическом поиске, сканируя пространство.
            </Text>

            <Text tag="p" className={styles.text}>
                Они любят сидеть у костра и бесцельно смотреть на огонь, на его призрачные меняющиеся языки.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Трудности изменения темпа работы, сознательного переключения зрительного и слухового внимания.
            </Text>

            <Text tag="p" className={styles.text}>
                Нетерпеливы в удовлетворении потребностей, стремятся получать подкрепление уже в начале работы, предпочитают идти к удовлетворению потребности по короткому пути.
            </Text>

            <Text tag="p" className={styles.text}>
                Трудно соразмерять свои финансовые возможности с желаниями и потребностями, поэтому уступают тактикам в грамотном планировании личного бюджета, зато чаще и легче срываются в прямую агрессию и в рукоприкладство — проблема с торможением.
            </Text>

            <Text tag="p" className={styles.text}>
                Часто автоматически обращают внимание на какие-нибудь окружающие мелочи, если зрительно за чем-то наблюдают, то боковым зрением подмечают все вокруг.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Уравновешенность интуиции
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                «Мыслеобразы» по заказу, прогнозирование ситуации на дороге на ближайшие несколько секунд, расчетливость в планировании времени.
            </Text>

            <Text tag="p" className={styles.text}>
                Произвольность в управлении воображением, «мыслеобразы» по заказу. Свобода от непродуктивного «рыщущего» давления фантазии — вполне управляемая и уравновешенная интуиция.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Память у стратегов более послушна и исполнительна, чем у тактиков. Расчетливость в использовании своего времени, что также может трактоваться в пользу управляемости интуиции.
            </Text>

            <Text tag="p" className={styles.text}>
                Они лучше себя чувствуют, перебегая дорогу с оживленным автомобильным движением — их «бегающий» взгляд в автоматическом режиме мгновенно фиксирует расстановку и скорость машин на дороге, а управляемая и сосредоточенная интуиция помогает прогнозировать локальную обстановку на трассе на ближайшие несколько секунд.
            </Text>
            <Text tag="p" className={styles.text}>
                Предрасположенность к научной работе в сфере биологии, физики или математики, способность мысленно
                «держать цель» и сосредоточивать свое воображение на главной информации и главных проблемах,игнорируя мелочи и побочные ассоциации.
            </Text>
            <Text tag="p" className={styles.text}>
                К интуиции, воображению и фантазии этот желанный круг профессий предъявляет весьма жесткие требования. Воображение надо запускать в дело быстро и оперативно, чтобы наглядно мысленно вообразить себе будущий результат работы и наметить путь к нему, в фантазиях нельзя слишком увлекаться, надо уметь их вовремя контролировать и тормозить.
            </Text>

            <PageBreak iconName='Strategist'>Стратеги</PageBreak>

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