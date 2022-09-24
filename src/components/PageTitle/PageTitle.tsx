import React from 'react';
import styles from './PageTitle.module.scss';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as Icons from '../Icon/icons';
import { useNavigate } from 'react-router-dom';



interface Props {
    className?: string;
    iconName: keyof typeof Icons;
    children: React.ReactNode;
    back?: boolean;
}

export const PageTitle: React.FC<Props> = ({
    className,
    iconName,
    back = false,
    children,
}) => {

    const classes = [
        className,
        styles.root
    ].join(' ');

    const navigate = useNavigate();

    return (
        <div className={classes}>
            {
                back && (
                    <div className={styles.back} onClick={() => navigate(-1)}>
                        <Icon name="ArrowLeftSquare" size={24} color="accent" />
                        <Text tag="span" color="accent" size="body">Назад</Text>
                    </div>
                )
            }
            <Icon name="IconWaves" color="accent" size={96} className={styles.iconWaves} />
            <div className={styles.pageTitle}>
                <Icon className={styles.icon} name={iconName} size={40} color="accent" />
                <Text tag="h2" size="h5" color="accent" className={styles.title}>
                    {children}
                </Text>
            </div>
        </div >
    );
};