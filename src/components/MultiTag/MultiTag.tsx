import React from 'react';
import styles from './MultiTag.module.scss';
import { Humanology } from '../../types';
import { Icon, getIconName } from '../Icon';

interface Props {
    element: Humanology.Elements;
    role: Humanology.Role;
}

export const MultiTag: React.FC<Props> = ({ element, role }) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <Icon name={getIconName(element)} color="element" className={styles.icon} size={16} />
                <span className={styles.divider}></span>
                <Icon name={getIconName(role)} color="role" className={styles.icon} size={16} />
            </div>
        </div>
    );
};