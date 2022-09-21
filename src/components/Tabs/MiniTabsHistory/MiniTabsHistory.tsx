import React from 'react';
import { HISTORY_LINKS } from 'src/constants/routes';
import { Tab } from '../../Tab/Tab';
import styles from './MiniTabsHistory.module.scss';

export const MiniTabsHistory: React.FC = () => {

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
