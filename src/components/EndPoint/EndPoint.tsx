import React from 'react';
import { Icon } from '../Icon';
import styles from './EndPoint.module.scss';


interface Props {
    className?: string;
}

export const EndPoint: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Icon className={styles.icon} name="Logo" size={24} color="accent" />
        </div>
    );
};
