import React from 'react';
import styles from './WhatIsSocionics.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function WhatIsSocionics() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle back iconName='Fractal'>Что это?</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>äлёша</AuthorLine>

            <Text tag="p" size="h5" className={styles.text}>
                Это все соционика и MBTI.
            </Text>

            <Text tag="p" size="large">
                Много копий сломано с 1980-ых годов. Были несколько волн повального увлечение соционикой в СССР и России, на западе точно такая же ситуация с MBTI. Волны, как правило, носят стихийный характер.
            </Text>

            <Text tag="p" size="large">
                Замечая закономерности, а особенно роли людей, их функциональные особенности в социальном поведении и в разных других областях жизнедеятельности, тяжело отрицать наличие схожих людей и их типового поведения.
            </Text>

            <Text tag="p" size="large">
                Если наблюдать за людьми более внимательно, как делал Дроздов в своей легендарной передаче «В мире животных», то можно обнаружить очень много интересных деталей — автоматические жесты, похожая мимика, походка и прочие особенности лимитированного количества человеческих «скафандров».
            </Text>

            <hr />

            <Text tag="p" size="large">
                Есть смелая гипотеза, которой я придерживаюсь, но не могу пока доказать.
            </Text>

            <Text tag="p" size="h6" color="accent">
                Соционика и тип информационнго метаболизма — это атрибут физический. Человеческой клетки.
                Она пронизывает всю жизнедеятельность нашего организма на микроуровне. Уровне генетического кода — ДНК и гистонов.
            </Text>

            <Text tag="p" size="large">
                Уверен, что спустя некоторое время мы, как человечество, обнаружим неопровержимые доказательства, и возможно анализы на гистосовместимость станут менее дорогой процедурой.
                Но это минимальные преимущества, что дают эти знания и их применение.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Процитирую Аушру, она еще давно все сказала:
            </Text>

            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Основная цель — показать, что в проявлениях любви, как и во всех других областях человеческого общения, нет правых и неправых, хороших и плохих.
            </Text>

            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Есть лишь люди с подходящими и неподходящими типами личности.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Кроме того, есть люди с менее уравновешенной психикой. Это те, чье окружение образовано из людей с неподходящими типами.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Есть люди с более уравновешенной психикой.<br /> Чье окружение образовано из людей с подходящими типами.
            </Text>

            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Люди всегда мечтали жить в хороших отношениях с друг другом, мечтали быть понятыми и понимать других.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Хотели видеть кругом доброжелательность и сами быть доброжелательными. Мечтали все, удавалось немногим.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Сегодня мы знаем, что нельзя мечтать о по-настоящему гармоничной, мирной и творческой жизни общества, пока люди не поняли своей разнотипной природы и скрытых за своими типами закономерностей общения.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Совершенно новым этапом в жизни общества будет такая его реорганизация, которая каждому человеку предоставит возможность для достаточно количества контактов с нужными для его психосоматического здоровья людьми.
            </Text>

            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Трудно сказать, когда сбудется эта мечта, но другой дороги нет.
            </Text>

            <Text tag="p" size="body" color="accent" className={styles['text-right']}>
                <i>Аушра Аугустинавичюте, 1983</i>
            </Text>

            <hr />

            <EndPoint />
        </WhiteCard>
    );
}