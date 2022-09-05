import React from 'react';
import styles from './Other.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function Other() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Прочее</Text>
                <AuthorLine text='Читать 5 минут' iconName='Time'>Разные</AuthorLine>

            </WhiteCard>
        </div>
    );
}