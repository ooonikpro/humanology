import React from 'react';
import { Socionics } from '../types';
import { INTERTYPES } from '../constants/socionicsTypes';
import { useColorElement } from './useColorElement';
import { useColorRole } from './useColorRole';
import { useColorRoleDual } from './useColorRoleDual';
import { useParams } from 'react-router-dom';

export const useIntertype = () => {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const intertypeProps: Socionics.IntertypeProp & { id: Socionics.SocionicsType } = {
        id,
        ...INTERTYPES[id],
    };
    const { color: colorElement } = useColorElement(intertypeProps.element);
    const { color: colorRole } = useColorRole(intertypeProps.role);
    const { color: colorRoleDual } = useColorRoleDual(intertypeProps.role);
    const styles: React.CSSProperties = {
        ...colorElement,
        ...colorRole,
        ...colorRoleDual,
    };

    return {
        intertypeProps,
        styles,
    };
};
