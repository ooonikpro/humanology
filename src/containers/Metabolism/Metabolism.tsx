import React from 'react';
import styles from './Metabolism.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function Metabolism() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Информационный метаболизм</Text>
                <AuthorLine readTime='5'>äлеша</AuthorLine> 

            </WhiteCard>
        </div>
    );
}