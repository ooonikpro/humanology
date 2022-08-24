import React from 'react';
import styles from './Clubs.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function Clubs() {
    return (
        <div className={styles.root}>
            <WhiteCard color="beige-title-big">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Клубы</Text>
                <AuthorLine readTime='5'>äлеша</AuthorLine> 

            </WhiteCard>
        </div>
    );
}