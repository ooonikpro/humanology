import styles from '../SuitsTarot.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Wands() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Wands' back>Посохи</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Боевая соционика</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Wands" color="accent" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Посохи
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Назидание
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Рационалы
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Этики
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Конструктивисты
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.earthText}>
                Идеи, витающие в воздухе и в умах.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                В социуме являются проводниками законов для людей, проповедниками и хранителями правильного образа жизни.
            </Text>

            <Text tag="p" className={styles.text}>
                Это архетипы, которые проводят в социум законы и правила.
            </Text>

            <Text tag="p" className={styles.text}>
                Отсюда их отношение к другим людям, как к неразумным детям, которым необходимо объяснять как и по каким законам надо жить.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                В духе Маяковского — Крошка сын к отцу пришел, и спросила кроха: — Что такое хорошо и что такое плохо? Именно на эти вопросы и отвечают посохи.
            </Text>

            <Text tag="p" className={styles.text}>
                Опора на сильную этику (первая функция) позволяет им не сомневаться в своем праве учить людей законам жизни.
            </Text>

            <Text tag="p" className={styles.text}>
                К ним же эти законы приходят извне по четвертой функции.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Суггестивность функции создает ощущение у посоха, что эти законы спускаются ему свыше. Проявляясь из воздуха.
            </Text>

            <PageBreak iconName='Wands'>Посохи</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}