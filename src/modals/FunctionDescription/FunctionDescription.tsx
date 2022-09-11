import React from 'react';
import styles from './FunctionDescription.module.scss';
import { Modal, ModalProps } from '../../components/Modal';
import { TitleInfo } from '../../components/TitleInfo';
import { FUNCTION } from '../../constants/functions';
import { Socionics } from '../../types';
import { useSwipeable } from 'react-swipeable';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';
import { FunctionalCardRow, FunctionCardRowItem } from 'src/components/FunctionalCardRow';

interface Props extends ModalProps {
    function: Socionics.Function;
    aspect: Socionics.Aspect;
    data: FunctionCardRowItem;
    intertype: Socionics.SocionicsType;
}

export const FunctionDescription: React.FC<Props> = (props) => {
    const name = FUNCTION[props.function];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./${props.function}/${props.intertype}.tsx`).default;
    const swipeableHandlers = useSwipeable({
        onSwipedDown: props.onClose
    });

    const render = () => {
        return (
            <>
                <WhiteCard color="beige-title" className={styles.root}>
                    <div className={styles.header} {...swipeableHandlers}>
                        <TitleInfo
                            className={styles.title}
                            iconSize={24}
                            iconColor="accent"
                        >
                            {name} функция
                        </TitleInfo>
                    </div>
                    <div className={styles.body}>
                        <FunctionalCardRow
                            items={props.data.data}
                            activeFunction={props.function}
                        />

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
