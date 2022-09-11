import { Socionics } from '../types';
import { SOCIOTYPES } from '../constants/socionicsTypes';
import { useColorElement } from './useColorElement';
import { useColorRole } from './useColorRole';
import { useColorRoleDual } from './useColorRoleDual';
import { useParams } from 'react-router-dom';

export const useSociotype = () => {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const sociotypeProps: Socionics.IntertypeProp & { id: Socionics.SocionicsType } = {
        id,
        ...SOCIOTYPES[id],
    };
    const { color: colorElement } = useColorElement(sociotypeProps.element);
    const { color: colorRole } = useColorRole(sociotypeProps.role);
    const { color: colorRoleDual } = useColorRoleDual(sociotypeProps.role);
    const styles = {
        ...colorElement,
        ...colorRole,
        ...colorRoleDual,
    };

    return {
        sociotypeProps,
        styles: Object.entries(styles).reduce((str, [key, val]) => str += `${key}:${val};`, ''),
    };
};
