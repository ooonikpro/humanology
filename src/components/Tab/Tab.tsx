import React, { useCallback, useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from 'src/components/Text';
import { Icon } from '../Icon';
import styles from './Tab.module.scss';
import * as Icons from '../Icon/icons';
import { useIsActiveRoute } from 'src/hooks/useIsActiveRoute';


export interface Props {
    path: string;
    label: string;
    icon?: keyof typeof Icons;
}

export const Tab: React.FC<Props & {onActive: (left: number) => void}> = ({ path, label, icon, onActive }) => {
    const goTo = useNavigate();
    const isActiveRoute = useIsActiveRoute(path);

    const classes = [styles.root, isActiveRoute ? styles.active : ''].join(' ');
    const ref = useRef<HTMLElement>(null);

    const scrollIntoView = () => onActive(ref.current?.offsetLeft || 0);
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
            size="body"
            color="accent"
            className={classes}
            onClick={onClick}
        >
            {icon ?
                <Icon
                    className={styles.icon}
                    size={24}
                    color='accent'
                    name={icon}
                />
                : ''
            }
            {label}
        </Text>
    );
};
