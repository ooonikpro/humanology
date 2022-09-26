import React, { useMemo } from 'react';
import styles from './Home.module.scss';
import { CardGroupByElement } from '../../components/CardGroupByElement';
import { QUADRAS } from '../../constants/natureElements';
import { SOCIOTYPES } from '../../constants/socionicsTypes';
import { Socionics } from '../../types';
import { SocietyCardMini } from '../../components/SocietyCardMini';
import { ROUTES } from '../../constants/routes';
import { Link, Outlet } from 'react-router-dom';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { WhiteCard } from '../../components/WhiteCard';
import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';

const intertypes = (Object.keys(SOCIOTYPES) as Socionics.SocionicsType[]).map(
    (key) => ({
        id: key,
        ...SOCIOTYPES[key],
    })
);

const elements = (Object.keys(QUADRAS) as Socionics.Quadras[]).map(
    (element) => ({
        element,
        cards: intertypes.filter((type) => type.element === element),
    })
);

interface MenuItemProps {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    doubleHeight?: boolean;
    inactive?: boolean;
    big?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    children,
    className,
    fullWidth = false,
    doubleHeight = false,
    inactive = false,
    big = false,
    onClick = () => void (0)
}) => {
    const classes = useMemo(() => [
        styles.menuItem,
        fullWidth && styles.fullWidth,
        doubleHeight && styles.doubleHeight,
        big && styles.big,
        inactive && styles.inactive,
        className
    ].filter(Boolean).join(' '), [className]);

    return (
        <div className={classes} onClick={onClick}>{children}</div>
    );
};

export default function Home() {
    const renderGroups = useMemo(() => {
        return elements.map((item, $i) => {
            return (
                <CardGroupByElement key={$i} element={item.element}>
                    {item.cards.map((card, $j) => (
                        <Link
                            to={`${ROUTES.SOCIOTYPES(card.id)}/card`}
                            key={$j}
                            className={styles.link}
                        >
                            <SocietyCardMini {...card} />
                        </Link>
                    ))}
                </CardGroupByElement>
            );
        });
    }, [elements]);

    return (
        <>
            <WhiteCard color="beige" className={styles.root}>
                <PageTitle iconName='Square1'>Социотипы</PageTitle>
                <div className={styles.menuList}>
                    <MenuItem doubleHeight>
                        <Icon size={24} className={styles.icon} color="accent" name="Mug" />
                        <Text size="large" color="accent">Как определять тип?</Text>
                    </MenuItem>
                    <MenuItem doubleHeight>
                        <Icon size={24} className={styles.icon} color="accent" name="Globe" />
                        <Text size="large" color="accent">Устройство социона</Text>
                    </MenuItem>
                </div>
            </WhiteCard>
            {renderGroups}
            <Outlet />
            <EndPoint />
        </>
    );
}
