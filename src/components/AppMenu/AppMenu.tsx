import React, { useCallback, useEffect, useMemo } from 'react';
import styles from './AppMenu.module.scss';
import { ROUTES } from '../../constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Portrait } from '../Portrait';
import { Socionics } from 'src/types';
import { useMenuCtx } from 'src/hooks/useMenuCtx';

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

const Duals = [
    ['ENTP', 'female', 'ISFP', 'male'],
    ['ENTP', 'male', 'ISFP', 'female'],
    ['ISFP', 'female', 'ENTP', 'male'],
    ['ISFP', 'male', 'ENTP', 'female'],
    ['ESFJ', 'female', 'INTJ', 'male'],
    ['ESFJ', 'male', 'INTJ', 'female'],
    ['INTJ', 'female', 'ESFJ', 'male'],
    ['INTJ', 'male', 'ESFJ', 'female'],
    ['ISTJ', 'female', 'ENFJ', 'male'],
    ['ISTJ', 'male', 'ENFJ', 'female'],
    ['ENFJ', 'female', 'ISTJ', 'male'],
    ['ENFJ', 'male', 'ISTJ', 'female'],
    ['INFP', 'female', 'ESTP', 'male'],
    ['INFP', 'male', 'ESTP', 'female'],
    ['ESTP', 'female', 'INFP', 'male'],
    ['ESTP', 'male', 'INFP', 'female'],
    ['INTP', 'female', 'ESFP', 'male'],
    ['INTP', 'male', 'ESFP', 'female'],
    ['ESFP', 'female', 'INTP', 'male'],
    ['ESFP', 'male', 'INTP', 'female'],
    ['ISFJ', 'female', 'ENTJ', 'male'],
    ['ISFJ', 'male', 'ENTJ', 'female'],
    ['ENTJ', 'female', 'ISFJ', 'male'],
    ['ENTJ', 'male', 'ISFJ', 'female'],
    ['ESTJ', 'female', 'INFJ', 'male'],
    ['ESTJ', 'male', 'INFJ', 'female'],
    ['INFJ', 'female', 'ESTJ', 'male'],
    ['INFJ', 'male', 'ESTJ', 'female'],
    ['ENFP', 'female', 'ISTP', 'male'],
    ['ENFP', 'male', 'ISTP', 'female'],
    ['ISTP', 'female', 'ENFP', 'male'],
    ['ISTP', 'male', 'ENFP', 'female'],
];

const RandomDual = () => {
    const ids: [
        Socionics.SocionicsType,
        Socionics.Gender,
        Socionics.SocionicsType,
        Socionics.Gender
    ] = getRandomIndex(Duals);

    return (
        <>
            <Portrait name={ids[0]} gender={ids[1]} className={styles.adult1} />
            <Portrait name={ids[2]} gender={ids[3]} className={styles.adult2} />
        </>
    );
};

const Kids = [
    ['ESFJ', 'female', 'INTJ', 'male', 'ENTP', 'female'],
    ['ESTP', 'male', 'INFP', 'female', 'ISTJ', 'male'],
    ['ESFP', 'female', 'INTP', 'male', 'ISFJ', 'female'],
    ['ESTJ', 'male', 'INFJ', 'female', 'ENFP', 'female'],
];

const Intertype = [
    'Dual',
    'Activity',
    'Mirror',
    'Identical',
    'Kindred',
    'Semidual',
    'Pragmatic',
    'Illusionary',
    'Beneficiary',
    'Giver',
    'Supervisor',
    'Underling',
    'Quasidentical',
    'Parallel',
    'Contrary',
    'Superego',
];

const Aspect = [
    'AspectBusiness',
    'AspectLogic',
    'AspectEmotions',
    'AspectPeople',
    'AspectWill',
    'AspectComfort',
    'AspectIdeas',
    'AspectTime',
];

const RandomIntertype = () => {

    return (
        <>
            <Icon size={64} color="accent" name={getRandomIndex(Intertype)} className={styles.icon1} />
            <Icon size={48} color="accent" name={getRandomIndex(Intertype)} className={styles.icon2} />
            <Icon size={40} color="accent" name={getRandomIndex(Intertype)} className={styles.icon3} />
        </>
    );
};

const RandomAspect = () => {

    return (
        <>
            <Icon size={48} color="accent" name={getRandomIndex(Aspect)} className={styles.icon1} />
            <Icon size={40} color="accent" name={getRandomIndex(Aspect)} className={styles.icon2} />
            <Icon size={32} color="accent" name={getRandomIndex(Aspect)} className={styles.icon3} />
        </>
    );
};

