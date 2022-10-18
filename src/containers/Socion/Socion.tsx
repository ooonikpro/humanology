import React from 'react';
import styles from './Socion.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';
import { PageBreak } from '../../components/PageBreak';
import { BlockLink } from 'src/components/BlockLink';

export default function Socion() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle back iconName='Dna'>Устройство социона</PageTitle>
                <AuthorLine text='Читать 7 минут' iconName='Time'>Разные</AuthorLine>

                <Text tag="p" className={styles.text}>
                    Сначала хочу процитировать первоисточник — «Социон» Аушры.
                </Text>

                <Text tag="p" className={styles.text} color="accent">
                    Человек как биологическое существо есть самостоятельная единица, кооперирущая с себе подобными лиш в целях продолжения рода. Как социально существо он такой самостоятельностью не отличается.
                </Text>

                <Text tag="p" className={styles.text} color="accent">
                    Интеллект одной личности — одна шестнадцатая социального интеллекта. И что можно говорить о полной его единице.
                </Text>

                <Text tag="p" className={styles.text} size="h6" color="accent">
                    Такую единицу — шестнадцать людей с разными типами — мы и называем социон.
                </Text>

                <Text tag="p" className={styles.text} color="accent">
                    Это не только 16 определенных конкретных интеллектов, но и 16 совершенно разных и конкретных отношений каждого человека со всеми другими людьми.
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    То есть Аушра имела ввиду минимальный набор для создания цивилизации с нуля, если говорить простыми словами.
                </Text>

                <Text tag="p" className={styles.text}>
                    Масштабируемость и сложность данной модели может разрастаться в любой прогрессии. Но исходя из факта фрактальности реальности все конструкции будут иметь одну и ту же схему взаимодействия.
                </Text>


                <PageBreak>Общая модель социона</PageBreak>

                <div className={styles.linkblock}>
                    <a href='#' target="_blank" rel="noreferrer">
                        <BlockLink path="#" label="Посмотрите видео" icon="PlaySquare" />
                    </a>
                </div>

                <Text tag="p" className={styles.text}>
                    Две бесконечные спирали, по своему устройству похожие на цепочки ДНК. При этом есть внешняя спираль, нисходящая из космоса и упирающаяся в реальность, и есть внутренняя спираль — восходящая от реальности и уходящая в космос.
                </Text>

                <Text tag="p" size="h6" className={styles.text}>
                    Две воронки — инь и янь, добро и зло, центробежная спираль и центростремительная, подтверждающие дуальность устройства нашей реальности.
                </Text>

                <div className={styles.socionModel}>
                    <img src={require('../../assets/socion/socion-mobile.png')} alt='Простая модель социона.' className={styles.socionModelImage} />
                </div>

                <PageBreak>Восходящая внешняя спираль</PageBreak>

                <div className={styles.spiralBlock}>
                    <img src={require('../../assets/socion/spiral-air-fire.png')} alt='Восходящая внешняя спираль' className={styles.spiralImage} />

                    <Text tag="p" size="h6" className={styles.text}>
                        Состоит из квадр <mark className={styles.air}>Воздуха</mark> и <mark className={styles.fire}>Огня</mark>: <br /> 4 диад — дуальных пар и 8 типов.
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Cпираль строителей реальности из хаоса идей.
                </Text>

                <Text tag="p" className={styles.text}>
                    Где <mark className={styles.air}>две воздушных диады</mark> генерируют и подготавливают идеи для реализации <mark className={styles.fire}>двумя огненными диадами</mark>.
                </Text>

                <Text tag="p" className={styles.text}>
                    Субъективисты со своим внутренним миром, которые пытаются воплотить его в реальности.
                </Text>

                <div className={styles.spiralAirFire}>
                    <img src={require('../../assets/socion/dual-pair-01.png')} alt='Первая дуальная пара. Новатор и Дипломат.' className={styles.dualPicture} />
                    <img src={require('../../assets/socion/dual-pair-02.png')} alt='Вторая дуальная пара. Энтузиаст и Аналитик.' className={styles.dualPicture} />
                    <img src={require('../../assets/socion/dual-pair-03.png')} alt='Третья дуальная пара. Инспектор и Наставник.' className={styles.dualPicture} />
                    <img src={require('../../assets/socion/dual-pair-04.png')} alt='Четвертая дуальная пара. Лирик и Лидер.' className={styles.dualPicture} />
                </div>

                <PageBreak>Нисходящая внутренняя спираль</PageBreak>

                <div className={styles.spiralBlock}>
                    <img src={require('../../assets/socion/spiral-earth-water.png')} alt='Нисходящая внутренняя спираль' className={styles.spiralImage} />

                    <Text tag="p" size="h6" className={styles.text}>
                        Состоит из квадр <mark className={styles.water}>Воды</mark> и <mark className={styles.earth}>Земли</mark>: <br /> 4 диад — дуальных пар и 8 типов.
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Спираль жителей реальности, реформирующие ее из наблюдений и своего опыта.
                </Text>

                <Text tag="p" className={styles.text}>
                    Где <mark className={styles.water}>две водные диады</mark> наблюдают и пробуют на прочность построенный мир, а <mark className={styles.earth}>две земные диадами</mark> совершенствуют жизнедеятельность и не дают делать опрометчивых поступков.
                </Text>

                <Text tag="p" className={styles.text}>
                    Объективисты с четким пониманием реальных обстоятельств, которые живут и развивают общество, исходя из наблюдений и проб.
                </Text>

                <div className={styles.spiralEarthWater}>
                    <img src={require('../../assets/socion/dual-pair-05.png')} alt='Пятая дуальная пара. Критик и Политик' className={styles.dualPicture} />
                    <img src={require('../../assets/socion/dual-pair-06.png')} alt='Шестая дуальная пара. Хранитель и Предприниматель.' className={styles.dualPicture} />
                    <img src={require('../../assets/socion/dual-pair-07.png')} alt='Седьмая дуальная пара. Администратор и Гуманист.' className={styles.dualPicture} />
                    <img src={require('../../assets/socion/dual-pair-08.png')} alt='Восьмая дуальная пара. Советчик и Мастер.' className={styles.dualPicture} />
                </div>

                <PageBreak>Рационалы и иррационалы</PageBreak>

                <Text tag="p" size="h6" className={styles.text}>
                    Рационалы составляют костяк разумного человечества. Договоренности, традиции и уклад.
                </Text>

                <Text tag="p" className={styles.text}>
                    Они не хотят ничего менять и очень любят шаблоны и устои. При отсутствии иррационалов достаточно быстро превратятся в унылое болото.
                </Text>

                <hr />

                <Text tag="p" size="h6" className={styles.text}>
                    Иррационалы являются возмутителями спокойствия и двигателями инноваций в обществе.
                </Text>

                <Text tag="p" className={styles.text}>
                    Им скучно в однообразной деятельности, он ставят под сомнение любые принципы и устои. Переворачивают и колышут «болото» рационалов.
                </Text>

                <PageBreak>Этики и логики</PageBreak>

                <Text tag="p" size="h6" className={styles.text}>
                    Логики — строители материального мира, науки и прочей неодушевленной части человеческой жизнедеятельности.
                </Text>

                <Text tag="p" size="h5" color="accent" className={styles.text}>
                    Это информационная половина человечества, представленная на 70% мужчинами.
                </Text>

                <Text tag="p" className={styles.text}>
                    Они познают и осваивают мир через объективные данные, внешним способом. Исходят из необходимости или пользы, которую им дает вещь или человек. К людям логики во многом относятся так же, как к стандартным объектам, ценность которых в выполнении той или иной функции.
                </Text>

                <hr />

                <Text tag="p" size="h6" className={styles.text}>
                    Этики — мастера человеческих душ и взаимоотношений, эмоций и настроений. Одушевленных и неосязаемых субстанций.
                </Text>

                <Text tag="p" size="h5" color="accent" className={styles.text}>
                    Это энергетическая половина человечества, представленная на 70% женщинами.
                </Text>

                <Text tag="p" className={styles.text}>
                    Для них характерно субъективное, личностно окрашенное отношение не только к людям, но и к тем предметам, которые их окружают. Наделяют их чем-то наподобие «характера», внутренних психических качеств. Особенно этики склонны к одушевлению природы.
                </Text>


                <hr />

                <EndPoint />
            </WhiteCard>
        </AppScrollbar >
    );
}