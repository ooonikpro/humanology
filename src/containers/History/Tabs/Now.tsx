import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';

export default function Now() {
    return (
        <>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>

            {/* <div className={styles.person}>
                <img src={require('../../../assets/history/katrin.png')} alt="Кэтрин и Изабель Бриггс" className={styles.userpic} />
                <span className={styles.text}>
                    <Text tag="h2" size="h5" color="accent" className={styles.name}>Современность</Text>
                    <Text tag="p" size="body" color="grey" className={styles.date}>1968, Россия, Санкт-Петербург</Text>
                </span>
            </div> */}

            <Text tag="p" size="h4" font="additional" color="accent">
                Современники
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В процессе сбора информации и написания статьи…
            </Text>
        </>
    );
}
