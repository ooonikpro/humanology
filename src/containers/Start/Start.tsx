import React from 'react';
import styles from './Start.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function Menu() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Начало</Text>
                <AuthorLine readTime='2'>äлеша</AuthorLine> 

            </WhiteCard>
        </div>
    );
}