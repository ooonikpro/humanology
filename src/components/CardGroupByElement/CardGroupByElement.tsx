import React from 'react';
import styles from './CardGroupByElement.module.scss';
import { useColorElement } from '../../hooks';
import { Socionics } from '../../types';
import { Text } from '../Text';
import { Icon, getIconName } from '../Icon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { QUADRAS_SUBTITLE } from '../../constants/natureElements';

interface Props {
    element: Socionics.Quadras;
    children: React.ReactChild[]
}

export const CardGroupByElement: React.FC<Props> = ({ element, children }) => {
    const { label, color } = useColorElement(element);

    const texts = QUADRAS_SUBTITLE[element];
    const link = ROUTES.QUADRAS_ITEM(element);

    return (
        <div className={styles.root} style={color}>
            <div className={styles.header}>
                <Icon className={styles.quadraCircle} name={getIconName(element.concat('Mini'))} color="element" size={64} />
                <Text tag="p" size="h4" font="additional" color="element" className={styles['header-title']}>{label}</Text>

                <Link to={link} className={styles.header_subtitle}>
                    {
                        texts.map((item, $i) => (
                            <Text color="element" key={$i}>{item}</Text>
                        ))
                    }
                    <Icon name="Help" size={24} className={styles['header-icon']} />
                </Link>
            </div>

            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};