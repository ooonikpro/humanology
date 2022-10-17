import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ENFJ() {
    return (
        <>
            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стимульная группа
            </Text>
            <Text tag="p" color="role" size="h6" className={styles.text}>
                Уникальность
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Стимулируются к работе тем, что ново, необычно, нестандартно, нетрадиционно, оригинально. Увлекаются новыми перспективными направлениями деятельности, науки, религии.
            </Text>

            <Text tag="p" className={styles.text}>
                В работе их привлекает необычность, увлекательность задачи, ее сложность, далеко идущие и масштабные последствия предлагаемых проектов. Они способны заглянуть в будущее, увидеть отдаленные, невидимые другим перспективы, и, как интуиты, впоследствии оказываются правы.
            </Text>

            <Text tag="p" className={styles.text}>
                Очень часто они выступают в роли первопроходцев, первооткрывателей, несут миру новые идеи, новые направления мысли. Многие люди не способны их понять, так как представители этой группы видят далеко вперед своего времени.
            </Text>

            <Text tag="p" color="grey" className={styles.text}>
                Читайте подробнее про рыцарей
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/suits/knight" label="Рыцари" icon="Knight" />
            </div>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Темперамент
            </Text>
            <div className={styles.pair}>
                <Text tag="p" color="role" size="h6" className={styles.text}>
                    Холерик
                </Text>
                <Icon name="Choleric" size={{ width: 40, height: 16 }} color="water" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Линейно-напористый
                </Text>
            </div>


            <Text tag="p" size="h6" className={styles.text}>
                Отличаются как внутренним, так и внешним беспокойством.
            </Text>

            <Text tag="p" className={styles.text}>
                Самый неуравновешенный: когда на пути холерического социотипа возникает внезапное препятствие, из-за экстраверсии он не в силах сдержать возбуждение — оно выплескивается наружу.
            </Text>

            <Text tag="p" className={styles.text}>
                Обойти препятствие ему тоже трудно из-за своей рациональной прямолинейности.
            </Text>

            <Text tag="p" className={styles.text}>
                Взрывным холерическим темпераментом отличается и нервозный <mark className={styles.fire}>Администратор</mark>, и беспокойный <mark className={styles.water}>Предприниматель</mark>, и взволнованный <mark className={styles.water}>Наставник</mark>, и обладающий сильным эмоциональным прессингом <mark className={styles.fire}>Энтузиаст</mark>.
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
                Страстный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Обмен впечатлениями, эмоциями, переживаниями. Самый активный стиль общения.
            </Text>

            <Text tag="p" className={styles.text}>
                Страстные стремятся заразить окружающих своей энергией и побудить к действиям.
            </Text>

            <Text tag="p" className={styles.text}>
                Общение страстных — активный поиск чувств. Зажигалки — хорошо видят настроения собеседников, чувствуют атмосферу компании. Они хорошо ощущают эмоции других людей, четко улавливают энергетику окружающего пространства.
            </Text>

            <Text tag="p" className={styles.text}>
                Поэтому люди, с их чувствами и переживаниями, составляют основной интерес для зажигалок. Для них важна не сама информация, а то, какой эффект она окажет на окружающих. Они стремятся зажечь, включить, активировать окружающих. Накачать их эмоциями, пробудить в них тягу к свершениям.
            </Text>

            <Text tag="p" className={styles.text}>
                Общение ощущается, как состоявшееся, если при этом произошел обмен эмоциями. Если они видят, что зажгли искру в собеседнике.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Они наиболее общительны в неформальной обстановке, где уместны свободные эмоции.
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
