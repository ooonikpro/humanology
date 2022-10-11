import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';
import styles from './ReininSignsItem.module.scss';


export default function ReininSignsItem() {
    const { reininSignName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${reininSignName}.tsx`).default;

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <Content />
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
