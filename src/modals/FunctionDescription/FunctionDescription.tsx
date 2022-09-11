import React from 'react';
import styles from './FunctionDescription.module.scss';
import { getIconName, Icon } from '../../components/Icon';
import { Modal, ModalProps } from '../../components/Modal';
import { Text } from '../../components/Text';
import { TitleInfo } from '../../components/TitleInfo';
import { ASPECTS, ASPECTS_LABEL } from '../../constants/aspects';
import { FUNCTION } from '../../constants/functions';
import { Socionics } from '../../types';
import { useSwipeable } from 'react-swipeable';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';

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
                <WhiteCard color="beige-title" className={styles.root}>
                    <div className={styles.header} {...swipeableHandlers}>
                        <TitleInfo iconSize={24} iconColor="accent" className={styles.title}>
                            {name} функция
                        </TitleInfo>
                    </div>
                    <div className={styles['aspect-details']}>
                        <Icon
                            name={aspectIconMini}
                            size={24}
                            className={styles['icon-mini']}
                        />
                        <Icon name={aspectIcon} size={108} color="role" className={styles.aspectIcon} />

                        <div className={styles['aspect-details-text']}>
                            <Text size="h3" color="role" font="additional">
                                {aspectTitle}
                            </Text>
                            <Text size="base" color="accent">{aspectSubtitle}</Text>
                        </div>
                        <Icon
                            name="Help"
                            color="accent"
                            size={24}
                            className={styles['icon-help']}
                        />
                    </div>
                    <div className={styles.body}>
                        <React.Suspense>
                            <Description />
                        </React.Suspense>

                        <EndPoint />
                    </div>
                </WhiteCard>
            </>
        );
    };

    return <Modal isOpen={props.isOpen} onClose={props.onClose} render={render} />;
};