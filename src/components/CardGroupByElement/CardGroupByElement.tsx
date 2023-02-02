import React from 'react';
import styles from './CardGroupByElement.module.scss';
import { useColorElement } from '../../hooks';
import { Socionics } from '../../types';
import { Text } from '../Text';
import { Icon, getIconName } from '../Icon';
import { NATURE_LINKS } from 'src/constants/children';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants/routes';

interface Props {
    element: Socionics.Quadras;
    children: React.ReactChild[]
}

export const CardGroupByElement: React.FC<Props> = ({ element, children }) => {
    const { label, color } = useColorElement(element);

    const texts = NATURE_LINKS[element];
    const link = ROUTES.QUADRAS_ITEM(element);

    return (
        <div className={styles.root} style={color}>
            <div className={styles.header}>
                <Icon className={styles.quadraCircle} name={getIconName(element.concat('Mini'))} color="element" size={64} />
                <Text tag="p" size="h4" font="additional" color="element" className={styles['header-title']}>{label}</Text>

                <Link to={link} className={styles.header_link}>
                    {
                        texts.map((item, $i) => (
                            <Text color="accent" key={$i}>{item}</Text>
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