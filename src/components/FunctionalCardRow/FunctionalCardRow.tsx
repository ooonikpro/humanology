import React from 'react';
import {
    FunctionalCard,
    Props as CardProps,
} from '../../components/FunctionalCard';
import { BLOCKS } from '../../constants/blocks';
import styles from './FunctionalCardRow.module.scss';
import { Socionics } from '../../types';

export interface FunctionCardRowItem {
    id: string;
    blockId: keyof typeof BLOCKS;
    data: [Omit<CardProps, 'element'>, Omit<CardProps, 'element'>];
}

interface Props {
    items: [Omit<CardProps, 'element'>, Omit<CardProps, 'element'>];
    activeFunction?: CardProps['function'];
    onClickLeft?: (data: Omit<CardProps, 'element'>) => void;
    onClickRight?: (data: Omit<CardProps, 'element'>) => void;
    className?: string;
}

export const FunctionalCardRow: React.FC<Props> = ({
    items,
    className,
    activeFunction,
    onClickLeft,
    onClickRight,
}) => {
    const isDisable = (f: Socionics.Function) => activeFunction && f !== activeFunction;

    return (
        <div className={[styles.root, className].join(' ')}>
            <FunctionalCard
                {...items[0]}
                disabled={isDisable(items[0].function)}
                onClick={onClickLeft ? () => onClickLeft(items[0]) : undefined}
            />

            <FunctionalCard
                {...items[1]}
                disabled={isDisable(items[1].function)}
                onClick={onClickRight ? () => onClickRight(items[1]) : undefined}
            />
        </div>
    );
};
