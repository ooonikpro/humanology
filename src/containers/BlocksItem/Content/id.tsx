import styles from '../BlocksItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_FUNCTIONS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Id() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Блок Айди</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>
            <Icon name="BlockId" size={{ width: 320, height: 100 }} color="white" className={styles.block} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Блок Айди
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Блок индивидуального контроля.
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Заботливый родитель
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Подсознание
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Стратегия достижения успеха, на что можно опереться, что можно воплотить в реальную жизнь, в реальный мир.
            </Text>

            <Text tag="p" className={styles.text}>
                Здесь ответственность за себя, и за то, чтобы не делать другому того, чего не хочешь себе.
            </Text>

            <Text tag="p" className={styles.text}>
                Согласование действий, «включение поворотников» вовремя, чтобы другие люди знали чего от вас ждать.
            </Text>

            <Text tag="p" className={styles.text}>
                То есть умение «не толкаться локтями», если почему-то мы вынуждены быть в одной упряжке, физически находится рядом.
            </Text>


            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Миссия блока — накормить, напоить, обеспечивает физический комфорт, безопасность.
            </Text>

            <PageBreak>Задачи блока</PageBreak>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Повседневный труд.
                </Text>
                <Text tag="li">
                    Воплощение задумок.
                </Text>
                <Text tag="li">
                    Обеспечение безопасности.
                </Text>
                <Text tag="li">
                    Решение бытовых проблем.
                </Text>
                <Text tag="li">
                    Быть «в одной упряжке», способность жить бок-о-бок с другими людьми. Не толкаться локтями. Совместная работа. Уважение к правам и обязанностям.
                </Text>
                <Text tag="li">
                    Качество жизни. Именно физического существования.
                </Text>
            </Text>

            <PageBreak>Функции блока</PageBreak>
            {
                DETAIL_CARD_FUNCTIONS.slice(6, 8).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}