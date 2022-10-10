import React from 'react';
import styles from './Disclaimer.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function Disclaimer() {
    return (
        <AppScrollbar hideTabs>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle back iconName='Glvrd'>Дисклеймер</PageTitle>
                <AuthorLine text='Читать 5 минут' iconName='Time'>äлёша</AuthorLine>

                <Text tag="p" size="h6" className={styles.text}>
                    Верить, проверять, доверять соционике — дело абсолютно добровольное.
                </Text>

                <Text tag="p" className={styles.text}>
                    Убедить негативно настроенных людей до появления какого-то материального индикатора не представляется возможным. И даже с материальными доказательствами будет сложно.
                </Text>

                <Text tag="p" size="h6" className={styles.text} color="accent">
                    Я попытался собрать продукт для себя, для своего удобства. Если вам тоже зайдет — буду очень рад. Вся информация собрана в интернете, из открытых источников.
                </Text>

                <Text tag="p" className={styles.text}>
                    Источники, как правило, указаны. Если нет — то будем считать это продуктом коллективного бессознательного.
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
        </AppScrollbar>
    );
}