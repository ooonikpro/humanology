import React from 'react';
import styles from './BlockDescription.module.scss';
import {
    FunctionalCardRow,
    FunctionCardRowItem,
} from '../../components/FunctionalCardRow';
import { Modal, ModalProps } from '../../components/Modal';
import { TitleInfo } from '../../components/TitleInfo';
import { BLOCKS, BLOCKS_LABELS } from '../../constants/blocks';
import { Socionics } from 'src/types';
import { useSwipeable } from 'react-swipeable';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';
import { Text } from '../../components/Text';
import { DETAIL_CARD_BLOCKS } from '../../constants/detailCard';
import { DetailCard } from '../../components/DetailCard';

export interface Props extends ModalProps {
    intertype: Socionics.SocionicsType;
    data: FunctionCardRowItem;
    onClickRowItem?: (
        item: FunctionCardRowItem['data'][0] | FunctionCardRowItem['data'][1]
    ) => void;
}

export const BlockDescription: React.FC<Props> = ({
    intertype,
    data,
    onClickRowItem,
    ...modalProps
}) => {
    const blockId = data.blockId;
    const title = BLOCKS[blockId];
    const labels = BLOCKS_LABELS[blockId];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./${blockId}/${intertype}.tsx`).default;

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
                        {title}
                        <Text tag="span" color="accent" size="body" className={styles.labels}>
                            {labels}
                        </Text>
                    </TitleInfo>
                </div>

                <div className={styles.body}>
                    <FunctionalCardRow
                        items={data.data}
                        onClickLeft={onClickRowItem}
                        onClickRight={onClickRowItem}
                    />

                    <React.Suspense>
                        <Description />
                    </React.Suspense>

                    <hr />

                    <div className={styles.detailCards}>
                        {
                            DETAIL_CARD_BLOCKS.filter(item => item.block === blockId).map((item, $item) => <DetailCard {...item} key={$item} />)
                        }
                    </div>

                    <EndPoint />
                </div>
            </WhiteCard>
        );
    };

    return <Modal render={render} {...modalProps} />;
};
