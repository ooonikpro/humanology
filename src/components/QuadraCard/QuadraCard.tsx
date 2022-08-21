import React from 'react';
import styles from './QuadraCard.module.scss';
import { TextInline } from '../TextInline';
import { getIconName, Icon } from '../Icon';
import { TitleInfo } from '../TitleInfo';
import { Text } from '../Text';
import { WhiteCard } from '../WhiteCard';
import { useColorElement } from '../../hooks';
import { QUADRAS } from '../../constants/natureElements';
import { Humanology } from '../../types';

export interface Props {
    element: Humanology.Elements;
    onClick: () => void;
    status: string;
    types: string[];
    intro : string;
    description: Array<{
        title: string;
        content: string;
    }>
}

export const QuadraCard: React.FC<Props> = ({
    element,
    onClick,
    status,
    types,
    intro,
    description
}) => {
    const { color: style } = useColorElement(element);
    const title = QUADRAS[element];

    return (
        <WhiteCard
            style={style}
            className={styles.root}
            onClick={onClick}
        >
            <TextInline align="start" className={styles.text}>
                <div className={styles.icon}>
                    <Icon
                        size={64}
                        color="element"
                        name={getIconName(element)}
                    />
                </div>

                <div className={styles.wrap}>
                    <TitleInfo textColor="element" iconColor="element" textSize="h6">
                        {status}
                    </TitleInfo>

                    <TextInline>
                        {types.map((type, $t) => {
                            return (
                                <Text tag="b" color="grey" size="small" key={$t}>
                                    {type}
                                </Text>
                            );
                        })}
                    </TextInline>
                </div>
            </TextInline>

            <Text color="element" tag="h3" size="h3" className={styles.title}>
                {title}
            </Text>

            <Text tag="p" color="element" size="h6" className={styles.text}>
                {intro}
            </Text>

            {description.map((desc, $d) => {
                return (
                    <div key={$d} className={styles.text}>
                        <Text tag="p" size="h6" className={styles.text}>
                            {desc.title}
                        </Text>

                        <Text tag="p" color="grey" className={styles.text}>
                            {desc.content}
                        </Text>
                    </div>
                );
            })}
        </WhiteCard>
    );
};