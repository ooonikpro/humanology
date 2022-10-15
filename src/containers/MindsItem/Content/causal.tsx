import styles from '../MindsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Causal() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Причинно-следственное</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Биоинформер</AuthorLine>
            <Icon name="Causal" size={{ width: 320, height: 180 }} className={styles.image} />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Жесткая последовательность событий. Построение длинных цепочек причин и следствий.
            </Text>
            <Text tag="p" className={styles.text}>
                Мышление аналитическое, позитивное, дедуктивное. Как статики они устойчивы и четки в своей мыслительной деятельности, как эволюторы мыслят процессуально, не пропуская деталей и промежуточных звеньев, и как позитивисты строго идут к одному, единственно верному решению.
            </Text>
            <Text tag="p" className={styles.text}>
                Одни и те же причины приводят к одним и тем же последствиям. Выведение сложного из простого.
            </Text>
            <Text tag="p" size="h6" className={styles.text}>
                Компьютерное мышление — все просчитывается. Программируемое и трудно изменяемое. Тяжело отказываются от выводов. Умеют строго следовать алгоритмам. Хороши в математике.
            </Text>
            <Text tag="p" className={styles.text}>
                Причинно-следственный интеллект известен под синонимичными названиями формально-логическое, или детерминистическое мышление. В обоих случаях подчеркивается его жесткий характер. Речь при таком мышлении оформляется при помощи связок (союзов причины) «так как», «потому что», «следовательно».
            </Text>
            <Text tag="p" className={styles.text}>
                Сам ментальный процесс заключается в построении цепочек причин и следствий. Они сводят объяснение к указанию на производящие причины.
            </Text>
            <Text tag="p" className={styles.text}>
                <i>Если воспользоваться примером Аристотеля, который первым указал на четыре способа объяснения явлений, то причиной существования скульптуры является скульптор, который непосредственно её вылепил.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                В научной сфере так мыслит <mark className={styles.water}>Новатор</mark>, в технико-управленческой сфере — методичный <mark className={styles.earth}>Инспектор</mark>, в социальной сфере просчитывает цепочки материальных интересов <mark className={styles.fire}>Политик</mark>, в гуманитарной же сфере подчинен категорическому императиву <mark className={styles.air}>Гуманист</mark>.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Во-первых, оно воспринимается в социуме как самое авторитетное, убедительное, единственно правильное. В математике оно оформлено как дедуктивно-аксиоматический метод. Владение им требует большой интеллектуальной выносливости.
            </Text>

            <Text tag="p" className={styles.text}>
                Этому стилю мышления присущи большая четкость и сконцентрированность. Особой концентрацией отличается тип <mark className={styles.earth}>Инспектор</mark>. Однако и иррациональный <mark className={styles.fire}>Политик</mark> рассуждает довольно здраво, выводя одно следствие из другого, что предполагает сосредоточение на цепочке шагов.
            </Text>

            <Text tag="p" className={styles.text}>
                Если хотя бы одно звено по какой-либо причине выпадает, то детерминисты теряют ощущение разумной объясненности и затрудняются совершать действия, так как не видят оснований для них.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Но вместе с тем причинно-следственное мышление имеет и свои недостатки.
            </Text>

            <Text tag="p" className={styles.text}>
                Во-первых, оно наиболее искусственное, далекое от законов функционирования живого. Его эффективность простирается на «логическое» оформление уже имеющихся результатов, конструирование рабочих механизмов, но не на принципиально новые открытия.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Первый тупик, в который рискует завести формализация, — это схоластика, то есть беспредметные, хотя и логически безупречные рассуждения.
            </Text>

            <Text tag="p" className={styles.text}>
                Во - вторых, последовательные детерминисты, выводя целое из его частей, попадают еще в один интеллектуальный тупик — ловушку редукционизма.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Этот недостаток заметили еще античные скептики, а в Новое время — Юм, который усомнился в том, что любое событие диктуется строгой причиной. Действительно, строя длинные цепочки причин и следствий, трудно избежать опасности зацикливания, риска попасть в circulus vitiosus — порочный круг в доказательстве.</i>
            </Text>
            <Text tag="p" className={styles.text}>
                В теореме о неполноте формальных систем К. Гёдель утверждает, что любая достаточно сложная система правил или противоречива, или содержит выводы, которые нельзя ни доказать, ни опровергнуть средствами этой системы. Этим установлены границы применимости формальной логики.
            </Text>
            <Text tag="p" className={styles.text}>
                <i>Пользуясь формально-дедуктивным методом, средневековые схоласты, в частности, пытались строго доказать существование Бога. В результате замыкания причины и следствия в круг они пришли к определению Бога как мысли, которая мыслит саму себя.</i>
            </Text>

            <PageBreak>Детерминисты</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div >
    );
}