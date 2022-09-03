import React, { useMemo } from 'react';
import styles from './Menu.module.scss';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components/Text';
import { Icon } from '../../components/Icon';

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

export default function Menu() {
    const navigate = useNavigate();
    const goTo = (route: string) => () => navigate(route);

    return (
        <>
            <div className={styles.menuList}>
                <MenuItem onClick={goTo(ROUTES.DISCLAIMER)}>
                    <Icon size={24} className={styles.icon} color="accent" name="AlertSquare" />
                    <Text size="smaller" color="accent">Дисклеймер</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.HISTORY)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Time" />
                    <Text size="smaller" color="accent">История</Text>
                </MenuItem>

                <MenuItem fullWidth big onClick={goTo(ROUTES.SOCIOTYPES(''))}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square1" />
                    <Text size="smaller" color="accent">Социотипы</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.SOCIOTYPES_PEOPLE)} doubleHeight>
                    <Icon size={24} className={styles.icon} color="accent" name="Users" />
                    <Text size="smaller" color="accent">Люди</Text>
                </MenuItem>

                <MenuItem doubleHeight inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Square0" />
                    <Text size="smaller" color="accent">Дети</Text>
                </MenuItem>

                <MenuItem fullWidth>
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

                <MenuItem  inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Unknown" />
                    <Text size="smaller" color="accent">Карта социальных связей</Text>
                </MenuItem>

                <MenuItem inactive>
                    <Icon size={24} className={styles.icon} color="accent" name="Unknown" />
                    <Text size="smaller" color="accent">Коллективы</Text>
                </MenuItem>    
            </div>

            <div className={styles.menuList}>
                <MenuItem fullWidth onClick={goTo(ROUTES.METABOLISM)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square3" />
                    <Text size="smaller" color="accent">Информационный метаболизм</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.FUNCTIONS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square4" />
                    <Text size="smaller" color="accent">Функции</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.BLOCKS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square5" />
                    <Text size="smaller" color="accent">Блоки и кольца</Text>
                </MenuItem>

                <MenuItem fullWidth onClick={goTo(ROUTES.ASPECTS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square6" />
                    <Text size="smaller" color="accent">Аспекты</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.QUADRAS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square7" />
                    <Text size="smaller" color="accent">Квадры</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.SUITS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square8" />
                    <Text size="smaller" color="accent">Карты и масти</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.CLUBS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square9" />
                    <Text size="smaller" color="accent">Клубы</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.MINDSETS)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square10" />
                    <Text size="smaller" color="accent">Типы мышления</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.YUNG)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square11" />
                    <Text size="smaller" color="accent">Дихотомии Юнга</Text>
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.REININ)}>
                    <Icon size={24} className={styles.icon} color="accent" name="Square12" />
                    <Text size="smaller" color="accent">Признаки Рейнина</Text>
                </MenuItem>

                <MenuItem fullWidth onClick={goTo(ROUTES.OTHER)}>
                    <Icon size={24} className={styles.icon} color="accent" name="SquareDots" />
                    <Text size="smaller" color="accent">Прочее</Text>
                </MenuItem>
            </div>
        </>
    );
}
