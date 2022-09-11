import React from 'react';
import { useParams } from 'react-router-dom';
import { HISTORY_LINKS } from 'src/constants/routes';
import { Tab } from '../../Tab/Tab';
import styles from './MiniTabs.module.scss';

export const MiniTabs: React.FC = () => {

    return (
        <div className={styles.root}>
            <div className={styles['horizontal-scrollbar']}>
                {HISTORY_LINKS.map((item, $i) => (
                    <Tab {...item} key={$i} />
                ))}
            </div>
        </div>
    );
};
