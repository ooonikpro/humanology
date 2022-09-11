import React from 'react';
import styles from './Clubs.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';


export default function Clubs() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Клубы</Text>
                <AuthorLine text='Читать 5 минут' iconName='Time'>Неизвестен</AuthorLine>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}