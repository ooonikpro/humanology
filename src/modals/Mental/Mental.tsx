import React from 'react';
import { DetailCard } from 'src/components/DetailCard';
import { Modal, ModalProps } from 'src/components/Modal';
import { DETAIL_CARD_QUADRAS } from 'src/constants/detailCard';
import { useSociotype } from 'src/hooks';


export const Mental: React.FC<ModalProps> = (
    {
        ...modalProps
    }
) => {

    const { sociotypeProps: intertypeProps } = useSociotype();
    const { element } = intertypeProps;
    const render = () => (
        <>
            {
                DETAIL_CARD_QUADRAS.filter(item => item.quadra === element).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }
        </>
    );

    return <Modal render={render} {...modalProps} />;
};
