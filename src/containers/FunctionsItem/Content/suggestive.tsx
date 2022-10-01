import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Suggestive() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionSuggestive' back>Внушаемая функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="SuggestiveExample" size={{ width: 168, height: 96 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Внушаемая
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Суггестивная
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Витальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Слабая
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Нерешительность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Копирование
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Импульсивность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Инфантильность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Легко поддается чужому влиянию, мнениям, требованиям.
            </Text>

            <Text tag="p" className={styles.text}>
                Человек воспринимает информацию некритично и с благодарностью, нуждается в помощи и советах.
            </Text>

            <Text tag="p" className={styles.text}>
                В то же время, плохо осознаёт свои потребности по данной функции вплоть до возникновения конкретных проблем — «чего-то хочется, а чего конкретно — непонятно».
            </Text>

            <Text tag="p" className={styles.text}>
                Легко поколебать уверенность.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Самая архаичная, детская функция. По этому аспекту человек чаще всего попадает под чьё-то влияние.
            </Text>

            <Text tag="p" className={styles.text}>
                Тип копирует импульсы или реакции окружающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Если его настроили на какую-то мысль, он ее переживает некоторое время, а потом теряет энергию.
            </Text>

            <Text tag="p" className={styles.text}>
                Потом его можно настроить на обратную мысль, и он не будет сопротивляться. Здесь частая перенастройка, почти невозможно сознательное восприятие.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Базовая функция дуала закрывает вашу внушаемую с любовью.
            </Text>

            <Icon name="BaseSuggestiveDual" size={{ width: 256, height: 160 }} color="white" className={styles.function} />

            <Text tag="p" className={styles.text}>
                Если рядом нет дуала, то внушаемую функцию можно подпитать и без людей. В зависимости от того, что стоит на позиции внушаемой функции, действия будут разными.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Информация по аспектам этой функции воспринимается «как есть», усваивается слабо, используется зачастую слишком схематично.
            </Text>

            <Text tag="p" className={styles.text}>
                В области реализации пятой функции лежат «дополняющие ценности» или эталоны. Она сответствует первой — программной функции нашего дуала.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Поэтому нередко в незнакомой обстановке на дальней дистанции человек начинает коммуницировать именно из этой функции, как бы проверяя собеседника «наш» это человек или нет.
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Внушаемую функцию не стоит рассматривать отдельно от активационной — блок Суперайди.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(3, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}