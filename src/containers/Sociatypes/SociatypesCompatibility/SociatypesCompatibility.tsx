import React from 'react';
import styles from './SociatypesCompatibility.module.scss';
import { WhiteCard } from 'src/components/WhiteCard';
import { Text } from 'src/components/Text';

export default function SociatypesCompatibility() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Совместимость</Text>
            </WhiteCard>
        </div>
    );
}
