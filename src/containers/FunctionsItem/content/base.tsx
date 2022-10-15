import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Base() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionBase' back>Базовая функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="BaseExample" size={{ width: 204, height: 96 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Базовая
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Программная
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ментальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сильная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Знание цели
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Решительность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Инициатива
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Заинтересованность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Эта функция является самой экспертной.
            </Text>

            <Text tag="p" className={styles.text}>
                Проявляется на уровне решения глобальных задач человека. Она определяет свои цели, внутренние потребности и возможности.
            </Text>

            <Text tag="p" className={styles.text}>
                По ней определяется максимальная заинтересованность.
            </Text>

            <Text tag="p" className={styles.text}>
                Если типу не дают принимать участие при решении данных вопросов, он обижается, считает нужным указать, что с ним должны здесь считаться.
            </Text>

            <Text tag="p" className={styles.text}>
                Не позволяет вмешиваться другим в решающие моменты. Дает ощущение индивидуальности, власти, ощущение себя как личности.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Очень значима для типа.
            </Text>

            <Text tag="p" className={styles.text}>
                Она демонстративна, но её демонстративность проявляется обычно среди близкого круга.
            </Text>

            <Text tag="p" className={styles.text}>
                Ее обычно не видно: она настолько находится «в» человеке, настолько направлена вовнутрь, а не на социальную оценку вовне, что часто её процессы проходят незаметно для окружающих.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Если спросить человека, как он работает по своей базовой функции, то, скорее всего, на вас посмотрят с недоумением.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Человек не замечает такую работу, он делает все «как другие люди, ничего необычного», но на самом деле, если приглядеться, то базовую функцию заметить можно.</i>
            </Text>

            <PageBreak>Особенности</PageBreak>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Экспертное мнение, глобальный охват проблемы.
                </Text>
                <Text tag="li">
                    Отсутствие желания покрасоваться. Не замечает работу по базовой функции.
                </Text>
                <Text tag="li">
                    Потенциал для развития и построения карьеры.
                </Text>
                <Text tag="li">
                    Способность при небольших начальных данных выстроить полную картину.
                </Text>
                <Text tag="li">
                    Уязвимость. При отсутствии возможности свободно действовать, если человеку перекрывают доступ к базовой функции, он впадает в депрессию, получает невроз.
                </Text>
                <Text tag="li">
                    Консервативность. Устойчивые взгляды и методы решения проблем, невозможность быстро переучиться и изменить привычки
                </Text>
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Базовую функцию не стоит рассматривать отдельно от творческой — блок Эго.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Два типа с одинаковой базовой функцией абсолютно одинаково видят мир — наоборот, поскольку у них различаются творческие функции, они видят ситуацию абсолютно иначе.</i>
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(0, 1).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}