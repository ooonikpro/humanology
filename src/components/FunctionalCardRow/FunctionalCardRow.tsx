import React from 'react';
import {
    FunctionalCard,
    Props as CardProps,
} from '../../components/FunctionalCard';
import { BLOCKS } from 'src/constants/blocks';
import styles from './FunctionalCardRow.module.scss';

export interface FunctionCardRowItem {
    id: string;
    blockId: keyof typeof BLOCKS;
    data: [Omit<CardProps, 'element'>, Omit<CardProps, 'element'>];
}

interface Props {
    items: [Omit<CardProps, 'element'>, Omit<CardProps, 'element'>];
    onClickLeft?: (data: Omit<CardProps, 'element'>) => void;
    onClickRight?: (data: Omit<CardProps, 'element'>) => void;
    className?: string;
}

export const FunctionalCardRow: React.FC<Props> = ({
    items,
    className,
    onClickLeft = () => void 0,
    onClickRight = () => void 0,
}) => {
    return (
        <div className={[styles.root, className].join(' ')}>
            <FunctionalCard
                {...items[0]}
                onClick={() => onClickLeft(items[0])}
            />

            <FunctionalCard
                {...items[1]}
                onClick={() => onClickRight(items[1])}
            />
        </div>
    );
};
