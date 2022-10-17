import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function INFJ() {
    return (
        <>
            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стимульная группа
            </Text>
            <Text tag="p" color="role" size="h6" className={styles.text}>
                Самодостаточность
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Включается в работу стимулом самоценности — то есть возможностью заниматься любимым делом.
            </Text>

            <Text tag="p" className={styles.text}>
                Эти люди не стремятся сделать карьеру, получить хорошую должность или более высокий оклад. Самое важное для них — заниматься тем, что интересно и значимо лично для них, в привычном для них ритме, чтобы их никто не торопил.
            </Text>

            <Text tag="p" className={styles.text}>
                У этих социотипов очень богатый внутренний мир, для них важно постоянное самосовершенствование, ради этого они готовы тратить свои силы.
            </Text>

            <Text tag="p" className={styles.text}>
                Их работа обязательно должна быть связана с интересующими их идеями, проблемами, задачами, тогда они будут работать с интересом и хорошими результатами.
            </Text>

            <Text tag="p" className={styles.text}>
                Конкуренция на работе их не интересует, это как правило скромные труженики, но надо признать, что представители именно этой группы разрабатывают самые глубокие теории и идеи.
            </Text>

            <Text tag="p" color="grey" className={styles.text}>
                Читайте подробнее про пажей
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/suits/paige" label="Пажи" icon="Paige" />
            </div>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Темперамент
            </Text>
            <div className={styles.pair}>
                <Text tag="p" color="role" size="h6" className={styles.text}>
                    Флегматик
                </Text>
                <Icon name="Phlegmatic" size={{ width: 40, height: 16 }} color="air" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Уравновешенно-стабильный
                </Text>
            </div>


            <Text tag="p" size="h6" className={styles.text}>
                Cпокойны как внешне, так и внутренне.
            </Text>

            <Text tag="p" className={styles.text}>
                Это самый уравновешенный из всех темпераментов. Интровертная рациональность делает их сдержанными и закрытыми, не отвлекающимися на внешние раздражающие факторы.
            </Text>

            <Text tag="p" className={styles.text}>
                Это вовсе не означает, что флегматик не способен вспылить. Просто, чтобы довести его до такого состояния, надо потратить много сил.
            </Text>

            <Text tag="p" className={styles.text}>
                Волевой выдержкой отличаются <mark className={styles.earth}>Инспектор</mark> и <mark className={styles.earth}>Хранитель</mark>, терпеливостью и покладистостью — <mark className={styles.air}>Аналитик</mark> и <mark className={styles.air}>Гуманист</mark>.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мышление
            </Text>

            {
                DETAIL_CARD_MINDS.slice(0, 1).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
            }

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стиль общения
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Душевный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Женский стереотип коммуникабельности.
            </Text>

            <Text tag="p" className={styles.text}>
                В общении делятся с другими знаками душевной привязанности, выражают своё отношение к окружающим людям и явлениям.
            </Text>

            <Text tag="p" className={styles.text}>
                Общение душевных — пассивный поиск чувств. Они быстро и уверенно выбирают импонирующего партнёра, но не стремятся его завоевать, а показывают знаки симпатии и ожидают от него ответных действий. Также легко отзываются на активность объекта симпатии.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо чувствуют состояние собеседника. Часто в разговоре становятся на его место, чтобы ощутить его мотивы и чувства. Их главный интерес заключается в том, чтобы уловить, как кто к кому относится. Они утешают и наставляют, осуществляют душевную поддержку и сочувствуют. И это наполняет содержанием их жизнь.
            </Text>

            <Text tag="p" className={styles.text}>
                В общении с ними осуществляется обмен знаками хорошего или плохого отношения. Говорить могут об опыте, о погоде - это вербально. А 80% невербально — «я тебя ненавижу» или «ты мне нравишься».
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Создают связи между людьми.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мировоззрение
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Нейтральный добрый
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Склонен помогать другим в меру своих сил, не принимая каких-либо жёстких рамок.
            </Text>

            <Text tag="p" className={styles.text}>
                Для достижения благих целей он может помогать королям и правителям, но может действовать и вопреки закону, если это ведёт к большему благу.
            </Text>

            <Text tag="p" className={styles.text}>
                Говорит правду, держит данное слово, помогает нуждающимся и борется с несправедливостью. Он верит, что зло должно быть наказано в соответствии с законом.
            </Text>

            <Text tag="p" className={styles.text}>
                Нередко идут на личные жертвы ради того, чтобы помогать другим, но в таких случаях они совершают конкретный продуманный добрый акт, а не просто гибнут за идею или действуют по внезапному альтруистическому наитию, в котором потом разочаровываются.
            </Text>
        </>
    );
}
