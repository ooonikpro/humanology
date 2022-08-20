import React from 'react';
import styles from './FunctionDescription.module.scss';
import { getIconName, Icon } from 'src/components/Icon';
import { Modal, ModalProps } from 'src/components/Modal';
import { Text } from 'src/components/Text';
import { TitleInfo } from 'src/components/TitleInfo';
import { ASPECTS, ASPECTS_LABEL } from 'src/constants/aspects';
import { FUNCTION } from 'src/constants/functions';
import { Humanology } from 'src/types';
import { useSwipeable } from 'react-swipeable';

interface Props extends ModalProps {
    function: Humanology.Function;
    aspect: Humanology.Aspect;
    intertype: Humanology.Intertype;
}

export const FunctionDescription: React.FC<Props> = (props) => {
    const icon = getIconName(`function-${props.function}`);
    const name = FUNCTION[props.function];
    const aspectTitle = ASPECTS[props.aspect];
    const aspectSubtitle = ASPECTS_LABEL[props.aspect];
    const aspectIconMini = getIconName(`aspect-${props.aspect}-mini`);
    const aspectIcon = getIconName(`aspect-${props.aspect}`);
    const Description = React.lazy(() => import(`./${props.function}/${props.intertype}.tsx`));
    const swipeableHandlers = useSwipeable({
        onSwipedDown: props.onClose
    });

    const render = () => {
        return (
            <>
                <div className={styles.header} {...swipeableHandlers}>
                    <TitleInfo iconSize={18} iconColor="element" className={styles.title}>
                        <Icon
                            name={icon}
                            size={32}
                            className={styles['title-icon']}
                        />
                        {name} функция
                    </TitleInfo>

                    <div className={styles['aspect-details']}>
                        <Icon
                            name={aspectIconMini}
                            size={24}
                            className={styles['icon-mini']}
                        />

                        <Icon name={aspectIcon} size={96} color="element" />

                        <div className={styles['aspect-details-text']}>
                            <Text size="h3" color="element">
                                {aspectTitle}
                            </Text>
                            <Text size="small">{aspectSubtitle}</Text>
                        </div>
                    </div>
                </div>

                <hr />

                <div className={styles.body}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </>
        );
    };

    return <Modal isOpen={props.isOpen} onClose={props.onClose} render={render} />;
};
