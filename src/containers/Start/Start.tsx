import React from 'react';
import styles from './Start.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';

export default function Start() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Начало</Text>
                <AuthorLine text="Читать меньше минуты" iconName="Time">äлеша</AuthorLine>
                <Text tag="p" size="h4" color="accent" font="additional">Это пока Альфаверсия.</Text>
                <Text tag="p" size="base" font="base">Могут присутствовать бесячие баги и зависания. <br />Пока просто перезагружайте страницу.</Text>
                <Text tag="p" size="base" font="base">Тут будет ликбез по соционике и всякие статьи для начинающих постигать истину.</Text>
                <hr />
                <a href='https://teletype.in/@humanology' target="_blank" rel="noreferrer">
                    <BlockLink path="#" label="А пока читайте девблог на Телетайпе" icon="ExternalLink" />
                </a>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}