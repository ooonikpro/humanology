import React, { useState } from 'react';
import styles from './FunctionalCardGroup.module.scss';
import { Humanology } from '../../types';
import { FunctionalCardRow, FunctionCardRowItem } from '../FunctionalCardRow';
import { BlockDescription, Props as DescriptionModalProps } from 'src/modals';
import { FunctionDescription } from 'src/modals/FunctionDescription';

interface Props {
    intertype: Humanology.Intertype;
    element: Humanology.Elements;
    good: Humanology.Aspect;
    necessary: Humanology.Aspect;
    bad: Humanology.Aspect;
    noNeed: Humanology.Aspect;
    fear: Humanology.Aspect;
    problems: Humanology.Aspect;
    desires: Humanology.Aspect;
    solutions: Humanology.Aspect;
}

export const FunctionalCardGroup: React.FC<Props> = (props) => {
    const data: Array<FunctionCardRowItem> = [
        {
            id: 'BlockModal',
            blockId: 'ego',
            data: [
                {
                    aspect: props.good,
                    function: 'base',
                    number: 1,
                    lvl: 4,
                    size: 'xl',
                },

                {
                    aspect: props.necessary,
                    function: 'creative',
                    number: 2,
                    lvl: 3,
                    size: 'l',
                },
            ],
        },
        {
            id: 'BlockModal',
            blockId: 'id',
            data: [
                {
                    aspect: props.bad,
                    function: 'limit',
                    number: 7,
                    lvl: 3,
                    opacity: 0.5,
                    size: 's',
                },

                {
                    aspect: props.noNeed,
                    function: 'back',
                    number: 8,
                    lvl: 4,
                    opacity: 0.5,
                    size: 'm',
                },
            ],
        },
        {
            id: 'BlockModal',
            blockId: 'superEgo',
            data: [
                {
                    aspect: props.fear,
                    function: 'role',
                    number: 3,
                    lvl: 2,
                    opacity: 1,
                    size: 's',
                    transparent: true,
                },

                {
                    aspect: props.problems,
                    function: 'pain',
                    number: 4,
                    lvl: 1,
                    opacity: 1,
                    size: 'm',
                    striped: true,
                },
            ],
        },
        {
            id: 'BlockModal',
            blockId: 'superId',
            data: [
                {
                    aspect: props.desires,
                    function: 'suggestive',
                    number: 5,
                    lvl: 1,
                    outline: true,
                    size: 'xl',
                },

                {
                    aspect: props.solutions,
                    function: 'activate',
                    number: 6,
                    lvl: 2,
                    outline: true,
                    size: 'l',
                },
            ],
        },
    ];

    const [isOpenBlockModal, setIsOpenBlockModal] = useState(false);
    const [blockDescriptionData, setBlockDescriptionData] = useState<
        Omit<DescriptionModalProps, 'onClose' | 'isOpen'>
    >({
        intertype: props.intertype,
        data: data[0],
    });
    const onClickRow = (i: number) => {
        setBlockDescriptionData({ data: data[i], intertype: props.intertype });
        setIsOpenBlockModal(true);
    };
    const onCloseBlockModal = () => setIsOpenBlockModal(false);

    const [isOpenFunctionModal, setIsOpenFunctionModal] = useState(false);
    const [functionDescriptionData, setFunctionDescriptionData] = useState({
        ...data[0].data[0],
        intertype: props.intertype,
    });
    const onClickRowItem = (
        item: FunctionCardRowItem['data'][0] | FunctionCardRowItem['data'][1]
    ) => {
        setFunctionDescriptionData((prevState) => ({
            ...prevState,
            ...item,
        }));
        setIsOpenFunctionModal(true);
        onCloseBlockModal();
    };
    const onCloseFunctionModal = () => setIsOpenFunctionModal(false);

    return (
        <>
            <div className={styles.root}>
                {data.map((row, $i) => {
                    return (
                        <FunctionalCardRow
                            items={row.data}
                            key={$i}
                            onClickLeft={() => onClickRow($i)}
                            onClickRight={() => onClickRow($i)}
                        />
                    );
                })}
            </div>

            <BlockDescription
                {...blockDescriptionData}
                isOpen={isOpenBlockModal}
                onClose={onCloseBlockModal}
                onClickRowItem={onClickRowItem}
            />

            <FunctionDescription
                {...functionDescriptionData}
                isOpen={isOpenFunctionModal}
                onClose={onCloseFunctionModal}
            />
        </>
    );
};