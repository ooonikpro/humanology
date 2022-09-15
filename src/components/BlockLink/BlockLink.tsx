import React, { useCallback, useRef } from 'react';
import { Icon } from '../Icon';
import * as Icons from '../Icon/icons';
import styles from './BlockLink.module.scss';
import { useNavigate } from 'react-router-dom';
import { useIsActiveRoute } from '../../hooks';
import { Text } from '../Text';

interface Props {
    className?: string;
    path: string;
    label: string;
    icon?: keyof typeof Icons;
}

export const BlockLink: React.FC<Props> = ({ path, label, icon, className }) => {
    const goTo = useNavigate();
    const isActiveRoute = useIsActiveRoute(path);

    const classes = [styles.root, className, isActiveRoute ? styles.active : ''].join(' ');
    const ref = useRef<HTMLElement>(null);
    
    const onClick = useCallback(() => goTo(path), [path]);

    return (
        <div className={classes} onClick={onClick}>
            { icon ?
                <Icon
                    className={styles.icon}
                    size={24}
                    color='accent'
                    name={icon}
                />
                : ''
            }
            <Text
                ref={ref}
                tag="button"
                size="smaller"
                color="accent"
                className={styles.label}
            >

                {label}
            </Text>
        </div>
    );
};

