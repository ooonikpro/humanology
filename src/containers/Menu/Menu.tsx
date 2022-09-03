import React, { useMemo } from 'react';
import styles from './Menu.module.scss';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    children,
    className,
    fullWidth = false,
    onClick = () => void(0)
}) => {
    const classes = useMemo(() => [
        styles.menuItem,
        fullWidth && styles.fullWidth,
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
                    Дисклэймер
                </MenuItem>
                <MenuItem onClick={goTo(ROUTES.HISTORY)}>
                    История
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.SOCIOTYPES(''))} fullWidth>
                    Социотипы
                </MenuItem>

                <MenuItem onClick={goTo(ROUTES.SOCIOTYPES_PEOPLE)}>
                    Люди
                </MenuItem>
                <MenuItem>
                    Дети
                </MenuItem>

                <MenuItem fullWidth>
                    Интертипные отношения
                </MenuItem>
            </div>

            <div className={styles.menuList}>
                <MenuItem>
                    Профиль
                </MenuItem>
                <MenuItem>
                    Карта социальных связей
                </MenuItem>

                <MenuItem>
                    Тесты
                </MenuItem>
                <MenuItem>
                    Специалисты
                </MenuItem>
                <MenuItem>
                    Коллективы
                </MenuItem>
            </div>

            <div className={styles.menuList}>
                <MenuItem>
                    Информационный метаболизм
                </MenuItem>
            </div>
        </>
    );
}
