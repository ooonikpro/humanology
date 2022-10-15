import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Ethic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Ethic' back>Этики</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Хорошо разбираются в чувствах и эмоциях. От их взгляда не ускользают подробности и нюансы настроения окружающих людей.
            </Text>

            <Text tag="p" size="h5" className={styles.text}>
                Около 70% женщин — этики. Воспринимаются более «женским» характером личности.
            </Text>

            <Text tag="p" className={styles.text}>
                И даже если человек пытается скрыть свои чувства, этик все равно заметит это по мельчайшим нюансам мимики, голоса, взгляда. Он увидит печаль за напускной веселостью, доброту за показной строгостью.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Способны и сами эмоционально воздействовать на людей, менять настроение окружающих, создавать нужную в данной конкретной ситуации атмосферу. Успокоят, развеселят, посочувствуют.
            </Text>

            <Text tag="p" className={styles.text}>
                Однако делают они это естественно и непринужденно, не прилагая каких-то специальных усилий.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Так же успешно разбираются в вопросах отношений между людьми. Они знают, кто кого любит, кто кого ненавидит, кто от кого в восторге, а кто кого избегает.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо чувствуют, как к ним относятся другие люди и умеют влиять на это отношение. В целом они творчески подходят к выстраиванию отношений и создают их такими, какими сами пожелают.
            </Text>

            <Text tag="p" className={styles.text}>
                Могут уступить в споре только потому, что не хотят обидеть. Или сделать комплимент внешности, чтобы порадовать человека, даже если тот сегодня выглядит не лучшим образом. Хвалят, чтобы вдохновить и поддержать, если видят, что человек старается.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                В целом этики воспринимают мир через людей и чувства. Они живут тем, что ссорятся, мирятся, любят и ненавидят, радуются и страдают.
            </Text>

            <Text tag="p" className={styles.text}>
                Для них не существует раз и навсегда определенных моральных правил, тем более «подсмотренных» у кого-то. Часто они создают эти правила сами.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Вопросы морали для них важны, однако и к ним они подходят творчески. Видят сложную этическую ситуацию с разных сторон и учитывают субъективные, личные обстоятельства.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Хорошо разбираются в чувствах и отношениях.
                </Text>
                <Text tag="li">
                    Умеют эмоционально воздействовать на людей.
                </Text>
                <Text tag="li">
                    Воспринимают мир через людей, отношения.
                </Text>
                <Text tag="li">
                    Успешно разрешают конфликты.
                </Text>
                <Text tag="li">
                    Уговаривают, просят, вдохновляют.
                </Text>
                <Text tag="li">
                    Творчески, всестороннее подходят к вопросам морали, оценивают поступки с точки зрения «хорошо-плохо».
                </Text>
                <Text tag="li">
                    Оценивают душевные качества людей.
                </Text>
                <Text tag="li">
                    Не очень сильны в решении логических задач и вопросах, связанных с зарабатыванием денег.
                </Text>
            </Text>

            <PageBreak iconName='Ethic'>Этики</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
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