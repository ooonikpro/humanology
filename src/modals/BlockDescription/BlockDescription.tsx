import React  from 'react';
import styles from './BlockDescription.module.scss';
import {
    FunctionalCardRow,
    FunctionCardRowItem,
} from 'src/components/FunctionalCardRow';
import { Modal, ModalProps } from 'src/components/Modal';
import { TitleInfo } from 'src/components/TitleInfo';
import { BLOCKS } from 'src/constants/blocks';
import { Socionics } from 'src/types';
import { useSwipeable } from 'react-swipeable';

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
    const Description = React.lazy(() => import(`./${blockId}/${intertype}.tsx`));

    const swipeableHandlers = useSwipeable({
        onSwipedDown: modalProps.onClose
    });
    const render = () => {
        return (
            <div className={styles.root}>
                <div className={styles.header} {...swipeableHandlers}>
                    <TitleInfo
                        className={styles.title}
                        iconSize={16}
                        iconColor="element"
                    >
                        {title}
                    </TitleInfo>
                </div>

                <div className={styles.body}>
                    <FunctionalCardRow
                        items={data.data}
                        onClickLeft={onClickRowItem}
                        onClickRight={onClickRowItem}
                    />

                    <hr />

                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </div>
        );
    };

    return <Modal render={render} {...modalProps} />;
};
