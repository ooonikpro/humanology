import React from 'react';
import styles from './History.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function History() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h4" size="h4" font="additional" className={styles.title}>История</Text>
                <AuthorLine text='Читать 5 минут' iconName='Time'>Неизвестен</AuthorLine>

            </WhiteCard>
        </div>
    );
}