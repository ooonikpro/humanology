import React from 'react';
import styles from './Relationships.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { PageBreak } from '../../components/PageBreak';
import { DETAIL_CARD_INTERTYPE } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function Relationships() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Square2'>Интертипные отношения</PageTitle>

                <AuthorLine text='Читать 7 минут' iconName='Time'>О соционике</AuthorLine>

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Одной из главных причин, почему люди начинают изучать соционику, является упрощение взаимодействия с людьми вокруг себя.
                </Text>

                <Text tag="p" className={styles.text}>
                    С какими-то из 16 типов отношения у вас будут лучше, с какими-то хуже, и это правило работает
                    абсолютно со всеми типами в соционе.
                </Text>

                <Text tag="p" className={styles.text}>
                    К примеру, есть люди, с которыми вы находите общий язык сразу, а есть люди, которых
                    вы не понимаете, и которые не понимают вас.
                    Это абсолютно нормально – нельзя иметь идеальные отношения со всеми.
                </Text>

                <Text tag="p" className={styles.text}>
                    Еще в 1978 году Аушра Аугустинавичуте
                    выделила, что в соционике есть благоприятные типы отношений, есть нейтральные,
                    а есть неблагоприятные.
                </Text>

                <Text tag="p" className={styles.text}>
                    Количество недопонимания и ссор
                    в неблагоприятных отношениях будет
                    на порядок выше, чем в благоприятных.
                </Text>

                <PageBreak>Благоприятные</PageBreak>
                {
                    DETAIL_CARD_INTERTYPE.slice(0, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <PageBreak>Приятные</PageBreak>
                {
                    DETAIL_CARD_INTERTYPE.slice(4, 8).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <PageBreak>Нейтральные</PageBreak>
                {
                    DETAIL_CARD_INTERTYPE.slice(8, 12).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <PageBreak>Неприятные</PageBreak>
                {
                    DETAIL_CARD_INTERTYPE.slice(12, 16).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
