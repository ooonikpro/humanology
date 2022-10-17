import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ISTP() {
    return (
        <>
            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стимульная группа
            </Text>
            <Text tag="p" color="role" size="h6" className={styles.text}>
                Благосостояние
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Важными стимулами являются хорошее материальное положение, комфортные условия работы.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом в работе для них важно постоянство — неизменный круг общения, постоянные, привычные обязанности. От своей работы они ждут стабильной заработной платы, уверенности в завтрашнем дне.
            </Text>

            <Text tag="p" className={styles.text}>
                За счет них формируется так называемый «средний класс».
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Еще Аристотель писал, что средний класс — основа стабильности любого общества. Если средний класс достаточно многочисленный и доволен своим материальным положением и жизнью в целом, такому обществу удается избежать конфликтов и социальных потрясений.</i>
            </Text>

            <Text tag="p" color="grey" className={styles.text}>
                Читайте подробнее про дам
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/suits/lady" label="Дамы" icon="Lady" />
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
                Нейтральный злой
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Может творить всё что угодно, при условии, что он сможет уйти от ответственности.
            </Text>

            <Text tag="p" className={styles.text}>
                Готов причинять боль, приносить несчастье и уничтожение, причём делает это без оглядки на законы общества или личные права.
            </Text>

            <Text tag="p" className={styles.text}>
                Не имеет склонности к выполнению законов и не питает иллюзий, что следование законам, традициям или собственному моральному кодексу делает его чем-то лучше или благороднее.
            </Text>

            <Text tag="p" className={styles.text}>
                С другой стороны, он не испытывает постоянного стремления к конфликту, подобно хаотично-злому.
            </Text>
        </>
    );
}
