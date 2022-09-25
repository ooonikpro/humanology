import React from 'react';
import styles from './Disclaimer.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';

export default function Disclaimer() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='AlertSquare'>Дисклеймер</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>äлеша</AuthorLine>

            <Text tag="p" className={styles.text}>
                Верить, проверять, доверять соционике — дело ваше.
                Убедить до появления какого-то материального индикатора не представляется возможным.
            </Text>

            <Text tag="p" size="h6" className={styles.text} color="accent">
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

            <Text tag="p" size="h6" className={styles.text}>
                Основная цель — показать, что в проявлениях любви, как и во всех других областях человеческого общения, нет правых и неправых, хороших и плохих.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Есть лишь люди с подходящими и неподходящими типами личности.
            </Text>

            <Text tag="p" className={styles.text}>
                Кроме того, есть люди с менее уравновешенной психикой. Это те, чье окружение образовано из людей с неподходящими типами.
            </Text>

            <Text tag="p" className={styles.text}>
                Есть люди с более уравновешенной психикой.<br /> Чье окружение образовано из людей с подходящими типами.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Люди всегда мечтали жить в хороших отношениях с друг другом, мечтали быть понятыми и понимать других.
            </Text>

            <Text tag="p" className={styles.text}>
                Хотели видеть кругом доброжелательность и сами быть доброжелательными. Мечтали все, удавалось немногим.
            </Text>

            <Text tag="p" className={styles.text}>
                Сегодня мы знаем, что нельзя мечтать о по-настоящему гармоничной, мирной и творческой жизни общества, пока люди не поняли своей разнотипной природы и скрытых за своими типами закономерностей общения.
            </Text>

            <Text tag="p" className={styles.text}>
                Совершенно новым этапом в жизни общества будет такая его реорганизация, которая каждому человеку предоставит возможность для достаточно количества контактов с нужными для его психосоматического здоровья людьми.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Трудно сказать, когда сбудется эта мечта, но другой дороги нет.
            </Text>

            <Text tag="p" size="body" color="accent" className={styles['text-right']}>
                <i>Аушра Аугустинавичюте, 1983</i>
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Все претензии по оскорблению чувств верующих в науку, желательно в развернутом виде, принимаются на электронную почту <a href="mailto:feedback@humanology.app">feedback@humanology.app</a>.
            </Text>

            <Text tag="p" className={styles.text}>
                Если вы нашли ошибку или неточность — напишите, пожалуйста, туда же.
                За скриншот и версию браузера / телефонной оси — лучи добра.
            </Text>
            <EndPoint />
        </WhiteCard>
    );
}