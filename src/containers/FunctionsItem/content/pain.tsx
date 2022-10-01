import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Pain() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionPain' back>Болевая функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="PainExample" size={{ width: 256, height: 60 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Болевая
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Мобилизационная
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Витальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Внеценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Слабая
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Неадекватность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Обидчивость
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Напряженность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Является пожизненным источником проблем, постоянно требующим заботы и защиты.
            </Text>

            <Text tag="p" className={styles.text}>
                Имеет тенденцию болезненно воспринимать активное влияние окружающей ситуации или людей.
            </Text>

            <Text tag="p" className={styles.text}>
                Любые отрицательные впечатления переключают человека на эту функцию, привлекая внимания других.
            </Text>

            <Text tag="p" className={styles.text}>
                Слабая функция, здесь нет никакой внутренней уверенности. Она нормативна, но её нормы завышены.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Человек напрягается при любом внимании других к этому аспекту.
            </Text>

            <Text tag="p" className={styles.text}>
                Часто удивляет других своей неадекватностью проявлений. Самая стрессовая функция, сам тип склонен подогревать этот стресс. Детонатор типа. Эта функция демонстративная в виде протеста.

            </Text>

            <Text tag="p" className={styles.text}>
                Здесь есть желание, чтобы вслух не высказывалось мнение, не акцентировалось внимание, но всё же замечалось и осторожно заботились.
            </Text>

            <Text tag="p" className={styles.text}>
                Информация воспринимается сильно искаженной, реакция не адекватная даже на нейтральную информацию, болезненное восприятие критики.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Человек избегает продолжительно и интенсивно работать по области реализации этой функции, как бы, исключая определенные аспекты из своего мировосприятия.
            </Text>

            <Text tag="p" className={styles.text}>
                Кроме нежелания заниматься вопросами по болевой функции, также может испытывать неприятие и стыд.
            </Text>

            <Text tag="p" className={styles.text}>
                Сложно признаться, что именно это у него не получается, тогда как неудачи по другим функциям воспринимаются более спокойно.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом, если удалось достичь даже минимального успеха по болевой функции, чувствует удовлетворение и настоящую радость: он смог.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Болевая функция имеет два основных качества: она учится лишь на собственном опыте и она всегда чувствует реакцию снаружи.
            </Text>

            <Text tag="p" className={styles.text}>
                То есть, человек понимает, что с ним «что-то не так», но, при этом, не может прочитать книгу и сразу начать разбираться в вопросе.
            </Text>

            <Text tag="p" className={styles.text}>
                Некоторые люди имеют очень большой опыт по болевой, у них в голове сложился ряд шаблонов, в которых они знают, как надо себя вести.
            </Text>

            <Text tag="p" className={styles.text}>
                Но как только возникнет новая, не встречавшаяся ранее ситуация, человек снова окажется в ситуации, когда нужно нарабатывать новый опыт.
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Болевую функцию не стоит рассматривать отдельно от ролевой — блок Суперэго.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(2, 3).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}