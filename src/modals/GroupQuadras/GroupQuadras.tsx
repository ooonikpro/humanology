import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { DetailCard } from '../../components/DetailCard';
import { EndPoint } from '../../components/EndPoint';
import { Modal, ModalProps } from '../../components/Modal';
import { TitleInfo } from '../../components/TitleInfo';
import { WhiteCard } from '../../components/WhiteCard';
import { DETAIL_CARD_CLUBS, DETAIL_CARD_PSYCHOTYPES, DETAIL_CARD_QUADRAS, DETAIL_CARD_ROLES, DETAIL_CARD_SUITS } from '../../constants/detailCard';
import { useSociotype } from 'src/hooks';
import styles from './GroupQuadras.module.scss';


export const GroupQuadras: React.FC<ModalProps> = (
    {
        ...modalProps
    }
) => {

    const { sociotypeProps: intertypeProps } = useSociotype();
    const { element, role, tarot, psychotype, club } = intertypeProps;
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
                    Группы и квадры
                </TitleInfo>
            </div>
            <div className={styles.detailCards}>
                {
                    DETAIL_CARD_QUADRAS.filter(item => item.quadra === element).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }
                {
                    DETAIL_CARD_ROLES.filter(item => item.role === role).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }
                {
                    DETAIL_CARD_SUITS.filter(item => item.suit === tarot).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }
                {
                    DETAIL_CARD_PSYCHOTYPES.filter(item => item.psychotype === psychotype).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }
                {
                    DETAIL_CARD_CLUBS.filter(item => item.club === club).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                }
            </div>
            <EndPoint />
        </WhiteCard>
    );

    return <Modal render={render} {...modalProps} />;
};
