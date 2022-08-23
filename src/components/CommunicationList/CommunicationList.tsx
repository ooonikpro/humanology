import React from 'react';
import { Socionics } from '../../types';
import { MOTIVATION } from '../../constants/motivation';
import { COMMUNICATION_STYLE } from '../../constants/communicationStyle';
import { COMPANION } from '../../constants/companion';
import { TEMPERAMENT, TEMPERAMENT_LABEL } from '../../constants/temperament';
import { mindset } from '../../constants/mindset';
import { ALIGNMENT } from '../../constants/alignment';
import { PropList, RowItem } from '../../components/PropList';

interface Props {
    mindset: Socionics.Mindset;
    stimulant: Socionics.Stimulant;
    communication: Socionics.CommunicationStyle;
    companion: Socionics.Companion;
    temperament: Socionics.Temperament;
    ideology: Socionics.Alignment;
    className?: string;
}

export const CommunicationList: React.FC<Props> = (props) => {
    const rows: RowItem[] = [
        {
            textColor: 'role',
            label: 'Стимул',
            value: MOTIVATION[props.stimulant],
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
            value: mindset[props.mindset],
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
            textColor: 'black',
            label: 'Мировоззрение',
            value: ALIGNMENT[props.ideology],
        },
    ];

    return <PropList rows={rows} className={props.className}/>;
};