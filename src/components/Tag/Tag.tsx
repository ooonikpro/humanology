import React from 'react';
import styles from './Tag.module.scss';
import { getIconName, Icon, Props as IconProps } from '../Icon';

interface Props {
    sign?: IconProps['name'] | string;
    color?: IconProps['color'];
    size?: number;
}

export const Tag: React.FC<Props> = ({
    sign = 'Unknown',
    color = 'accent',
    size = 24,
}) => {
    const rootClasses = [
        styles.root,
        color && styles[`color-${color}`]
    ].join(' ');

    return (
        <div className={rootClasses}>
            <Icon name={getIconName(sign)} color={color} size={size}/>
        </div>
    );
};