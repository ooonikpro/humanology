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
    line?: boolean;
    icon?: boolean;
    render?: () => Props['children'];
}

export const TitleInfo: React.FC<Props> = ({
    textColor = 'accent',
    textSize = 'large',
    iconColor = 'accent',
    iconSize = 24,
    line = true,
    icon = false,
    align,
    children,
    className,
    render,
}) => {
    return (
        <>
            <TextInline align={align} className={className} justify="between">
                {
                    render ? render() :
                        <Text tag="p" color={textColor} size={textSize} className={styles.title}>
                            {children}
                        </Text>
                }
                {
                    icon && (
                        <Icon
                            name="Document"
                            color={iconColor}
                            size={iconSize}
                            className={styles.icon}
                        />
                    )
                }

            </TextInline>

            {
                line && (
                    <hr className={styles.line} />
                )
            }

        </>
    );
};
