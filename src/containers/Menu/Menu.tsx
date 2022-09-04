import React, { useMemo } from 'react';
import styles from './Menu.module.scss';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components/Text';
import { Icon } from '../../components/Icon';
import { Portrait } from '../../components/Portrait';
import { Socionics } from 'src/types';

const getRandomIndex = (arr: Array<any>) => arr[Math.round(Math.random() * arr.length - 1)];
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
    onClick = () => void(0)
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
    ['ENTP', 'ISFP'],
    ['ISFP', 'ENTP'],
    ['ESFJ', 'INTJ'],
    ['INTJ', 'ESFJ'],
    ['ISTJ', 'ENFJ'],
    ['ENFJ', 'ISTJ'],
    ['INFP', 'ESTP'],
    ['ESTP', 'INTP'],
    ['INTP', 'ESFP'],
    ['ESFP', 'INTP'],
    ['ISFJ', 'ENTJ'],
    ['ENTJ', 'ISFJ'],
    ['ESTJ', 'INFJ'],
    ['INFJ', 'ESTJ'],
    ['ENFP', 'ISTP'],
    ['ISTP', 'ENFP'],
];

const Kids = [
    ['ESFJ', 'female', 'INTJ', 'male', 'ENTP', 'female' ],
    ['ESTP', 'male', 'INFP', 'female', 'ISTJ', 'male'],
    ['ESFP', 'female', 'INTP', 'male', 'ISFJ', 'female'],
    ['ESTJ', 'male', 'INFJ', 'female', 'ENFP', 'female'],
];

const RandomDual = () => {
    const ids: [Socionics.SocionicsType, Socionics.SocionicsType] = getRandomIndex(Duals);

    return (
        <>
            <Portrait name={ids[0]} gender="female" className={styles.adult1} />
            <Portrait name={ids[1]} gender="male" className={styles.adult2} />
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

export default function Menu() {
    const navigate = useNavigate();
    const goTo = (route: string) => () => navigate(route);

    return (
        <>
            <div className={styles.menuList}>

                <MenuItem onClick={goTo(ROUTES.START)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square0" />
                    <Text size="smaller" color="accent">Начало</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.DISCLAIMER)}>
                    <Icon size={24} className={styles.icon} color="accent" name="AlertSquare" />
                    <Text size="smaller" color="accent">Дисклеймер</Text>
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
                    <RandomKids/>
                </MenuItem>

                <MenuItem fullWidth onClick={goTo(ROUTES.RELATIONSHIPS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square2" />
                    <Text size="smaller" color="accent">Интертипные отношения</Text>
                </MenuItem>
            </div>

            <div className={styles.menuList}>
                <MenuItem>
                    <Icon size={24} className={styles.icon} color="accent" name="PresentationChart" />
                    <Text size="smaller" color="accent">Тесты</Text>
                </MenuItem>

                <MenuItem inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Unknown" />
                    <Text size="smaller" color="accent">Специалисты</Text>
                </MenuItem>

                <MenuItem fullWidth inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="UserSquare" />
                    <Text size="smaller" color="accent">Профиль</Text>
                </MenuItem>

                <MenuItem doubleHeight inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Users" />
                    <Text size="smaller" color="accent">Люди</Text>
                </MenuItem>

                <MenuItem doubleHeight inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Unknown" />
                    <Text size="smaller" color="accent">Карта социальных связей</Text>
                </MenuItem>

                <MenuItem inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Unknown" />
                    <Text size="smaller" color="accent">Коллективы</Text>
                </MenuItem>
            </div>

            <div className={styles.menuList}>
                <MenuItem onClick={goTo(ROUTES.HISTORY)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Time" />
                    <Text size="smaller" color="accent">История</Text>
                </MenuItem>
                <MenuItem fullWidth onClick={goTo(ROUTES.METABOLISM)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square3" />
                    <Text size="smaller" color="accent">Информационный метаболизм</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.FUNCTIONS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square4" />
                    <Text size="smaller" color="accent">Функции</Text>
                    <Icon name="Functions" size={80} className={styles.image} />
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.BLOCKS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square5" />
                    <Text size="smaller" color="accent">Блоки и кольца</Text>
                </MenuItem>

                <MenuItem fullWidth onClick={goTo(ROUTES.ASPECTS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square6" />
                    <Text size="smaller" color="accent">Аспекты</Text>
                    <div className={styles.iconCascade}>
                        <Icon size={48} color="accent" name="AspectComfort" />
                        <Icon size={40} color="accent" name="AspectPeople" />
                        <Icon size={32} color="accent" name="AspectIdeas" />
                    </div>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.QUADRAS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square7" />
                    <Text size="smaller" color="accent">Квадры</Text>
                    <Icon name="Quadras" size={80} className={styles.image} />
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.SUITS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square8" />
                    <Text size="smaller" color="accent">Карты и масти</Text>
                    <Icon name="Suits" size={80} className={styles.image} />
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.CLUBS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square9" />
                    <Text size="smaller" color="accent">Клубы и психотипы</Text>
                    <Icon name="Clubs" size={80} className={styles.image} />
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.YUNG)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square10" />
                    <Text size="smaller" color="accent">Дихотомии Юнга</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.REININ)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square11" />
                    <Text size="smaller" color="accent">Признаки Рейнина</Text>
                </MenuItem>

                <MenuItem fullWidth onClick={goTo(ROUTES.MINDSETS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square12" />
                    <Text size="smaller" color="accent">Типы мышления</Text>
                </MenuItem>

                <MenuItem fullWidth onClick={goTo(ROUTES.OTHER)}>
                    <Icon size={24} className={styles.icon} color="accent" name="SquareDots" />
                    <Text size="smaller" color="accent">Прочее</Text>
                </MenuItem>
            </div>
        </>
    );
}
