import React from 'react';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import styles from './FunctionsTags.module.scss';
import { PageTitle } from '../../components/PageTitle';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageBreak } from '../../components/PageBreak';
import { AppScrollbar } from 'src/components/AppScrollbar';

export default function FunctionsTags() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Document' back>Бинарные признаки функций</PageTitle>
                <AuthorLine iconName='Time' text='Читать 3 минуты'>Викизнание</AuthorLine>
                <Text tag="p" size="large" className={styles.text}>
                    Каждая из 8-и функций характеризуется тремя ортогональными бинарными признаками:
                </Text>

                <PageBreak>
                    Сильная · Слабая
                </PageBreak>


                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Сильные (управляющие) функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Находятся в блоках Эго и Айди.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Зона собственных способностей. Олицетворяют уверенность и независимость, способность действовать постоянно и эффективно. Собственная точка зрения важнее любой другой, она подлежит распространению в окружающий мир.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Слабые (исполнительные) функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Находятся в блоках Суперэго и Суперайди.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Это совесть и антисовесть человека, по ним происходит подстройка под общество. Зона вечных колебаний и неуверенности. Собственная точка зрения либо отсутствует, либо слаба, так что человека можно достаточно легко склонить к другой точке зрения.
                </Text>

                <PageBreak>
                    Ментальная · Витальная
                </PageBreak>
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Ментальные функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Входят в ментальное (активное) кольцо и контролируются сознанием.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Мир и себя человек видит по этим функциям как бы извне, стремится к объективности и универсальности. Выдаваемая информация обезличена, находит своё воплощение в словесной форме.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Витальные функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Входят в витальное (пассивное) кольцо и сознательно практически не контролируются.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Мир познается через собственные ощущения и переживания, через проекцию внутрь. Характерна субъективность, индивидуальное представление. Результат как правило воплощается в деятельности, рассуждения идут от первого лица.
                </Text>

                <PageBreak>
                    Акцептная · Продуктивная
                </PageBreak>
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Акцептные функции
                </Text>
                <Text tag="p" className={styles.text}>
                    Познающие окружающий мир, они первые в блоках получают информацию извне. Их задача — получить модель действительности, их цель — понимание того, что вокруг происходит.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Продуктивные функции
                </Text>
                <Text tag="p" className={styles.text}>
                    Средство изменения действительности. Находясь в модели после акцептных функций, они находят решения задач поставленных перед ними, таким образом они не отражают действительность, как акцептные, а генерируют искаженную, воображаемую картину мира, представляющую собой решение поставленных перед ними задач.
                </Text>

                <PageBreak>
                    Инертная · Контактная
                </PageBreak>

                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Инертные (эталонные) функции
                </Text>
                <Text tag="p" className={styles.text}>
                    Достаточно ригидны в своей работе, они мало подвержены внутренним изменениям. Им требуется внешний импульс достаточной силы для того, чтобы в них что-то поменялось. Свойственна достаточно долгая реакция, и нередка фиксация состояния, к которому их привело внешнее воздействие. Им свойственно относительное постоянство.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Контактные функции
                </Text>
                <Text tag="p" className={styles.text}>
                    Весьма подвижны и способны хорошо управлять своим внутренним состоянием. Именно с них идёт первичная реакция на воздействие извне. Они производят начальную обработку поступившей информации, они же порождают окончательные решения. Активность определяется тем, что происходит вокруг или текущими задачами, между которыми они легко переключаются.
                </Text>

                <PageBreak>
                    Вербальная · Невербальная
                </PageBreak>

                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Вербальные (дискутивные) функции — Сверхценности
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Находятся в блоках Эго и Суперайди.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Обеспечивают активный обмен информацией между людьми, информация по этим функциям интересна, и легко обсуждается. Свойственно стремление к саморазвитию.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Невербальные (лаборные, кооперативные) функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Находятся в блоках Суперэго и Айди.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Аспекты этих функций не подлежат обсуждению, предпочитается взаимопомощь делом.
                    Активность ограничена насущными потребностями и запросом общества.
                </Text>

                <PageBreak>
                    Оценочная · ситуативная
                </PageBreak>

                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Оценочные функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Инертные функции ментального кольца и контактные функции витального.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Через них происходит оценка человеком людей (ментальные инертные), а также ожидание оценки себя со стороны окружающих (витальные контактные). И эти оценки слабо подвержены изменениям.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Ситуативные функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Контактные функции ментального кольца и инертные витального</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Этим функциям, наоборот, свойственна подстройка под текущую ситуацию, и избегание ставить оценки другим. Напротив, оценки ставятся только конкретным действиям.
                </Text>

                <PageBreak>
                    Внешняя · внутренняя
                </PageBreak>

                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Внешние (постоянные) функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Акцептные функции ментального кольца и продуктивные функции витального.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Содержащие аспекты одного цвета, чёрного у экстравертов и белого у интровертов. Первым свойственно считать соответствующие аспекты неизменной сутью окружающего мира, и стремиться оставить его в том виде, в котором он есть. Внешние изменения воспринимаются как нечто неизбежное но несвойственное.
                </Text>

                <hr />
                <Text tag="p" size="large" color="accent" className={styles.text}>
                    Внутренние (переменные) функции
                </Text>
                <Text tag="p" size="large" className={styles.text}>
                    <i>Продуктивные функции ментального кольца и акцептные витального.</i>
                </Text>
                <Text tag="p" className={styles.text}>
                    Этим функциям свойственно видеть в своих аспектах элементы, которые следует изменять в первую очередь. Они либо активно воздействуют на мир, либо пассивно ожидают от мира изменений.
                </Text>
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}