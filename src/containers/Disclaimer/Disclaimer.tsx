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
            <PageTitle back iconName='Glvrd'>Дисклеймер</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>äлёша</AuthorLine>

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