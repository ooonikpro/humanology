import React from 'react';
import styles from './CardGroupByElement.module.scss';
import { useColorElement } from '../../hooks';
import { Socionics } from '../../types';
import { Text } from '../Text';
import { Icon, getIconName } from '../Icon';

interface Props {
    element: Socionics.Quadras;
    children: React.ReactChild[]
}

export const CardGroupByElement: React.FC<Props> = ({ element, children }) => {
    const { label, color } = useColorElement(element);

    return (
        <div className={styles.root} style={color}>
            <div className={styles.header}>
                <Icon className={styles.quadraCircle} name={getIconName(element.concat('Mini'))} color="element" size={64} />
                <Text tag="p" size="h4" font="additional" color="element" className={styles['header-title']}>{label}</Text>
                <Icon name="Help" size={24} className={styles['header-icon']} />
            </div>

            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};