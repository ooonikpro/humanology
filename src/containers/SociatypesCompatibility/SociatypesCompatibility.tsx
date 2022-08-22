import React from 'react';
import styles from './SociatypesCompatibility.module.scss';
import { useParams } from 'react-router-dom';
import { Socionics } from '../../types';
import { useIntertype } from '../../hooks/useSocionicsType';
import { SocietyCard } from '../../components/SocietyCard';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function SociatypesCompatibility() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const { intertypeProps } = useIntertype(id);

    return (
        <div className={styles.root}>
            <SocietyCard {...intertypeProps} mini />

            <WhiteCard>
                <Text tag="h1" size="h4" font="additional" className={styles.title}>Совместимость</Text>
            </WhiteCard>
        </div>
    );
}
