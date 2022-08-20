import React from 'react';
import styles from './Mindsets.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function Mindsets() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h3" size="h3" className={styles.title}>Типы мышления</Text>

                <Text tag="p" className={styles.text}>
                    Разные стили мышления, соответствующие тем или иным типам личности определяют особенности интеллекта, а значит и склонность к тем или иным видам деятельности.
                </Text>

                <Text tag="p" className={styles.text}>
                    Но не только это. Цельность натуры или ее сложность и противоречивость, порождающая множество скрытых внутренних проблем, тоже зависят от стилей мышления, а точнее — от их сочетаний, так как в чистом виде стили мышления, описанные американскими исследователями Харрисоном и Брэмсоном, обычно не встречаются.
                </Text>
            </WhiteCard>
        </div>
    );
}