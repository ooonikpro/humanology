import React from 'react';
import styles from './CardGroupByElement.module.scss';
import { useColorElement } from '../../hooks';
import { Humanology } from '../../types';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Tag } from '../Tag';

interface Props {
    element: Humanology.Elements;
    children: React.ReactChild[]
}

export const CardGroupByElement: React.FC<Props> = ({ element, children }) => {
    const { label, color } = useColorElement(element);

    return (
        <div className={styles.root} style={color}>
            <div className={styles.header}>
                <Tag sign={element} color="element"/>
                <Text tag="strong" size="h4" font="additional" color="element" className={styles['header-title']}>{label}</Text>
                <Icon name="Info" size={24} className={styles['header-icon']}/>
            </div>

            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};