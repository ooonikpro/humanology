import React, { useState } from 'react';
import styles from './SociotypesCard.module.scss';
import { Socionics } from '../../../types';
import { useSociotype } from '../../../hooks/useSociotype';
import { WhiteCard } from '../../../components/WhiteCard';
import { YUNGS_DICHTOMIES } from '../../../constants/yungsDichotomies';
import { REININ_SIGNS } from '../../../constants/reininSigns';
import { CommunicationList } from '../../../components/CommunicationList';
import { TitleInfo } from '../../../components/TitleInfo';
import { ListOptions } from '../../../components/ListOptions';
import { GroupsAndQuadsList } from '../../../components/GroupsAndQuadsList';
import { EndPoint } from '../../../components/EndPoint';
import { GroupQuadras } from '../../../modals/GroupQuadras';
import { YungDichotomies } from 'src/modals/YungDichotomies';

const getRow = (
    options: Array<string[]>,
    translate: Record<string, string>
) => {
    return (value: string, $i: number) => {
        const label = options[$i].filter((l) => l !== value).toLocaleString();

        return {
            label: translate[label],
            value: translate[value],
        };
    };
};

const Dichotomy: Array<Socionics.Dichotomy[]> = [
    ['irrational', 'rational'],
    ['intuit', 'sensory'],
    ['logic', 'ethic'],
    ['extravert', 'introvert'],
];

const reininRows: Array<Socionics.ReininSign[]> = [
    ['static', 'dynamic'],
    ['positivist', 'negativist'],
    ['questim', 'declamtim'],
    ['tactician', 'strategist'],
    ['constructivist', 'emotivist'],

    ['process', 'result'],
    ['compliant', 'stubborn'],
    ['careless', 'provident'],

    ['reasonable', 'decisive'],
    ['subjective', 'objective'],
    ['democrat', 'aristocrat'],
];

export default function SociotypesCard() {
    const [
        isShowGroupQuadrasModal,
        setisShowGroupQuadrasModal,
    ] = useState(false);

    const [
        isShowYungsDichotomiesModal,
        setisShowYungsDichotomieModal,
    ] = useState(false);

    const { sociotypeProps: intertypeProps } = useSociotype();

    const dichotomyYungs = intertypeProps.yungs.map(
        getRow(Dichotomy, YUNGS_DICHTOMIES)
    );

    const list = intertypeProps.reinin.map(getRow(reininRows, REININ_SIGNS));
    const reininList = [list.slice(0, 5), list.slice(5, 8), list.slice(8)];

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <TitleInfo icon className={styles.title}>Ментальность</TitleInfo>
                <CommunicationList
                    {...intertypeProps}
                    className={styles.list}
                />
            </WhiteCard>
            <WhiteCard color="white" onClick={() => setisShowGroupQuadrasModal(true)} className={styles.groupQuadras}>
                <TitleInfo icon className={styles.title}>Группы и квадры</TitleInfo>
                <GroupsAndQuadsList
                    {...intertypeProps}
                    className={styles.list}
                />
            </WhiteCard>
            <WhiteCard color="white" onClick={() => setisShowYungsDichotomieModal(true)} className={styles.yungsDichotomies}>
                <TitleInfo icon className={styles.title}>Дихотомии Юнга</TitleInfo>
                <ListOptions
                    options={dichotomyYungs}
                    className={styles.list}
                />
            </WhiteCard>
            <WhiteCard color="white">
                <TitleInfo icon className={styles.title}>Признаки Рейнина</TitleInfo>
                {reininList.map((list, $i) => (
                    <ListOptions
                        options={list}
                        key={$i}
                        className={styles.list}
                    />
                ))}
                <EndPoint />
            </WhiteCard>
            <GroupQuadras isOpen={isShowGroupQuadrasModal} onClose={() => setisShowGroupQuadrasModal(false)} />
            <YungDichotomies isOpen={isShowYungsDichotomiesModal} onClose={() => setisShowYungsDichotomieModal(false)} />
        </div>
    );
}

