import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Activate() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionActivate' back>Активационная функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="ActivateExample" size={{ width: 212, height: 96 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Активация
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Накопления
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ментальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Слабая
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Хочу внимания
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Накопление
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Раздражительность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Имеет тенденцию регулярно поглощает положительные импульсы.
            </Text>

            <Text tag="p" className={styles.text}>
                Это желание может быть довольно сильным. По слабым функциям выражение очень ограничено, узкий круг объектов.
            </Text>

            <Text tag="p" className={styles.text}>
                По этой функции можно человека «купить». Может пойти на торг. Элемент беззастенчивости.
            </Text>

            <Text tag="p" className={styles.text}>
                Есть желание, чтобы по этой функции на человека обратили внимание.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Отсутствие положительной подпитки может отрицательно сказаться на состоянии человека.
            </Text>

            <Text tag="p" className={styles.text}>
                Не очень сильная, но и слабой её назвать нельзя, при этом человеку очень нравится по ней работать и развиваться.
            </Text>

            <Text tag="p" className={styles.text}>
                Если по суггестивной функции человеку достаточно сложно достичь больших успехов, то по активационной шансы сильно увеличиваются.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Многие люди поступают в ВУЗы на специальности, связанные с активационной функцией.</i>
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Если в жизни человека эта подпитка всегда отсутствовала, он спокойно переносит перебои.Если привык к заботе — то тяжело.
            </Text>

            <Text tag="p" className={styles.text}>
                В узком кругу тип следит, чтобы его обласкали.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Это энергетический банк типа.
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Функцию активации не стоит рассматривать отдельно от внушаемой — блок Суперайди.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(3, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}