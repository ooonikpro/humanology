import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './SociatypesCard.module.scss';
import { SocietyCard } from '../../components/SocietyCard';
import { Humanology } from '../../types';
import { useIntertype } from '../../hooks/useIntertype';
import { WhiteCard } from '../../components/WhiteCard';
import { JUNGS_DICHTOMIES } from '../../constants/jungsDichotomies';
import { REININ_SIGNS } from '../../constants/reininSigns';
import { FunctionalCardGroup } from '../../components/FunctionalCardGroup';
import { CommunicationList } from '../../components/CommunicationList';
import { TitleInfo } from '../../components/TitleInfo';
import { ListOptions } from '../../components/ListOptions';
import { GroupsAndQuadsList } from '../../components/GroupsAndQuadsList';

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

const dichotomie: Array<Humanology.Dichotomie[]> = [
    ['intuit', 'sensoric'],
    ['logic', 'etic'],
    ['extravert', 'introvert'],
    ['irrational', 'rational'],
];

const reininRows: Array<Humanology.ReininSign[]> = [
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

export default function SociatypesCard() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Humanology.Intertype;
    const { intertypeProps } = useIntertype(id);

    const dichotomieJungs = intertypeProps.jungs.map(
        getRow(dichotomie, JUNGS_DICHTOMIES)
    );

    const list = intertypeProps.reinin.map(getRow(reininRows, REININ_SIGNS));
    const reininList = [list.slice(0, 5), list.slice(5, 8), list.slice(8)];

    return (
        <>
            <SocietyCard {...intertypeProps} />

            <WhiteCard>
                <FunctionalCardGroup
                    element={intertypeProps.element}
                    intertype={intertypeProps.id}
                    {...intertypeProps.aspects}
                />

                <CommunicationList
                    {...intertypeProps}
                    className={styles.list}
                />

                <TitleInfo className={styles.title}>Группы и квадры</TitleInfo>
                <GroupsAndQuadsList
                    {...intertypeProps}
                    className={styles.list}
                />

                <TitleInfo className={styles.title}>Дихотомии Юнга</TitleInfo>
                <ListOptions
                    options={dichotomieJungs}
                    className={styles.list}
                />

                <TitleInfo className={styles.title}>Признаки Рейнина</TitleInfo>
                {reininList.map((list, $i) => (
                    <ListOptions
                        options={list}
                        key={$i}
                        className={styles.list}
                    />
                ))}
            </WhiteCard>
        </>
    );
}
