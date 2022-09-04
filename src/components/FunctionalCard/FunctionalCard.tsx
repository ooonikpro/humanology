import React, { useMemo } from 'react';
import styles from './FunctionalCard.module.scss';
import { Socionics } from '../../types';
import { getIconName, Icon } from '../../components/Icon';
import { ASPECTS } from '../../constants/aspects';
import { FUNCTION_LABELS } from '../../constants/functions';
import { Text } from '../../components/Text';

export interface Props {
    transparent?: boolean;
    outline?: boolean;
    striped?: boolean;
    aspect: Socionics.Aspect;
    function: Socionics.Function;
    number: number;
    opacity?: 1 | 0.75 | 0.5;
    lvl: 1 | 2 | 3 | 4 ;
    size: 'xl' | 'l' | 'm' | 's';
    onClick?: () => void;
}

export const FunctionalCard: React.FC<Props> = (props) => {
    const rootClasses = [
        styles.root,
        styles[`size-${props.size}`],
        styles[`number-${props.number}`],
        props.outline && styles.outline,
        props.transparent && styles.transparent,
        props.striped && styles.striped,
    ].join(' ');

    const isElementColor = props.outline || props.transparent || props.striped;
    const textColor = isElementColor ? 'element' : 'white';
    const aspect = getIconName(`aspect-${props.aspect}`);
    const functionIcon = getIconName(`function-${props.function}`);
    const aspectLabel = ASPECTS[props.aspect];
    const functionLabel = FUNCTION_LABELS[props.function];
    const getAspectIconSize = (size: Props['size']) => {
        switch (size) {
            case 'xl':
                return 96;
            case 'l':
                return 72;
            case 'm':
                return 64;
            default:
                return 0;
        }
    };
    const aspectIconSize = getAspectIconSize(props.size);

    const lines = useMemo(() => {
        return new Array(props.lvl).fill(null).map((_, $i) => <span key={$i} />);
    }, [props.lvl]);

    return (
        <div
            className={rootClasses}
            style={{ opacity: props.opacity || 1 }}
            onClick={props.onClick}
        >
            {(props.striped || props.outline) && (
                <div className={styles.stripe} />
            )}

            <div className={styles.top}>
                <span className={styles.pair}>
                    <div className={styles.lvl}>
                        {lines}
                    </div>
                    <Text color={textColor} size="small">
                        {functionLabel}
                    </Text>
                </span>
                <Icon
                    name={functionIcon}
                    color={textColor}
                    size={24}
                    className={styles.function}
                />
            </div>

            {Boolean(aspectIconSize) && (
                <Icon
                    name={aspect}
                    size={aspectIconSize}
                    color={textColor}
                    className={styles.aspect}
                />
            )}

            <div className={styles.bottom}>
                <Text color={textColor} font="additional" size="h5">
                    {aspectLabel}
                </Text>
                <Text color={textColor} size="small" className={styles.number}>
                    {props.number}
                </Text>
            </div>
        </div>
    );
};
