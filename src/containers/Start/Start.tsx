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
                <AuthorLine text="Читать меньше минуты" iconName="Time">äлеша</AuthorLine>
                <Text tag="p" size="base" font="base">Это пока Альфаверсия. <br />Могут присутствовать бесячие баги и зависания. <br />Пока просто перезагружайте страницу.</Text>
                <Text tag="p" size="base" font="base">Тут будет ликбез по соционике и всякие объяснялки для начинающих постигать истину.</Text>
                <hr />
                <Text tag="p" size="base" font="base">А пока читайте <a href="https://teletype.in/@humanology">девблог</a></Text>
            </WhiteCard>
        </div>
    );
}