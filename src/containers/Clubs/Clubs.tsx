import React from 'react';
import styles from './Clubs.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { DETAIL_CARD_CLUBS, DETAIL_CARD_PSYCHOTYPES } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';
import { PageBreak } from '../../components/PageBreak';
import { BlockLink } from '../../components/BlockLink';


export default function Clubs() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square9'>Клубы и психотипы</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Интернет</AuthorLine>

            <Text tag="p" className={styles.text}>
                Квадры дают человеку силы, но полностью в них закрыться никто не хочет — скучно, не хватает разнообразия, некоторых противоречий, которые могли бы быть толчком развития.
            </Text>

            <Text tag="p" className={styles.text}>
                Такую роль исполняют дискуссионные клубы. Они объединяют людей по интересам, способствуют деловому росту, помогают оттачивать и совершенствовать интеллектуальные «боевые» орудия.
            </Text>

            <PageBreak>Клубы</PageBreak>

            <Text tag="p" className={styles.text}>
                Клубы, или установки на род деятельности — это группы по 4 типа, объединённые по следующим признакам:
            </Text>

            <Text tag="p" className={styles.text}>
                Как показывает опыт, принадлежность к клубу легко определить уже на дальней дистанции, она очень хорошо выражается в сознательной деятельности человека, в предпочтении имметодов действий или даже рода занятий.
            </Text>

            <Text tag="p" className={styles.text}>
                Впервые клубы были описаны даже не в соционике, а намного раньше — в типологии Майерс-Бриггс, точнее, в классическом труде И.Б.Майерс «Разные таланты» (Gifts Differing).
                У американцев эти группы называются <em>Career Interest Groups</em> — группы карьерных интересов, они очень хорошо изучены и описаны.
            </Text>

            <Text tag="p" className={styles.text}>
                В соционике эти группы повторно описал Виктор Гуленко, однако при этом добавил и кое-что новое — рекомендации по профориентации и по применению этих групп в педагогике. Григорий Рейнин и Евгений Шепетько описали взаимодействие типов внутри клубов.
            </Text>

            <div className={styles.row}>
                <Text size="body" color="grey">Сенсорик</Text>
                <Text size="body" color="grey">Интуит</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Этик</Text>
                <Text size="body" color="grey">Логик</Text>
            </div>

            {
                DETAIL_CARD_CLUBS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
            }

            <PageBreak>Психосексуальные группы</PageBreak>

            <Text tag="p" className={styles.text}>
                Кроме привычных нам квадр или клубов, также стоит упомянуть разделение на 4 установки, связанные с поведением в отношениях — группы.
            </Text>

            <Text tag="p" className={styles.text}>
                Психосексуальность определяет поведение человека в любовных отношениях и сексе, а также его потребности в данной области.
            </Text>

            <Text tag="p" className={styles.text}>
                Любые отношения между людьми предполагают обмен информацией, а значит, они не могут не зависеть от типов информационного метаболизма.
            </Text>


            <div className={styles.linkblock}>
                <BlockLink path="/psychotypes/compatibility" label="Совместимость психосексуальных групп" icon="Cockring" />
            </div>

            <Text tag="p" className={styles.text}>
                Решительными или «Резолютивными» <i>(от лат. resolvo — разрешаю, распутываю, развязываю)</i> называют Огонь и Вода. Они склонны к жестким, резко разрешающим противоречия волевым актам.
            </Text>

            <Text tag="p" className={styles.text}>
                Воздух и Земля являются рассудительными или «дискутивными» <i>(от лат. discutio — обсуждаю, обговариваю)</i>, то есть, склонными к открытому и широкому обсуждению возникающих по ходу действий противоречий.
            </Text>


            <div className={styles.row}>
                <Text size="body" color="grey">Сенсорик</Text>
                <Text size="body" color="grey">Интуит</Text>
            </div>

            <div className={styles.row}>
                <Text size="body" color="grey">Решительный</Text>
                <Text size="body" color="grey">Рассудительный</Text>
            </div>

            {
                DETAIL_CARD_PSYCHOTYPES.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
            }

            <EndPoint />
        </WhiteCard>
    );
}