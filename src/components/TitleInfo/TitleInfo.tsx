import React from 'react';
import styles from './TitleInfo.module.scss';

import { Text, Props as TextProps } from '../Text';
import { Icon, Props as IconProps } from '../Icon';
import { TextInline, Props as TextInlineProps } from '../TextInline';

interface Props {
    textColor?: TextProps<'strong'>['color'];
    textSize?: TextProps<'strong'>['size'];
    iconColor?: IconProps['color'];
    iconSize?: IconProps['size'];
    align?: TextInlineProps['align'],
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    render?: () => Props['children'];
}

export const TitleInfo: React.FC<Props> = ({
    textColor = 'accent',
    textSize = 'base',
    iconColor = 'accent',
    iconSize = 24,
    align,
    children,
    className,
    render,
}) => {
    return (
        <div className={styles.background} >
            <TextInline align={align} className={className} justify="between">
                {
                    render ? render() :
                        <Text tag="p" color={textColor} size={textSize} className={styles.text}>
                            {children}
                        </Text>
                }

                <Icon
                    name="Help"
                    color={iconColor}
                    size={iconSize}
                    className={styles.icon}
                />
            </TextInline>
        </div>
    );
};
