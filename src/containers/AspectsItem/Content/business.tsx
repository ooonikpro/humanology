import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';


export default function Business() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectBusiness' back>Дела</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Черная логика</Text>
                <Icon name='AspectBusinessMini' size={24} className={styles.iconAspectMini} />
            </div>

            <Icon name="AspectBusiness" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Дела
            </Text>

            <Text tag="p" size="h5" color="accent">
                Деловая логика
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Работа
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Деятельность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Выгода
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Результат
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Цель
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Эффективность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Метод
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Дело
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Бизнес
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Рынок
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Цены
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Показывает ресурсы объектов, деятельность, эффективность действий, создание неких технологий и методов работы.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Смысл аспекта заключается в выделении в некоем объекте качеств, которые можно использовать при своей деятельности. К деловой логике относится понятие целесообразности какой-либо деятельности.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Восприятие окружающего мира, людей, себя через поступки, оценка их рациональности.
                </Text>
                <Text tag="li">
                    Способность к анализу фактов, поступков, процессов.
                </Text>
                <Text tag="li">
                    Умение различать логичные и нелогичные поступки, оценивать их целесообразность, оптимизировать деятельность.
                </Text>
                <Text tag="li">
                    Умение выбрать способ противостояния внешнему воздействию.
                </Text>
                <Text tag="li">
                    Восприятие движения и пространства.
                </Text>
            </Text>


            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Польза, выгода, экономность, технология, факты, приобретения, накопление, купля, сбережения, наведение порядка, практичность.
                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Бесполезность, невыгодность, использование, применение, износ, расходы, траты,, рискованность, эксперимент, продажа, торговля, действия в условия хаоса, и изобретательность.
                </Text>
            </div>


            <PageBreak>Эксперты деловой логики</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div >
    );
}
