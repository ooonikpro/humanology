import React, { useCallback, useEffect } from 'react';
import { useRef } from 'react';
import { useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Text } from 'src/components/Text';
import { Icon } from '../Icon';
import styles from './Tab.module.scss';
import * as Icons from '../Icon/icons';



interface Props {
    path: string;
    label: string;
    icon: keyof typeof Icons;
}

export const Tab: React.FC<Props> = ({ path, label, icon }) => {
    const goTo = useNavigate();
    const { pathname } = useResolvedPath(path);
    const location = useLocation();

    const isActiveRoute = useMatch({ path: pathname }) || location.pathname.includes(pathname);
    const classes = [styles.root, isActiveRoute ? styles.active : ''].join(' ');
    const ref = useRef<HTMLElement>(null);

    const scrollIntoView = useCallback(() => {
        ref.current && ref.current.scrollIntoView({ inline: 'center', block: 'end' });
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
            <Icon
                className={styles.icon}
                size={24}
                color='accent'
                name={icon}
            />
            {label}
        </Text>
    );
};
