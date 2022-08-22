import React from 'react';
import { Socionics } from '../types';
import { INTERTYPES } from '../constants/socionicsTypes';
import { useColorElement } from './useColorElement';
import { useColorRole } from './useColorRole';

export const useIntertype = (id: Socionics.SocionicsType) => {
    const intertypeProps: Socionics.IntertypeProp & { id: Socionics.SocionicsType } = {
        id,
        ...INTERTYPES[id],
    };
    const { color: colorElement } = useColorElement(intertypeProps.element);
    const { color: colorRole } = useColorRole(intertypeProps.role);
    const styles: React.CSSProperties = {
        ...colorElement,
        ...colorRole,
    };

    return {
        intertypeProps,
        styles,
    };
};