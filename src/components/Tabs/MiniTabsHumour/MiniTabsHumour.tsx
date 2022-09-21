import React from 'react';
import { HUMOUR_LINKS } from 'src/constants/routes';
import { Tab } from '../../Tab/Tab';
import styles from './MiniTabsHumour.module.scss';

export const MiniTabsHumour: React.FC = () => {

    return (
        <div className={styles.root}>
            <div className={styles['horizontal-scrollbar']}>
                {HUMOUR_LINKS.map((item, $i) => (
                    <Tab {...item} key={$i} />
                ))}
            </div>
        </div>
    );
};
