import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './ClubsPsychotype.module.scss';


export default function ClubsPsychotype() {
    const { psychotypeName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${psychotypeName}.tsx`).default;

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <Content />
            </WhiteCard>
        </AppScrollbar>
    );
}
