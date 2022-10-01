import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { DetailCard } from '../../components/DetailCard';
import { EndPoint } from '../../components/EndPoint';
import { Modal, ModalProps } from '../../components/Modal';
import { TitleInfo } from '../../components/TitleInfo';
import { WhiteCard } from '../../components/WhiteCard';
import { DETAIL_CARD_YUNG } from '../../constants/detailCard';
// import { useSociotype } from 'src/hooks';
import styles from './YungDichotomies.module.scss';


export const YungDichotomies: React.FC<ModalProps> = (
    {
        ...modalProps
    }
) => {

    // const { sociotypeProps: intertypeProps } = useSociotype();
    // const { yungs } = intertypeProps;
    const swipeableHandlers = useSwipeable({
        onSwipedDown: modalProps.onClose
    });
    const render = () => (
        <WhiteCard color="beige-title" className={styles.root}>
            <div className={styles.header} {...swipeableHandlers}>
                <TitleInfo
                    className={styles.title}
                    iconSize={24}
                    iconColor="accent"
                >
                    Дихотомии Юнга
                </TitleInfo>
            </div>
            <div className={styles.detailCards}>
                {
                    DETAIL_CARD_YUNG.map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
                }
            </div>
            <EndPoint />
        </WhiteCard>
    );

    return <Modal render={render} {...modalProps} />;
};
