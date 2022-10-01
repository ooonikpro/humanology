import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Limit() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionLimit' back>Защитная функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="LimitExample" size={{ width: 128, height: 60 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Защита
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Игнорирования
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Витальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Внеценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сильная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сдержанность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Принципиальность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Пассивность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Защита от неприятного влияния. Человек не хочет проявлять функцию без надобности.
            </Text>

            <Text tag="p" className={styles.text}>
                Считает нужным обесценивать ценность или качество явлений по данному аспекту. Не дает окружающим увлекаться.
            </Text>

            <Text tag="p" className={styles.text}>
                Тип считает некрасивым получать выгоду по аспекту, получать что-либо за счет других.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не любит отступлений от нормы, прямых команд, утверждений, прямого влияния.
            </Text>

            <Text tag="p" className={styles.text}>
                По этой функции человек немногословен: обычно хватает пары точных и метких фраз, сказанных серьезным голосом, и все вокруг понимают, что дальше спорить не надо.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ограничивает неприятную деятельность.
            </Text>

            <Text tag="p" className={styles.text}>
                Любой соционический тип начинает действовать по ограничительной лишь в той ситуации, когда его «достали».
            </Text>

            <Text tag="p" className={styles.text}>
                Являясь одним из наименее осознаваемых, тем не менее, постоянно и надежно выполняет свою интернальную функцию в психической структуре человека.
            </Text>

            <Text tag="p" className={styles.text}>
                Правомерной будет ассоциация с автопилотом: пилотная функция «ведет» человека практически не требуя сознательного вмешательства т.е. в автоматическом режиме.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Личность настолько уверена в своих силах, что не страшиться сколь угодно трудной ситуации по аспектам функции.
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Защитную функцию не стоит рассматривать отдельно от фоновой — блок Айди.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(1, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}