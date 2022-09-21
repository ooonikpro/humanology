import React from 'react';
import { useParams } from 'react-router-dom';
import { PeopleCard } from '../../../components/PeopleCard';
import { Text } from '../../../components/Text';
import { WhiteCard } from '../../../components/WhiteCard';
import { Socionics } from '../../../types';
import styles from './SociotypesPeople.module.scss';
import { PEOPLE } from '../../../constants/people';
import { EndPoint } from '../../../components/EndPoint';

export default function SociotypesPeople() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;

    const people = PEOPLE.filter((item) => item.id === id);

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Люди</Text>
                <div className={styles.people}>
                    {
                        people.map((item, $index) => (
                            <PeopleCard {...item} key={$index} />
                        ))
                    }
                </div>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
