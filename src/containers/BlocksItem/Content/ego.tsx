import styles from '../BlocksItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_FUNCTIONS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Ego() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Блок Эго</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>
            <Icon name="BlockEgo" size={{ width: 320, height: 100 }} color="white" className={styles.block} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Блок Эго
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Блок принятия решений, творчества.
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Взрослый
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Знаю
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Интеллектуальный уровень
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Осмысление и обдумывание, постановка целей и выбор средств их достижения, выбор профессии.
            </Text>

            <Text tag="p" className={styles.text}>
                Безэмоциональный компьютер, который, вне зависимости от того, какие функции в нем находятся, считает, оценивает ситуацию и принимает решение.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо — плохо, этично — не этично, морально — аморально, выгодно — не выгодно, правильно — не правильно, в зависимости от того какие функции в нем есть, то он и считает.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                При этом считает совершенно хладнокровно.
            </Text>

            <Text tag="p" className={styles.text}>
                Состоит из двух осознанных сильных функций.
            </Text>

            <Text tag="p" className={styles.text}>
                По этому блоку человек может работать достаточно долго и эффективно, причем решать как и частные задачи, так и выявлять общие свойства и закономерности у совершенно различных ситуаций.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Результаты работы по функциям этого блока может быть использована и для своих нужд, и в интересах общества в целом.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Функция блока —  достижение успеха.
            </Text>

            <Text tag="p" className={styles.text}>
                Чтобы «прорваться», быть опорой в неожиданных ситуациях, сложных ситуациях. Там, где заранее сложно учесть все факторы. Здесь блок Эго может нас выручить.
            </Text>

            <PageBreak>Задачи блока</PageBreak>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Грамотное принятие решений. Хладнокровный компьютер, за счет безоценочного анализа, может принять гораздо более точное решение, чем другие блоки.
                </Text>
                <Text tag="li">
                    Донесение важной информации. Чтобы донести информацию наиболее полно, аргументировано, уверенно.
                </Text>
                <Text tag="li">
                    Осмысление. Понять что, к чему, как это происходит, как оно повлияет на меня, на других людей.
                </Text>
                <Text tag="li">
                    Выбор целей и средств их достижений.Там, где мы уверены в своем знании, там, где мы лучше понимаем границы нашего знания, там мы можем адекватнее поставить цели. Решить каким методом мы будем их достигать. Если более дифференцировать, то цели лучше ставит базовая функция, как наиболее экспертная. А методы достижения ищутся скорее по творческой функции, там их наибольший перечень, можно придумывать новые методы, критически их оценивать.
                </Text>
                <Text tag="li">
                    Реализация личности. Реализацию личности многие понимают по-разному, в данном контексте имеется в виду в первую очередь реализация творчества, достижения творческих результатов. Не просто «кремлевский мечтатель», как Манилов, Обломов, которые не реализовали себя как творческие личности: идеи есть, но они не воплощены. Нет, здесь речь идет именно о продуктивном творчестве, приносящем результаты.
                </Text>
            </Text>

            <PageBreak>Функции блока</PageBreak>
            {
                DETAIL_CARD_FUNCTIONS.slice(0, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}