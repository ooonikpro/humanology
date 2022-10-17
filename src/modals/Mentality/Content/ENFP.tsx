import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ENFP() {
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
                    Сангвиник
                </Text>
                <Icon name="Sanguine" size={{ width: 40, height: 16 }} color="water" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Гибко-разворотливый
                </Text>
            </div>

            <Text tag="p" size="h6" className={styles.text}>
                Беспокойны внешне, но спокойные внутри.
            </Text>

            <Text tag="p" className={styles.text}>
                Их можно охарактеризовать как средне-уравновешенные. Из-за внешней активности многие их принимают за холериков, но это не так: после вспышек раздражительности они очень быстро успокаиваются.
            </Text>

            <Text tag="p" className={styles.text}>
                Достаточно переключится на какой-либо другой внешний стимул, что они и делают благодаря иррациональной экстраверсии.
            </Text>

            <Text tag="p" className={styles.text}>
                Настоящий же холерик, пока не выплеснет накопившееся раздражение наружу, не успокоится. Без особых последствий ссорятся и мирятся <mark className={styles.fire}>Политик</mark> и <mark className={styles.fire}>Лидер</mark>, легко переключают свое внимание с раздражающей темы на приятную <mark className={styles.water}>Советчик</mark> и <mark className={styles.water}>Новатор</mark>.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мышление
            </Text>

            {
                DETAIL_CARD_MINDS.slice(2, 3).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
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
