import React from 'react';
import { Humanology } from '../../types';
import { STIMULANT } from '../../constants/stimulant';
import { COMMUNICATION_STYLE } from '../../constants/communicationStyle';
import { COMPANION } from '../../constants/companion';
import { TEMPERAMENT, TEMPERAMENT_LABEL } from '../../constants/temperament';
import { MIND } from '../../constants/mind';
import { IDEOLOGY } from '../../constants/ideology';
import { PropList, RowItem } from '../../components/PropList';

interface Props {
    mind: Humanology.Mind;
    stimulant: Humanology.Stimulant;
    communication: Humanology.CommunicationStyle;
    companion: Humanology.Companion;
    temperament: Humanology.Temperament;
    ideology: Humanology.Ideology;
    className?: string;
}

export const CommunicationList: React.FC<Props> = (props) => {
    const rows: RowItem[] = [
        {
            textColor: 'role',
            label: 'Стимул',
            value: STIMULANT[props.stimulant],
        },
        {
            textColor: 'black',
            label: 'Стиль общения',
            value: COMMUNICATION_STYLE[props.communication],
        },
        {
            textColor: 'black',
            label: 'Собеседник',
            value: COMPANION[props.companion],
        },
        {
            icon: props.temperament,
            iconSize: { width: 38, height: 16 },
            iconColor: 'role',
            textColor: 'black',
            label: 'Темперамент',
            value: TEMPERAMENT[props.temperament],
            subLabel: TEMPERAMENT_LABEL[props.temperament],
        },
        {
            textColor: 'black',
            label: 'Мышление',
            value: MIND[props.mind],
        },
        {
            textColor: 'black',
            label: 'Мировоззрение',
            value: IDEOLOGY[props.ideology],
        },
    ];

    return <PropList rows={rows} className={props.className}/>;
};