import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function INFP() {
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
                    Меланхолик
                </Text>
                <Icon name="Melancholic" size={{ width: 40, height: 16 }} color="air" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Восприимчиво-адаптивный
                </Text>
            </div>


            <Text tag="p" size="h6" className={styles.text}>
                Спокойны внешне, но беспокойны внутри.
            </Text>

            <Text tag="p" className={styles.text}>
                Они подобно сангвиникам занимают промежуточное значение по степени уравновешенности нервной системы, сдвигаясь, однако, ближе к полюсу неуравновешенности.
            </Text>

            <Text tag="p" className={styles.text}>
                Меланхолики – интроверты, поэтому свои внутренние переживания они скрывают под маской спокойствия или, наоборот, оживленности. По этой причине их легко спутать с другими темпераментами.
            </Text>

            <Text tag="p" className={styles.text}>
                Проблема любого меланхолика – поиск внутренней гармонии, которую так легко разрушить грубыми воздействиями внешних факторов.
            </Text>

            <Text tag="p" className={styles.text}>
                Меланхолическими депрессиями страдают как оптимистически настроенные <mark className={styles.earth}>Дипломат</mark> и <mark className={styles.air}>Лирик</mark>, так и пессимисты <mark className={styles.air}>Критик</mark> и <mark className={styles.earth}>Мастер</mark>.
            </Text>

            <Text tag="p" className={styles.text}>
                Их чувствительная нервная система тонко воспринимает несовершенство мира, порождающее страдания, и заставляет прятаться либо за наигранным оптимизмом, либо за подчеркнутым пессимизмом.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мышление
            </Text>

            {
                DETAIL_CARD_MINDS.slice(3, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
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
                Хаотичный добрый
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Действует в соответствии с велениями своего сердца, не обращая внимания на мнение окружающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Он совершает добрые поступки не по букве закона, а по зову своей души. Он считает неверным, когда кто-либо пытается запугать других и заставить их действовать определённым образом.
            </Text>

            <Text tag="p" className={styles.text}>
                Его ведёт по жизни собственный «моральный компас», который указывает на добро, хотя это направление может не соответствовать пожеланиям общества.
            </Text>

            <Text tag="p" className={styles.text}>
                Удачно комбинирует свободомыслие с добродушием.
            </Text>
        </>
    );
}
