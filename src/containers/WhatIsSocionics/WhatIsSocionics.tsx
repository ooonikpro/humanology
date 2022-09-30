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

            <Text tag="p" size="large">
                Здесь будет ликбез-статья.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Процитирую Аушру:
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