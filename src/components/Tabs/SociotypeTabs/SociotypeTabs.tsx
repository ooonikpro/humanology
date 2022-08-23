import React from 'react';
import { useParams } from 'react-router-dom';
import { getIconName } from 'src/components/Icon';
import { SOCIATYPES_LINKS } from 'src/constants/routes';
import { Tab } from '../../Tab/Tab';
import styles from './SociotypeTabs.module.scss';

export const SociotypeTabs: React.FC = () => {
    const { id } = useParams();

    return (
        <div className={styles.root}>
            <div className={styles['horizontal-scrollbar']}>
                {SOCIATYPES_LINKS(id as string).map((item, $i) => (
                    <Tab {...item} key={$i} icon={getIconName(item.iconName)} />
                ))}
            </div>
        </div>
    );
};
