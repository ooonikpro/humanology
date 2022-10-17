import React from 'react';
import styles from './Mentality.module.scss';
import { Modal, ModalProps } from '../../components/Modal';
import { TitleInfo } from '../../components/TitleInfo';
import { useSwipeable } from 'react-swipeable';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';
import { useSociotype } from '../../hooks';

export const Mentality: React.FC<ModalProps> = ({
    ...modalProps
}) => {

    const { sociotypeProps: intertypeProps } = useSociotype();
    const { id: intertype } = intertypeProps;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./Content/${intertype}.tsx`).default;

    const swipeableHandlers = useSwipeable({
        onSwipedDown: modalProps.onClose
    });
    const render = () => {
        return (
            <WhiteCard color="beige-title" className={styles.root}>
                <div className={styles.header} {...swipeableHandlers}>
                    <TitleInfo
                        className={styles.title}
                        iconSize={24}
                        iconColor="accent"
                    >
                        Ментальность
                    </TitleInfo>
                </div>

                <div className={styles.body}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                    <EndPoint />
                </div>
            </WhiteCard>
        );
    };

    return <Modal render={render} {...modalProps} />;
};
