import React from 'react';
import { Humanology } from '../../types';
import { PropList, RowItem } from '../PropList';
import { QUADRAS } from '../../constants/natureElements';
import { ROLE } from '../../constants/role';
import { TAROT } from '../../constants/tarot';
import { GROUPS } from '../../constants/groups';
import { CLUBS } from '../../constants/clubs';
import { GENDER } from '../../constants/gender';

interface Props {
    element: Humanology.Elements
    role: Humanology.Role
    tarot: Humanology.Tarot
    psychotype: Humanology.Psychotype
    club: Humanology.Club
    gender: Humanology.Gender
    className?: string
}

const LABELS: Record<keyof Omit<Props, 'className'>, string> = {
    element: 'Квадра',
    role: 'Карта',
    tarot: 'Масть',
    psychotype: 'Группа',
    club: 'Клуб',
    gender: 'Тип характера',
};

export const GroupsAndQuadsList: React.FC<Props> = (props) => {
    const rows: RowItem[] = [
        {
            iconColor: 'element',
            textColor: 'element',
            icon: props.element,
            label: LABELS.element,
            value: QUADRAS[props.element],
        },
        {
            iconColor: 'role',
            textColor: 'role',
            icon: props.role,
            label: LABELS.role,
            value: ROLE[props.role].label,
        },
        {
            iconColor: 'accent',
            textColor: 'black',
            icon: props.tarot,
            label: LABELS.tarot,
            value: TAROT[props.tarot],
        },
        {
            iconColor: 'accent',
            textColor: 'black',
            icon: props.psychotype,
            label: LABELS.psychotype,
            value: GROUPS[props.psychotype],
        },
        {
            iconColor: 'accent',
            textColor: 'black',
            icon: props.club,
            label: LABELS.club,
            value: CLUBS[props.club],
        },
        {
            iconColor: 'accent',
            textColor: 'black',
            icon: props.gender,
            label: LABELS.gender,
            value: GENDER[props.gender],
        },
    ];

    return <PropList rows={rows} className={props.className}/>;
};