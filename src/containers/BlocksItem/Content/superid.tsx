import styles from '../BlocksItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_FUNCTIONS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Superid() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Блок Суперайди</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>
            <Icon name="BlockSuperid" size={{ width: 320, height: 120 }} color="white" className={styles.block} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Блок Суперайди
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Блок индивидуальной деятельности. Детский блок.
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ребенок
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Хочу
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Психологический уровень
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Одновременно с этим самое сокровенное и беззащитное звено. «Ребенка легко обидеть».
            </Text>

            <Text tag="p" className={styles.text}>
                Психологический уровень. Общение на близкой дистанции, доверие и «раскрытие души».
            </Text>

            <Text tag="p" className={styles.text}>
                Здесь важно не сколько «подстелить соломку», сколько установить личностные барьеры. Чтобы не пришли и не наплевали в душу.
            </Text>

            <PageBreak>Задачи блока</PageBreak>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Отдых и восстановления сил. Функции блока работают, чтобы создать хороший отдых.
                </Text>
                <Text tag="li">
                    Мотивация к деятельности.
                </Text>
                <Text tag="li">
                    Умение любить и быть любимым.
                </Text>
                <Text tag="li">
                    Умение принимать поддержку. Как отдельная задача, потому что поддержку не всегда легко принять. Человек может и готов ее предоставить, но человек сидит закрытый, поддержку не принимает, не отдыхает и поэтому «сохнет, чахнет и дохнет».
                </Text>
                <Text tag="li">
                    Умение радоваться жизни. Ни один другой блок не умеет так радоваться жизни, как блок Суперайди. Как в анекдоте, когда завезли в город поддельные шарики, и вроде бы большие, разноцветные, летают, но… не радуют! Без этого трудно радоваться жизни.
                </Text>
            </Text>

            <PageBreak>Функции блока</PageBreak>
            {
                DETAIL_CARD_FUNCTIONS.slice(4, 6).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}