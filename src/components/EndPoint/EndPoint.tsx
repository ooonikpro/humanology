import React from 'react';
import { Icon } from '../Icon';
import styles from './EndPoint.module.scss';


interface Props {
    className?: string;
}

export const EndPoint: React.FC<Props> = ({ className }) => {

    const classes = [
        styles.root,
        className,
    ].join(' ');

    return (
        <div className={classes}>
            <Icon className={styles.icon} name="Logo" size={24} color="accent" />
            <Icon name="IconWaves" color="accent" size={72} className={styles.iconWaves} />
            <span> </span>
        </div>
    );
};
