import React from 'react';
import { Humanology } from '../types';
import { INTERTYPES } from '../constants/intertypes';
import { useColorElement } from './useColorElement';
import { useColorRole } from './useColorRole';

export const useIntertype = (id: Humanology.Intertype) => {
    const intertypeProps: Humanology.IntertypeProp & { id: Humanology.Intertype } = {
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