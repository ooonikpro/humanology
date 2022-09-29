import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Dual() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Dual' back>Дуальные</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>
            <div className={styles.intertypeIcons}>
                <Icon name="Dual" size={128} className={styles.intertypeIcon} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>
            <Text tag="p" size="h5" className={styles.intertypeText}>
                Взаимопомощь, баланс
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Самые комфортные и благоприятные отношения во всем соционе.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                Под дуала не нужно подстраиваться — он воспринимает вас таким, какой вы есть. С дуалом можно всегда оставаться самим собой, при этом, получая все плюсы комфортных отношений — разделение обязанностей, возможность заниматься интересным и любимым делом, отсутствие конфликтных ситуаций.
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Дуала очень сложно распознать.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                На первый взгляд этот человек может показаться скучным и «никаким» — ведь между вами нет того внутреннего напряжения, которое обычно появляется при попытках завязать какие-либо отношения. Кажется, что дуал – слишком простой человек, поэтому он не заслуживает внимания.
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Сближение с дуалом происходит естественно и беспроблемно.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                Уже совсем скоро появляется ощущение счастья и защищенности, ведь все слабые места (одномерные и двухмерные функции) прикрыты, не нужно работать в зоне неуверенности, доказывать что-то, можно просто наслаждаться и быть самим собой.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Дуальная пара является самодостаточной.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Все слабые стороны одного прикрываются сильными сторонами другого. То, что одному из дуальной пары делать легко, другим воспринимается как невероятная помощь и встречается с благодарностью.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Дуалам никто не нужен.
            </Text>

            <Text tag="p" size="large" color="accent" className={styles.text}>
                <i>К примеру, дуальные родители могут настолько замкнуться на себе, что их ребенок будет ощущать себя лишним, поскольку родители настолько близки друг к другу, настолько растворены в своих отношениях, что кажется, им даже дети не нужны.</i>
            </Text>

            <Text tag="p" size="large" color="accent" className={styles.text}>
                <i>Разумеется, это крайний случай, но, тем не менее, известно много дуальных пар, которые и в гости ходят только вместе, и в отпуска ездят вдвоем, и по отдельности их застать действительно сложно.</i>
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Дуалы очень сильно привязываются друг к другу.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Сильнее это ощущается тогда, когда они по какой-то причине на время расстаются. В диаде,дуальной паре, при успешной дуализации люди способны сильно поднять свою самооценку, получить реальную поддержку друг от друга, вместе справиться со сложностями и быть невероятно близкими друг другу людьми до конца.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Гармония, удовлетворение потребностей, глубоко содержательное интересное общение при полном взаимопонимании, энергетическое насыщение, подъем настроения, искренность, общность ценностей, защита друг друга, взаимопомощь, активность, уравновешенность, самовоспитание, творческое развитие.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Недоразумения, острая душевная боль.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Гармония</Text>
                <Text tag="li" size="h6">Усовершенствование</Text>
                <Text tag="li" size="h6">Прогресс</Text>
            </Text>

            <EndPoint />
        </div>
    );

}
