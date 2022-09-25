import React from 'react';
import styles from './Minds.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { DETAIL_CARD_MINDS } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';

export default function Minds() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square10'>Типы мышления</PageTitle>

            <AuthorLine text='Читать 5 минут' iconName='Time'>Валентина Мегедь</AuthorLine>

            <Text tag="p" className={styles.text}>
                Разные стили мышления, соответствующие тем или иным типам личности определяют особенности интеллекта, а значит и склонность к тем или иным видам деятельности.
            </Text>

            <Text tag="p" className={styles.text}>
                Но не только это. Цельность натуры или ее сложность и противоречивость, порождающая множество скрытых внутренних проблем, тоже зависят от стилей мышления, а точнее — от их сочетаний, так как в чистом виде стили мышления, описанные американскими исследователями Харрисоном и Брэмсоном, обычно не встречаются.
            </Text>

            {
                DETAIL_CARD_MINDS.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </WhiteCard>
    );
}
