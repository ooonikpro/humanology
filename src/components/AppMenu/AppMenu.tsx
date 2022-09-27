import React, { useEffect, useMemo, useState } from 'react';
import styles from './AppMenu.module.scss';
import { ROUTES } from '../../constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Portrait } from '../Portrait';
import { Socionics } from 'src/types';
import { useMenuCtx } from 'src/hooks/useMenuCtx';
import data from './data';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRandomIndex = (arr: Array<any>) => arr[Math.floor(Math.random() * arr.length)];

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

const RandomDual = () => {
    const ids: [
        Socionics.SocionicsType,
        Socionics.Gender,
        Socionics.SocionicsType,
        Socionics.Gender
    ] = getRandomIndex(data.duals);

    return (
        <>
            <Portrait name={ids[0]} gender={ids[1]} className={styles.adult1} />
            <Portrait name={ids[2]} gender={ids[3]} className={styles.adult2} />
        </>
    );
};


const RandomIntertype = () => {
    return (
        <>
            <Icon size={64} color="accent" name={getRandomIndex(data.intertypes)} className={styles.icon1} />
            <Icon size={48} color="accent" name={getRandomIndex(data.intertypes)} className={styles.icon2} />
            <Icon size={40} color="accent" name={getRandomIndex(data.intertypes)} className={styles.icon3} />
        </>
    );
};

const RandomAspect = () => {
    return (
        <>
            <Icon size={64} color="accent" name={getRandomIndex(data.aspects)} className={styles.icon1} />
            <Icon size={48} color="accent" name={getRandomIndex(data.aspects)} className={styles.icon2} />
            <Icon size={40} color="accent" name={getRandomIndex(data.aspects)} className={styles.icon3} />
        </>
    );
};

const RandomKids = () => {
    const ids: [
        Socionics.SocionicsType,
        Socionics.Gender,
        Socionics.SocionicsType,
        Socionics.Gender,
        Socionics.SocionicsType,
        Socionics.Gender] = getRandomIndex(data.kids);

    return (
        <>
            <Portrait name={ids[0]} gender={ids[1]} kid className={styles.kid1} />
            <Portrait name={ids[2]} gender={ids[3]} kid className={styles.kid2} />
            <Portrait name={ids[4]} gender={ids[5]} kid className={styles.kid3} />
        </>
    );
};

export const AppMenu = () => {
    const [randomCards, setRandomCards] = useState({
        dual: RandomDual(),
        kids: RandomKids(),
        aspect: RandomAspect(),
        intertype: RandomIntertype()
    });

    const { isOpen, toggle } = useMenuCtx();
    const navigate = useNavigate();
    const goTo = (route: string) => () => navigate(route);
    const location = useLocation();

    const rootClasses = [styles.root, isOpen && styles.open].filter(Boolean).join(' ');

    useEffect(() => {
        if (isOpen) {
            toggle();
        }
    }, [location]);

    useEffect(() => {
        if (isOpen) {
            setRandomCards({
                kids: RandomKids(),
                aspect: RandomAspect(),
                dual: RandomDual(),
                intertype: RandomIntertype()
            });
        }
    }, [isOpen]);

    return (
        <div className={rootClasses}>
            <div className={styles.container}>
                <div className={styles.menuList}>

                    <MenuItem onClick={goTo(ROUTES.START)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square0" />
                        <Text size="large" color="accent">Начало</Text>
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.DISCLAIMER)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Mug" />
                        <Text size="large" color="accent">Как определять?</Text>
                    </MenuItem>

                    <MenuItem fullWidth big onClick={goTo(ROUTES.SOCIOTYPES(''))}>
                        <div className={styles.elements}>
                            <Icon name="AirMini" color="air" size={32} />
                            <Icon name="FireMini" color="fire" size={32} />
                            <Icon name="WaterMini" color="water" size={32} />
                            <Icon name="EarthMini" color="earth" size={32} />
                        </div>
                        <Icon size={24} className={styles.icon} color="accent" name="Square1" />
                        <Text size="h5" color="accent">Социотипы</Text>
                        {randomCards.dual}
                    </MenuItem>

                    <MenuItem doubleHeight fullWidth inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="StarSquare" />
                        <Text size="h5" color="accent">Дети</Text>
                        {randomCards.kids}
                    </MenuItem>

                    <MenuItem fullWidth doubleHeight onClick={goTo(ROUTES.RELATIONSHIPS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square2" />
                        <Text size="large" color="accent">Интертипные отношения</Text>
                        <div className={styles.iconCascadeIntertype}>
                            {randomCards.intertype}
                        </div>
                    </MenuItem>
                </div>

                <div className={styles.menuList}>
                    <MenuItem>
                        <Icon size={24} className={styles.icon} color="accent" name="PresentationChart" />
                        <Text size="large" color="accent">Тесты</Text>
                    </MenuItem>

                    <MenuItem inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Specialist" />
                        <Text size="large" color="accent">Специалисты</Text>
                    </MenuItem>

                    <MenuItem fullWidth inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="UserSquare" />
                        <Text size="large" color="accent">Профиль</Text>
                    </MenuItem>

                    <MenuItem doubleHeight inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Users" />
                        <Text size="large" color="accent">Люди</Text>
                    </MenuItem>

                    <MenuItem doubleHeight inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Map" />
                        <Text size="large" color="accent">Карта социальных связей</Text>
                    </MenuItem>

                    <MenuItem inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Atom" />
                        <Text size="large" color="accent">Коллективы</Text>
                    </MenuItem>
                </div>

                <div className={styles.menuList}>
                    <MenuItem onClick={goTo(ROUTES.HISTORY)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Time" />
                        <Text size="large" color="accent">История</Text>
                    </MenuItem>
                    <MenuItem fullWidth onClick={goTo(ROUTES.METABOLISM)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square3" />
                        <Text size="large" color="accent">Информационный метаболизм</Text>
                    </MenuItem>

                    <MenuItem fullWidth doubleHeight onClick={goTo(ROUTES.ASPECTS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square4" />
                        <Text size="large" color="accent">Аспекты</Text>
                        <div className={styles.iconCascade}>
                            {randomCards.aspect}
                        </div>
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.FUNCTIONS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square5" />
                        <Text size="large" color="accent">Функции</Text>
                        <Icon name="Functions" size={96} className={styles.image} />
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.BLOCKS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square6" />
                        <Text size="large" color="accent">Блоки и кольца</Text>
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.QUADRAS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square7" />
                        <Text size="large" color="accent">Квадры</Text>
                        <Icon name="Quadras" size={96} className={styles.image} />
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.SUITS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square8" />
                        <Text size="large" color="accent">Карты и масти</Text>
                        <Icon name="Suits" size={96} className={styles.image} />
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.CLUBS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square9" />
                        <Text size="large" color="accent">Клубы и психотипы</Text>
                        <Icon name="Clubs" size={96} className={styles.image} />
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.MINDSETS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square10" />
                        <Text size="large" color="accent">Типы мышления</Text>
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.YUNG)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square11" />
                        <Text size="large" color="accent">Дихотомии Юнга</Text>
                    </MenuItem>

                    <MenuItem doubleHeight onClick={goTo(ROUTES.REININ)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square12" />
                        <Text size="large" color="accent">Признаки Рейнина</Text>
                    </MenuItem>

                    <MenuItem fullWidth onClick={goTo(ROUTES.OTHER)}>
                        <Icon size={24} className={styles.icon} color="accent" name="SquareDots" />
                        <Text size="large" color="accent">Прочее</Text>
                    </MenuItem>
                </div>
            </div>
        </div>
    );
};