const RandomKids = () => {
    const ids: [Socionics.SocionicsType, Socionics.Gender, Socionics.SocionicsType, Socionics.Gender, Socionics.SocionicsType, Socionics.Gender] = getRandomIndex(Kids);

    return (
        <>
            <Portrait name={ids[0]} gender={ids[1]} kid className={styles.kid1} />
            <Portrait name={ids[2]} gender={ids[3]} kid className={styles.kid2} />
            <Portrait name={ids[4]} gender={ids[5]} kid className={styles.kid3} />
        </>
    );
};

export const AppMenu = () => {
    const { isOpen, toggle } = useMenuCtx();
    const navigate = useNavigate();
    const goTo = (route: string) => () => navigate(route);
    const location = useLocation();

    const rootClasses = [styles.root, isOpen && styles.open].filter(Boolean).join(' ');

    const closeCallback = useCallback(() => {
        if (isOpen) {
            toggle();
        }
    }, [isOpen]);

    useEffect(closeCallback, [location]);

    return (
        <div className={rootClasses}>
            <div className={styles.container}>
                <div className={styles.menuList}>

                    <MenuItem onClick={goTo(ROUTES.START)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square0" />
                        <Text size="body" color="accent">Начало</Text>
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.DISCLAIMER)}>
                        <Icon size={24} className={styles.icon} color="accent" name="AlertSquare" />
                        <Text size="body" color="accent">Дисклеймер</Text>
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
                        <RandomDual/>
                    </MenuItem>

                    <MenuItem doubleHeight fullWidth inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="StarSquare" />
                        <Text size="h6" color="accent">Дети</Text>
                        <RandomKids />
                    </MenuItem>

                    <MenuItem fullWidth doubleHeight onClick={goTo(ROUTES.RELATIONSHIPS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square2" />
                        <Text size="body" color="accent">Интертипные отношения</Text>
                        <div className={styles.iconCascadeIntertype}>
                            <RandomIntertype />
                        </div>
                    </MenuItem>
                </div>

                <div className={styles.menuList}>
                    <MenuItem>
                        <Icon size={24} className={styles.icon} color="accent" name="PresentationChart" />
                        <Text size="body" color="accent">Тесты</Text>
                    </MenuItem>

                    <MenuItem inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Specialist" />
                        <Text size="body" color="accent">Специалисты</Text>
                    </MenuItem>

                    <MenuItem fullWidth inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="UserSquare" />
                        <Text size="body" color="accent">Профиль</Text>
                    </MenuItem>

                    <MenuItem doubleHeight inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Users" />
                        <Text size="body" color="accent">Люди</Text>
                    </MenuItem>

                    <MenuItem doubleHeight inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Map" />
                        <Text size="body" color="accent">Карта социальных связей</Text>
                    </MenuItem>

                    <MenuItem inactive>
                        <Icon size={24} className={styles.icon} color="accent" name="Atom" />
                        <Text size="body" color="accent">Коллективы</Text>
                    </MenuItem>
                </div>

                <div className={styles.menuList}>
                    <MenuItem onClick={goTo(ROUTES.HISTORY)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Time" />
                        <Text size="body" color="accent">История</Text>
                    </MenuItem>
                    <MenuItem fullWidth onClick={goTo(ROUTES.METABOLISM)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square3" />
                        <Text size="body" color="accent">Информационный метаболизм</Text>
                    </MenuItem>

                    <MenuItem fullWidth onClick={goTo(ROUTES.ASPECTS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square4" />
                        <Text size="body" color="accent">Аспекты</Text>
                        <div className={styles.iconCascade}>
                            <RandomAspect />
                        </div>
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.FUNCTIONS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square5" />
                        <Text size="body" color="accent">Функции</Text>
                        <Icon name="Functions" size={80} className={styles.image} />
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.BLOCKS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square6" />
                        <Text size="body" color="accent">Блоки и кольца</Text>
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.QUADRAS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square7" />
                        <Text size="body" color="accent">Квадры</Text>
                        <Icon name="Quadras" size={80} className={styles.image} />
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.SUITS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square8" />
                        <Text size="body" color="accent">Карты и масти</Text>
                        <Icon name="Suits" size={80} className={styles.image} />
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.CLUBS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square9" />
                        <Text size="body" color="accent">Клубы и психотипы</Text>
                        <Icon name="Clubs" size={80} className={styles.image} />
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.YUNG)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square10" />
                        <Text size="body" color="accent">Дихотомии Юнга</Text>
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.REININ)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square11" />
                        <Text size="body" color="accent">Признаки Рейнина</Text>
                    </MenuItem>

                    <MenuItem onClick={goTo(ROUTES.MINDSETS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Square12" />
                        <Text size="body" color="accent">Типы мышления</Text>
                    </MenuItem>

                    <MenuItem fullWidth onClick={goTo(ROUTES.OTHER)}>
                        <Icon size={24} className={styles.icon} color="accent" name="SquareDots" />
                        <Text size="body" color="accent">Прочее</Text>
                    </MenuItem>
                </div>
            </div>
        </div>
    );
};