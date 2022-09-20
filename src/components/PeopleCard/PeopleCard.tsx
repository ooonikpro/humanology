import React from 'react';
import { PeopleItem } from 'src/constants/people';
import { useSociotype } from 'src/hooks';
import styles from './PeopleCard.module.scss';

export type PeopleCardProps = PeopleItem;

export const PeopleCard: React.FC<PeopleCardProps> = ({
    id,
    name,
    subtitle,
    birthDate,// dd.mm.YYYY
    gender,
}) => {
    const { sociotypeProps } = useSociotype(id);

    return (
        <div className={styles.root}>
            {id}
            {name}
            {subtitle}
            {birthDate}
            {gender}
            {JSON.stringify(sociotypeProps)}
        </div>
    );
};
