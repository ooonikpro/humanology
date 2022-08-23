import React from 'react';
import styles from './FunctionDescription.module.scss';
import { getIconName, Icon } from 'src/components/Icon';
import { Modal, ModalProps } from 'src/components/Modal';
import { Text } from 'src/components/Text';
import { TitleInfo } from 'src/components/TitleInfo';
import { ASPECTS, ASPECTS_LABEL } from 'src/constants/aspects';
import { FUNCTION } from 'src/constants/functions';
import { Socionics } from 'src/types';
import { useSwipeable } from 'react-swipeable';

interface Props extends ModalProps {
    function: Socionics.Function;
    aspect: Socionics.Aspect;
    intertype: Socionics.SocionicsType;
}

export const FunctionDescription: React.FC<Props> = (props) => {
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
                    <TitleInfo iconSize={24} iconColor="accent" className={styles.title}>
                        {name} функция
                    </TitleInfo>
                </div>
                <div className={styles.body}>
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
                            <Text size="smaller">{aspectSubtitle}</Text>
                        </div>

                    </div>
                    <hr />
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </>
        );
    };

    return <Modal isOpen={props.isOpen} onClose={props.onClose} render={render} />;
};