import React from 'react';
import styles from './SociatypesCompatibility.module.scss';
import { useParams } from 'react-router-dom';
import { Humanology } from '../../types';
import { useIntertype } from '../../hooks/useIntertype';
import { SocietyCard } from '../../components/SocietyCard';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function SociatypesCompatibility() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Humanology.Intertype;
    const { intertypeProps } = useIntertype(id);

    return (
        <div className={styles.root}>
            <SocietyCard {...intertypeProps} mini />

            <WhiteCard>
                <Text tag="b" size="h5" className={styles.title}>Совместимость</Text>
            </WhiteCard>
        </div>
    );
}
