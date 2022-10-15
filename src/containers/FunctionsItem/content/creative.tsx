import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Creative() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionCreative' back>Творческая функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="CreativeExample" size={{ width: 220, height: 96 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Творческая
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Созидательная
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Витальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сильная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Преобразование
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Движение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Непредсказуемость
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Удовольствие
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Отражает способ реализации личности, её «стихию». Служит нам главным инструментом для достижения целей.
            </Text>

            <Text tag="p" className={styles.text}>
                Именно через творческую достигаются важные цели, она помогает человеку добиться своего.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Случился кризис на работе — подключается творческая и разруливает процесс, появилась сложная задача — опять прибежала творческая и сняла заботы с базовой, распределив их правильным образом.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Ищет новые впечатления, вкладывает много усилий с целью получения новой информации, нового ощущения, переживая при этом удовольствие.
            </Text>

            <Text tag="p" className={styles.text}>
                Смена целей, изменчивость, желание пережить максимальное количество ощущений в данной ситуации. Подвижность, мобильность, гибкость.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Стремится сделать все интересным, живым, приспособить все для всех.
            </Text>

            <Text tag="p" className={styles.text}>
                Творческая функция, это то, что хочется показать другим, но она несколько иллюзорна.
            </Text>

            <Text tag="p" className={styles.text}>
                Она способна посмотреть на ситуацию с другой стороны. Творческая функция к критике более чувствительна, чем программная функция, но эта критика легко забывается.
            </Text>

            <Text tag="p" className={styles.text}>
                Чтобы развить творческую функцию, необходимо попадать в такие кризисные ситуации, когда её помощь требуется сразу и во многом.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                При наработке способов решать сложные вопросы с помощью творческой, растет ваш опыт как профессионала и человека.
            </Text>

            <Text tag="p" className={styles.text}>
                Обучение по творческой функции — очень приятное, информация схватывается на лету, тема интересна, применять знания очень весело и совсем несложно.
            </Text>

            <PageBreak>Особенности</PageBreak>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Способность действовать быстро и эффективно: находит тысячи решений, чтобы справиться с имеющейся проблемой.
                </Text>
                <Text tag="li">
                    Несерьезность и интерес: по творческой функции работать легко и очень интересно. Поиск решения воспринимается социотипом как игра, а не как работа. Задача для творческой — это вызов, который принимается с юмором.
                </Text>
                <Text tag="li">
                    Легкость принятия решений: творческая не является фундаментальной функцией, как базовая, ей легче принять неудачу и ей проще взять на себя ответственность
                </Text>
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Творческую функцию не стоит рассматривать отдельно от базовой — блок Эго.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(0, 1).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}