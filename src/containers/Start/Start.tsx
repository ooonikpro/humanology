import React from 'react';
import styles from './Start.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';
import { PageTitle } from '../../components/PageTitle';

export default function Start() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Square0'>Начало</PageTitle>
            <AuthorLine text="Читать меньше минуты" iconName="Time">äлеша</AuthorLine>
            <Text tag="p" size="large" font="base">Тут будет ликбез по соционике и всякие статьи для начинающих постигать истину, пару тестов и руководство для определения на глаз.</Text>
            <Text tag="p" size="h4" color="accent" font="additional">Это пока Альфаверсия.</Text>
            <Text tag="p" size="large" font="base">Могут присутствовать бесячие баги и зависания. <br />Пока просто перезагружайте страницу.</Text>


            <Text tag="p" size="large" font="base">А пока…</Text>
            <div className={styles.linkblock}>
                <a href='https://teletype.in/@humanology' target="_blank" rel="noreferrer">
                    <BlockLink path="#" label="Читайте девблог на Телетайпе" icon="ExternalLink" />
                </a>
                <a href='https://t.me/+zNxs67GvQZljZDAy' target="_blank" rel="noreferrer">
                    <BlockLink path="#" label="Подпишитесь в Телеграмме" icon="Telegram" />
                </a>
            </div>
            <EndPoint />
        </WhiteCard>
    );
}