import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function INTP() {
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
                DETAIL_CARD_MINDS.slice(1, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
            }

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стиль общения
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Хладнокровный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Обмен необходимой и недостающей информацией, фактами, теориями, их обсуждение и объяснение. Самый малоактивный стиль.
            </Text>

            <Text tag="p" className={styles.text}>
                Обсуждение идёт в рамках устоявшихся норм и правил, неспешно и бесстрастно. Они могут при необходимости охладить накал эмоций, направить бурлящую энергию коллег в конструктивное русло, хотя сами инициаторами обычно не являются.
            </Text>

            <Text tag="p" className={styles.text}>
                Информаторы постоянно оценивают смысл и целесообразность тех или иных действий. Мир они воспринимают через призму своих отношений к жизни. Они четко отличают нужные им связи от ненужных, интересные от неинтересных.
            </Text>

            <Text tag="p" className={styles.text}>
                Их стиль общения заключается в обмене информацией. Интровертные логики постоянно о чем-то думают, анализируют. Формат общения: «Вот моя информация — вот твоя». Мы ей обмениваемся.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Позиция в общении — пассивное ожидание чувств. Им свойственно стремление показать свою рассудительность.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мировоззрение
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Истинно нейтральный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Как правило, не имеет явных склонностей к добру или злу, к порядку или хаосу.
            </Text>

            <Text tag="p" className={styles.text}>
                Поддержка баланса и борьба с крайностями добра и зла, порядка и хаоса.
            </Text>

            <Text tag="p" className={styles.text}>
                Верят, что в долгосрочном плане равновесие предпочтительнее крайностей. Настойчиво упирают на необходимость наличия равновесия.
            </Text>

            <Text tag="p" className={styles.text}>
                Умеренное по всем параметрам существование. Может предпочитать добро злу — в конце концов, он предпочёл бы жить среди добрых соседей — но он не ставит своей целью борьбу за победу добра в мировом масштабе. Также он может совершать и злые поступки, но не по идейной приверженности, а по обстоятельствам.
            </Text>
        </>
    );
}
