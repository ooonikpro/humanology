import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ISTJ() {
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
                    Флегматик
                </Text>
                <Icon name="Phlegmatic" size={{ width: 40, height: 16 }} color="earth" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Уравновешенно-стабильный
                </Text>
            </div>


            <Text tag="p" size="h6" className={styles.text}>
                Спокойны как внешне, так и внутренне.
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
                Законопослушный нейтральный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Действует в соответствии с законами, традициями или собственным моральным кодексом. Для него важнее всего порядок и организованность.
            </Text>

            <Text tag="p" className={styles.text}>
                Может верить в личный моральный кодекс и жить по его стандартам, либо верить в общественный порядок и поддерживать сильное, организованное правительство.
            </Text>

            <Text tag="p" className={styles.text}>
                В любом случае он ставит общественное благо и соблюдение выбранного набора правил впереди собственной выгоды и безопасности.
            </Text>

            <Text tag="p" className={styles.text}>
                Удачное мировоззрение для того, кто хочет иметь жесткие жизненные принципы, но не впадать в фанатизм.
            </Text>
        </>
    );
}
