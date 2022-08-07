import React from 'react';

import { SocionicsType } from '../types';
import { SOCIONICS_TYPE } from '../constants/socionicsType';
import { useColorQuadra } from './useColorQuadra';
import { useColorRole } from './useColorRole';

export const useSocionicsType = (id: SocionicsType.SocionicsType) => {
	const SocionicsTypeProps: SocionicsType.SocionicsTypeProp & { id: SocionicsType.SocionicsType } = {
		id,
		...SOCIONICS_TYPE[id],
	};
	const { color: colorQuadra } = useColorQuadra(SocionicsTypeProps.quadra);
	const { color: colorRole } = useColorRole(SocionicsTypeProps.role);
	const styles: React.CSSProperties = {
		...colorQuadra,
		...colorRole
	};

	return {
		SocionicsTypeProps,
		styles,
	}
};