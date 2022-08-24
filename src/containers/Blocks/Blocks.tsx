import React from 'react';
import styles from './Blocks.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';

export default function Blocks() {
    return (
        <div className={styles.root}>
            <WhiteCard color="beige-title-big">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Блоки и кольца функций</Text>

                <AuthorLine readTime='5'>äлеша</AuthorLine> 

                <Text tag="p" size="h6" className={styles.text}>
                    Каждая функция работает с определенным аспектом жизни.
                </Text>

                <Text tag="p" className={styles.text}>
                    Каждая функция психики человека влияет
                    на его поведение, обозначает определенные признаки характера и побуждает принимать соответствующее
                    только ему решение.
                </Text>
            </WhiteCard>
        </div>
    );
}