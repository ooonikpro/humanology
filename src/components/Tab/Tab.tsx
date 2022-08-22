import React, { useCallback, useEffect } from 'react';
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

    const isActiveRoute = useMatch({ path: pathname }) || location.pathname.includes(pathname);
    const classes = [styles.root, isActiveRoute ? styles.active : ''].join(' ');
    const ref = useRef<HTMLElement>(null);

    const scrollIntoView = useCallback(() => {
        ref.current && ref.current.scrollIntoView(false);
    }, [ref]);
    const onClick = useCallback(() => goTo(path), [path]);

    useEffect(() => {
        if (isActiveRoute) {
            scrollIntoView();
        }
    }, [isActiveRoute]);

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
