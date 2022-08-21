import React, { useCallback } from 'react';
import { useRef } from 'react';
import { useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Text } from 'src/components/Text';
import styles from './Tab.module.scss';

interface Props {
    path: string;
    label: string;
}

export const Tab: React.FC<Props> = ({ path, label }) => {
    const goTo = useNavigate();
    const { pathname } = useResolvedPath(path);
    const location = useLocation();

    // Таб начало остается активным… Потому что путь входит в любой путь роутера. Надо сделать исключение… Я не знаю как.

    const isActiveRoute = useMatch({ path: pathname }) || location.pathname.includes(pathname);
    const classes = [styles.root, isActiveRoute ? styles.active : ''].join(' ');
    const ref = useRef<HTMLElement>(null);

    const onClick = useCallback(() => goTo(path), [path]);

    return (
        <Text
            ref={ref}
            tag="button"
            size="smaller"
            color="accent"
            className={classes}
            onClick={onClick}
        >
            {label}
        </Text>
    );
};
