import React, { CSSProperties } from 'react';
import styles from './SuitCard.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { TextInline } from '../../components/TextInline';
import { Text } from '../../components/Text';
import { Icon, Props as IconProps } from '../../components/Icon';
import { TitleInfo } from '../../components/TitleInfo';

export interface Props {
    title: string;
    types: string[];
    intro: string;
    description: string[];
    icon: IconProps['name'];
    color: 'role' | 'accent';
    style?: CSSProperties;
    status: string;
    onClick?: () => void;
}

export const SuitCard: React.FC<Props> = ({
    icon,
    color = 'accent',
    style,
    status,
    title,
    intro,
    types,
    description,
    onClick,
}) => {
    return (
        <WhiteCard
            style={style}
            className={[onClick ? styles.clickable : ''].join(' ')}
            onClick={onClick}
        >
            <TextInline align="start" className={styles.text}>
                <Icon
                    size={64}
                    color={color}
                    name={icon}
                    className={styles.icon}
                />
                <TitleInfo textColor={color} iconColor={color} textSize="large">
                    {status}
                </TitleInfo>
            </TextInline>

            <Text color={color} tag="h3" size="h3" className={styles.title}>
                {title}
            </Text>

            <TextInline className={styles.text}>
                {types.map((type, $t) => {
                    return (
                        <Text color="grey" key={$t}>
                            {type}
                        </Text>
                    );
                })}
            </TextInline>

            <Text tag="p" color={color} size="h6" className={styles.text}>
                {intro}
            </Text>

            {description.map((desc, $d) => {
                return (
                    <Text tag="p" key={$d} className={styles.text}>
                        {desc}
                    </Text>
                );
            })}
        </WhiteCard>
    );
};
