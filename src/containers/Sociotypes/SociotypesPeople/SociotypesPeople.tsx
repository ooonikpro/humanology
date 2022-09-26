import React from 'react';
import { useParams } from 'react-router-dom';
import { PeopleCard } from '../../../components/PeopleCard';
import { WhiteCard } from '../../../components/WhiteCard';
import { Socionics } from '../../../types';
import styles from './SociotypesPeople.module.scss';
import { PEOPLE } from '../../../constants/people';
import { EndPoint } from '../../../components/EndPoint';
import { PageTitle } from '../../../components/PageTitle';


export default function SociotypesPeople() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;

    const people = PEOPLE.filter((item) => item.id === id);

    return (
        <>
            <WhiteCard color="beige" className={styles.root}>
                <PageTitle iconName="Users">Люди</PageTitle>
                <div className={styles.people}>
                    {
                        people.map((item, $index) => (
                            <PeopleCard {...item} key={$index} className={styles.peopleCard} />
                        ))
                    }
                </div>
                <EndPoint />
            </WhiteCard>
        </>
    );
}
