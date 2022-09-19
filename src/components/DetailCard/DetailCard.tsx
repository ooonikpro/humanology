import React from 'react';
import { Text } from '../Text';
import styles from './DetailCard.module.scss';
import * as Icons from '../Icon/icons';

interface Props {
    className?: string;
    path: string;
    label: string;
    icon?: keyof typeof Icons;
    imagePath?: string;
}

export const DetailCard: React.FC<Props> = ({ path, label, icon, imagePath, className }) => {

    return (
        <div className={styles.root}>
            <Text tag="p" size="smaller">{label}</Text>
        </div>
    );
};