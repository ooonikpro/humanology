import React from 'react';
import { useParams } from 'react-router-dom';
import { PeopleCard } from 'src/components/PeopleCard';
import { Text } from 'src/components/Text';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import styles from './SociotypesPeople.module.scss';
import { PEOPLE } from 'src/constants/people';

export default function SociotypesPeople() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;

    const people = PEOPLE.filter((item) => item.id === id);

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Люди</Text>
                <div className={styles.text}>
                    {
                        people.map((item, $index) => (
                            <PeopleCard {...item} key={$index}/>
                        ))
                    }
                </div>
            </WhiteCard>
        </div>
    );
}
