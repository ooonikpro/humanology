import React from 'react';
import styles from './Other.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { BlockLink } from '../../components/BlockLink';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function Other() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='SquareDots'>Прочее</PageTitle>
                <AuthorLine text='Пока нечего читать' iconName='Time'>Разные</AuthorLine>
                <Text tag="p" className={styles.text}>
                    Интересные статьи уже ниже. Будут добавлятся еще.
                </Text>

                <div className={styles.linkblock}>
                    <BlockLink path="/quadras/compatibility" label="Сексуальные программы квадр" icon="Dildo" />
                    <BlockLink path="/clubs/compatibility" label="Совместимость психосексуальных групп" icon="Cockring" />
                </div>
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}