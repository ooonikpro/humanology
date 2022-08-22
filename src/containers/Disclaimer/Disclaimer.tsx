import React from 'react';
import styles from './Disclaimer.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function Disclaimer() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Дисклеймер</Text>
                
                <Text tag="p" className={styles.text}>
                    Верить, проверять, доверять — дело ваше.
                </Text>

                <Text tag="h6" size="h6" className={styles.text}>
                    Все что тут написано, собрано в интернете <br /> и авторски переработано.
                </Text>

                <Text tag="p" className={styles.text}>
                    Источники, как правило, указаны.
                    Если нет — то будем считать это продуктом коллективного бессознательного.
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    Процитирую Аушру:
                </Text>

                <Text tag="h6" size="h6" color="accent" className={styles.text}>
                    Основная цель — показать, что в проявлениях любви, как и во всех других областях человеческого общения, нет правых и неправых, хороших и плохих.
                </Text>

                <Text tag="h6" size="h6" color="accent" className={styles.text}>
                    Есть лишь люди с подходящими и неподходящими типами личности.
                </Text>

                <Text tag="p" color="accent" className={styles.text}>
                    Кроме того, есть люди с менее уравновешенной психикой.<br /> Это те, чье окружение образовано из людей с неподходящими типами.
                </Text>

                <Text tag="p" color="accent" className={styles.text}>
                    Есть люди с более уравновешенной психикой.<br /> Чье окружение образовано из людей с подходящими типами.
                </Text>

                <Text tag="h6" size="h6" color="accent" className={styles.text}>
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

                <Text tag="h6" size="h6" color="accent" className={styles.text}>
                    Трудно сказать, когда сбудется эта мечта, но другой дороги нет.
                </Text>

                <Text tag="p" className={styles.text}>
                    Аушра Аугустинавичюте, 1983
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    Все претензии по оскорблению чувств верующих в науку, желательно в развернутом виде, принимаются на электронную почту <a href="mailto:feedback@humanology.app">feedback@humanology.app</a>.
                </Text>

                <Text tag="p" className={styles.text}>
                    Если вы нашли ошибку или неточность — напишите, пожалуйста, туда же.
                </Text>
                
            </WhiteCard>
        </div>
    );
}