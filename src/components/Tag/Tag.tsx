import React from 'react';
import styles from './Tag.module.scss';
import { getIconName, Icon, Props as IconProps } from '../Icon';

interface Props {
    sign?: IconProps['name'] | string;
    color?: IconProps['color'];
}

export const Tag: React.FC<Props> = ({
    sign = 'Unknown',
    color = 'accent'
}) => {
    const rootClasses = [
        styles.root,
        color && styles[`color-${color}`]
    ].join(' ');

    return (
        <div className={rootClasses}>
            <Icon name={getIconName(sign)} color={color} size={{ width: 24, height: 24 }}/>
        </div>
    );
};