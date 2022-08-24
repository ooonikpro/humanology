import React from 'react';
import styles from './Other.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function Other() {
    return (
        <div className={styles.root}>
            <WhiteCard color="beige-title-big">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Прочее</Text>
                <AuthorLine readTime='5'>äлеша</AuthorLine> 

            </WhiteCard>
        </div>
    );
}