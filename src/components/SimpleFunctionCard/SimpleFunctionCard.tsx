import React from 'react';
import styles from './SimpleFunctionCard.module.scss';
import { Humanology } from 'src/types';
import { getIconName, Icon } from '../Icon';
import { FUNCTION } from 'src/constants/functions';
import { Text } from '../Text';

export interface Props {
    function: Humanology.Function;
}

interface ICardSettings {
    opacity: 1 | 0.75 | 0.5;
    transparent: boolean;
    outline: boolean;
    striped: boolean;
    size: 'xl' | 'l' | 'm' | 's';
}

const SETTINGS: Record<Humanology.Function, ICardSettings> = {
    base: {
        opacity: 1,
        transparent: false,
        outline: false,
        striped: false,
        size: 'xl',
    },

    creative: {
        opacity: 0.75,
        transparent: false,
        outline: false,
        striped: false,
        size: 'l',
    },

    pain: {
        opacity: 1,
        transparent: true,
        outline: true,
        striped: true,
        size: 'm',
    },

    role: {
        opacity: 1,
        transparent: true,
        outline: false,
        striped: false,
        size: 's',
    },

    suggestive: {
        opacity: 1,
        transparent: true,
        outline: false,
        striped: false,
        size: 'xl',
    },

    activate: {
        opacity: 1,
        transparent: true,
        outline: false,
        striped: false,
        size: 'l',
    },

    back: {
        opacity: 0.5,
        transparent: false,
        outline: false,
        striped: false,
        size: 'm',
    },

    limit: {
        opacity: 0.5,
        transparent: false,
        outline: false,
        striped: false,
        size: 's',
    }
};

export const SimpleFunctionCard: React.FC<Props> = (props) => {
    const { outline, transparent, striped, opacity, size } = SETTINGS[props.function];
    const rootClasses = [
        styles.root,
        styles[`size-${size}`],
        outline && styles.outline,
        transparent && styles.transparent,
        striped && styles.striped,
    ].join(' ');

    const isElementColor = outline || transparent || striped;
    const textColor = isElementColor ? 'element' : 'white';
    const functionIcon = getIconName(`function-${props.function}`);
    const functionLabel = FUNCTION[props.function];

    return (
        <div className={rootClasses} style={{ opacity: opacity || 1 }}>
            {(striped || outline) && (
                <div className={styles.stripe} />
            )}

            <Text color={textColor} className={styles.function}>
                {functionLabel}
            </Text>

            <Icon
                name={functionIcon}
                color={textColor}
                size={24}
                className={styles.functionIcon}
            />
        </div>
    );
};
