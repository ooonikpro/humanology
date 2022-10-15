import React from 'react';
import { useParams } from 'react-router-dom';
import { EndPoint } from '../../components/EndPoint';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './DichotomiesYungItem.module.scss';


export default function DichotomiesYungItem() {
    const { yungDichotomyName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${yungDichotomyName}.tsx`).default;

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <Content />
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
